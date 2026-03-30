const mongoose = require("mongoose");
const Listing = require("../models/listing.js")
const initData = require("./data.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/staynest");
};
main().then(()=>{console.log("Connected to StayNest");}).catch((err)=>{console.log(err);});

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({...obj , owner : "69c95a471855f6fd514650e0"}));
    await Listing.insertMany(initData.data).then(()=>{console.log("DB initialized");}).catch((err)=>{console.log(err);});
};

initDB();