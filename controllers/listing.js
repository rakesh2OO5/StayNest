const Listing = require("../models/listing");
const axios = require("axios");

module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    return res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm = (req,res)=>{
    return res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    const location = req.body.listing.location;
    try{

        const geoRes = await axios.get(
            `https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${process.env.MAP_TOKEN}`
        );
        if (!geoRes.data.features.length) {
            req.flash("error", "Invalid location!");
            return res.redirect("/listings/new");
        }
        const coordinates = geoRes.data.features[0].geometry.coordinates;
        newListing.geometry = {
            type: "Point",
            coordinates: coordinates
        };
        await newListing.save();
        req.flash("success", "New Listing Created!");
        return res.redirect("/listings");
    }catch(err){
        console.error(err);
        req.flash("error", "Geocoding failed. Try again.");
        return res.redirect("/listings/new");
    }
};

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate({
        path:"reviews",
        populate : {
            path:"author"
        }
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Requested listing does not exist!");
        return res.redirect("/listings");
    }
    return res.render("listings/show.ejs",{listing,mapToken : process.env.MAP_TOKEN});
};

module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    let editListing = await Listing.findById(id);
    if(!editListing){
        req.flash("error","Requested listing does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = editListing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250/e_blur:100");
    return res.render("listings/edit.ejs",{editListing,originalImageUrl});
};

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, req.body.listing, {new:true});
    if(typeof req.file!== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        const location = req.body.listing.location;
        if (location) {
            const geoRes = await axios.get(
                `https://api.maptiler.com/geocoding/${encodeURIComponent(location)}.json?key=${process.env.MAP_TOKEN}`
            );
            if (geoRes.data.features.length) {
                listing.geometry = {
                    type: "Point",
                    coordinates: geoRes.data.features[0].geometry.coordinates
                };
            }
        }
        await listing.save();
    }
    req.flash("success","Listing Updated!");
    return res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    return res.redirect("/listings");
};