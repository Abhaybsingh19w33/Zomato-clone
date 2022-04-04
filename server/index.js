// Importing env variables
require("dotenv").config();

// Libraries
import express from "express";
// cross origin requests
// it will allow the requests from other than your server
// for security purposes
import cors from "cors";
// for  security
// add few layers for security
import helmet from "helmet";
import passport from "passport";
import expressSession from "express-session";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middleware
// @TODO work on this express-session
// this may be the source of various problems
zomato.use(expressSession({ secret: "zomatoAPP", resave: true, saveUninitialized: true }));
// It parses incoming requests with JSON payloads and is based on body-parser.
zomato.use(express.json());
// It parses incoming requests with urlencoded payloads and is based on body-parser.
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleAuthConfig(passport);
routeConfig(passport);

// Application routes
// imported routes, now merge it, with express
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is running"))
        .catch(() =>
            console.log("Server is running, but database connection failed... ")
        )
);