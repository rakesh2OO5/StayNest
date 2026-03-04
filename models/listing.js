const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title :{
        type : String,
        required :true
    },
    description :{
        type : String
    },
    image :{
        type: String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVWtZBC4l-ZcE3xvnRNel3zz-6nPWBlZgEw&s",
        set: (v) => v==="" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVWtZBC4l-ZcE3xvnRNel3zz-6nPWBlZgEw&s" : v,
    },
    price:{
        type : Number
    },
    location:{
        type : String
    },
    country :{
        type:String
    }
});

const Listing = new mongoose.model("Listing",listingSchema);

module.exports = Listing ;