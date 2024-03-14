const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
    res.render("brokrage/profile.pug");
});

module.exports = router;
