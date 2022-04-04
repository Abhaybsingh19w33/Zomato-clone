// Library
import express from "express";
import passport from "passport";

// Models
import { UserModel } from "../../database/user";

// Validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

const Router = express.Router();

/*
Route   /signup
Des     Signup with email and password
Params  none
Access  Public
Method  Post
*/
Router.post("/signup", async (req, res) => {
    try {
        await ValidateSignup(req.body.credentials);

        // check whether email exist 
        // static methods from UserModel
        await UserModel.findByEmailAndPhone(req.body.credentials);

        // save to DB
        const newUser = await UserModel.create(req.body.credentials);

        // generate JWT auth token
        // second argument for jwt.sign is secretKey
        const token = newUser.generateJwtToken();

        // respond to req or return
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /signin
Des     SignIn with email and password
Params  none
Access  Public
Method  Post
*/
Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);

        // check whether email exist 
        // static methods from UserModel
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        // generate JWT auth token
        // second argument for jwt.sign is secretKey
        const token = user.generateJwtToken();

        // respond to req or return
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /google
Des     Google SignIn
Params  none
Access  Public
Method  GET
*/
Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"
    ],
})
);

/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/
// if google sign is failed then redirect to home page
Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        return res.json({ token: req.session.passport.user.token });
    }
);

export default Router;