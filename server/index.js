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

// microservice routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middleware
// It parses incoming requests with JSON payloads and is based on body-parser.
zomato.use(express.json());
// It parses incoming requests with urlencoded payloads and is based on body-parser.
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
// imported routes, now merge it, with express
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is running"))
        .catch(() =>
            console.log("Server is running, but database connection failed... ")
        )
);