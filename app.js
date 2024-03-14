const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

const supa = require("./services/keys")
//services
const general = require("./services/general")

// Set the view engine to use Pug
app.set("view engine", "pug");
// Set the views directory
app.set("views", path.join(__dirname, "views"));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
// Using the middleware
app.use(supa);
app.use(bodyParser.urlencoded({ extended: true }));

// Include routes
const adminRoute = require("./routes/admin");
const authRoute = require("./routes/auth");
const brokrage = require("./routes/brokrage");
const agentRoute = require("./routes/agents");
const othersRoute = require("./routes/others");
const filterRoute = require("./routes/filters");
// Define a route to render the index page
app.get("/", async (req, res) => {
    try {
        const { supabaseClient } = req;
        // await supabaseClient.auth.signInWithPassword({
        //     email: 'alexander@teamrene.com',
        //     password: 'admin1234'
        //   })
        // await supabaseClient.auth.signOut()
        const auth = await supabaseClient.auth.getSession()

        console.log('this is auth ',auth)
        // console.log('this is auth ',auth,data.session.user,e)
        const locations = await general.getAllLocations(supabaseClient);
        const data = await general.get(supabaseClient);
        res.render("index", { cards: data, l:locations ,auth});
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("An error occurred while fetching data");
    }
});
// Use routes
app.use("/admin", adminRoute);
app.use("/auth", authRoute);
app.use("/brokrage", brokrage);
app.use("/agent", agentRoute);
app.use("/agentflix", othersRoute);
app.use("/filter", filterRoute);

// Define a 404 route handler
app.use((req, res, next) => {
    res.status(404).render("./others/404");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
