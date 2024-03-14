const express = require("express");
const router = express.Router();
const general = require("../services/general")

router.get("/topagents", async(req, res) => {
    try {
        const { supabaseClient } = req;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await general.get(supabaseClient);
        res.render("filter/topAgents.pug", { cards: data, l: locations });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/topbrokrages", (req, res) => {
    res.render("filter/topBrokrages.pug");
});

module.exports = router;
