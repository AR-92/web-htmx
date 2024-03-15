const express = require("express");
const router = express.Router();
const general = require("../services/general")

router.get("/profile", async(req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const locations = await general.getAllLocations(supabaseClient);
        const data = await general.get(supabaseClient);
        res.render("brokrage/profile.pug", { cards: data, l: locations ,auth});
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

module.exports = router;
