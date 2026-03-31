const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedin, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedin,
        validateListing,
        wrapAsync(listingController.createListing)
    );

router
    .route("/new")
    .get(isLoggedin,listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
    isLoggedin,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing))
    .delete(
    isLoggedin,
    isOwner,
    wrapAsync(listingController.destroyListing));

router
    .route("/:id/edit")
    .get(
        isLoggedin,
        isOwner,
        wrapAsync(listingController.renderEditForm));

module.exports = router;