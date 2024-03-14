const express = require("express");
const router = express.Router();

router.get("/landing", (req, res) => {
    res.render("others/landing");
});
router.get("/privacypolicy", (req, res) => {
    res.render("others/privacyPolicy.pug");
});
router.get("/terms", (req, res) => {
    res.render("others/terms.pug");
});
router.get("/contact", (req, res) => {
    res.render("others/contactus.pug");
});
router.get("/soon", (req, res) => {
    res.render("others/soon.pug");
});
router.get("/about", (req, res) => {
    res.render("others/aboutus.pug");
});
module.exports = router;
