const express = require("express");
const router = express.Router();

//services
const general = require("../services/general")

router.get("/userslist", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await general.get(supabaseClient);
        res.render("admin/usersList.pug", { cards: data, l: locations });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/editusers", (req, res) => {
    res.render("admin/editUser.pug");
});

router.get("/locationslist", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const locations = await general.getAllLocations(supabaseClient);
        res.render("admin/locationsList.pug", { l: locations });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
    // res.render("admin/locationsList.pug");
});

router.get("/brokrageslist", (req, res) => {
    res.render("admin/brokragesList.pug");
});

router.get("/editbrokrages", (req, res) => {
    res.render("admin/editbrokrage.pug");
});

module.exports = router;
