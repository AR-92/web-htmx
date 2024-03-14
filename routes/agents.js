const express = require("express");
const router = express.Router();
const agent = require('../services/agents')
const general = require("../services/general")

router.get("/profile", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/profile.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.get("/public", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/public.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
    // res.render("agent/public.pug");
});
router.get("/addlistings", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/addListings.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.get("/listings", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/listings.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.get("/contact", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/contactagent.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.get("/settings", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/settings.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
    // res.render("agent/settings.pug");
});
router.get("/settings/accountdelete", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/settings/accountDelete.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
    // res.render("agent/settings/accountDelete.pug");
});
// router.get("/settings/2factor", (req, res) => {
//     res.render("agent/settings/2factor.pug");
// });
router.get("/settings/changepassword", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/settings/changePassword.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
    // res.render("agent/settings/changePassword.pug");
});
// router.get("/settings/notificationsettings", (req, res) => {
//     res.render("agent/settings/notificationSettings.pug");
// });
router.get("/settings/profilesettings", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const user = req.query.user;
        const locations = await general.getAllLocations(supabaseClient);
        const data = await agent.get(supabaseClient, user)
        const bro = await agent.getBro(supabaseClient, data[0].brokerage_id);
        // console.log(data, locations, bro)
        res.render("agent/settings/profileSettings.pug", { data: data[0], l: locations, brokrage: bro[0],auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
    // res.render("agent/settings/profileSettings.pug");
});

module.exports = router;
