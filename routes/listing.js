const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedin, isOwner,validateListing} = require("../middleware.js");

//index route
router.get(
    "/",
    wrapAsync(async (req,res)=>{
        const allListings = await Listing.find({});
        res.render("listings/index.ejs",{allListings});
    })
);

//new route
router.get("/new",isLoggedin,(req,res)=>{
    res.render("listings/new.ejs");
});

//create route
router.post(
    "/",
    isLoggedin,
    validateListing,
    wrapAsync(async (req,res)=>{
        let newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
    })
);

//show route
router.get(
    "/:id",
    wrapAsync(async (req,res)=>{
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
        res.render("listings/show.ejs",{listing});
    })
);

//edit route
router.get(
    "/:id/edit",
    isLoggedin,
    isOwner,
    wrapAsync(async (req,res)=>{
        let {id} = req.params;
        let editListing = await Listing.findById(id);
        if(!editListing){
            req.flash("error","Requested listing does not exist!");
            return res.redirect("/listings");
        }
        res.render("listings/edit.ejs",{editListing});
    })
);

//update route
router.put(
    "/:id",
    isLoggedin,
    isOwner,
    validateListing,
    wrapAsync(async (req,res)=>{
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, req.body.listing, {new:true});
        req.flash("success","Listing Updated!");
        res.redirect(`/listings/${id}`);
    })
);

//delete route
router.delete(
    "/:id",
    isLoggedin,
    isOwner,
    wrapAsync( async (req,res)=>{
        let {id}= req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success","Listing Deleted!");
        res.redirect("/listings");
    })
);

module.exports = router;