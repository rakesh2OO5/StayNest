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
        default : "https://hips.hearstapps.com/hmg-prod/images/edc080123reddkaihoi-009-645aba4daf6e1.jpg?crop=0.919749189917098xw%3A1xh%3Bcenter%2Ctop&resize=1200%3A%2A",
        set: (v) => v==="" ? "default" : v,
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