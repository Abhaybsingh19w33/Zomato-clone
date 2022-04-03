// Library
import express from "express";

// Models
import { UserModel } from "../../database/user";
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

export default Router;