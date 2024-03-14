const express = require("express");
const router = express.Router();

//services
const general = require("../services/general")

router.get("/forgotpassword", (req, res) => {
    res.render("auth/forgotPassword.pug");
});

router.get("/login", (req, res) => {
    res.render("auth/login.pug");
});
router.post("/loginform", async (req, res) => {
    const { supabaseClient } = req;
    await supabaseClient.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password
    })
    const auth = await supabaseClient.auth.getSession()
    if (auth.data.session) {
        const locations = await general.getAllLocations(supabaseClient);
        const data = await general.get(supabaseClient);
        res.render("index", { cards: data, l: locations, auth });
    } else {
        res.render("auth/login.pug");
    }
});
router.get("/logout", async (req, res) => {
    const { supabaseClient } = req;
    await supabaseClient.auth.signOut()
    res.render("auth/login.pug");
});
router.get("/admin", (req, res) => {
    res.render("auth/adminLogin.pug");
});
router.post("/adminform", (req, res) => {
    if (req.body.email === 'admin' && req.body.password === 'mustafa') {
        res.render("auth/userslist.pug");
    } else {
        res.render("auth/adminLogin.pug");
    }
});
router.get("/register", (req, res) => {
    res.render("auth/register.pug");
});

router.get("/resetpassword", (req, res) => {
    res.render("auth/resetPassword.pug");
});

module.exports = router;
