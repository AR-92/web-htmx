const express = require("express");
const router = express.Router();
const agent = require('../services/agents')
const general = require("../services/general")

router.get("/categories", (req, res) => {
    res.render("partials/categories.pug");
});

router.get("/banner", async (req, res) => {
    const { supabaseClient } = req;
    const user = req.query.user;
    const data = await agent.get(supabaseClient, user)
    res.render("partials/agentBanner.pug", { data: data[0] });
});

router.get("/sidebar", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        res.render("partials/sideBar.pug", { auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.get("/sidebarfilter", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        res.render("partials/sidebarfilter.pug", { auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
router.get("/sidebarmini", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        res.render("partials/sidebarMini.pug", { auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/navbar", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        res.render("partials/navBar.pug", { auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/subnav", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const locations = await general.getAllLocations(supabaseClient);
        res.render("partials/subNav.pug", { l: locations });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/agentsgrid", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const data = await general.get(supabaseClient);
        res.render("partials/agentsGrid.pug", { cards: data });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/agentlisting", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const user = req.query.user;
        const data = await agent.get(supabaseClient, user)
        res.render("partials/agentListing.pug", { data });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});

router.get("/agentcontact", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const user = req.query.user;
        const data = await agent.get(supabaseClient, user)
        res.render("partials/agentContact.pug", { data });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});


router.get("/filter", async (req, res) => {
    try {
        const { supabaseClient } = req;
        const auth = await supabaseClient.auth.getSession()
        const locations = await general.getAllLocations(supabaseClient);
        const data = await general.get(supabaseClient);
        res.render("partials/agentGridFilter.pug", { cards: data, l: locations, auth });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
module.exports = router;
