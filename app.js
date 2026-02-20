const express = require("express");
const app =  express();
const path = require("path");
const mongoose = require("mongoose");
const port = 5000 ;
const methodOverride = require("method-override");
const Listing = require("./models/listing.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));

main().then(()=>{console.log("Connected to MongoDB");}).catch((err)=>{console.log(err);});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/staynest");
}

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

//index route
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//create route
app.post("/listings",async (req,res)=>{
    let {title,description,image,price,location,country} = req.body;
    let newListing = new Listing({
        title : title ,
        description:description,
        image:image,
        price:price,
        location:location,
        country:country
    });
    await newListing.save().then(()=>{console.log("New listing saved");}).catch((err)=>{console.log(err);});
    res.redirect("/listings");
});

//show route
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//edit route
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    let editListing = await Listing.findById(id);
    res.render("listings/edit.ejs",{editListing});
});

//update route
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let {title,description,image,price,location,country} = req.body;
    let editedListing = await Listing.findByIdAndUpdate(id,{
        title:title,
        description:description,
        image:image,
        price:price,
        location:location,
        country:country,
    });
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id", async (req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});
