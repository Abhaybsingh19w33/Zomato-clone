// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user";
const Router = express.Router();

/*
Route   /signup
Des     Signup with email and password
Params  none
Access  Public
Method Post
*/
Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;

        // check whether email exist 
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ error: "User already exist!" });
        }

        // hash password
        // salt - number of iteration while hashing
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPasswrod = await bcrypt.hash(password, bcryptSalt);

        // save to DB
        await UserModel.create({ ...req.body.credentials, password: hashedPasswrod });

        // generate JWT auth token
        // second argument for jwt.sign is secretKey
        const token = jwt.sign({ user: { fullname, email } }, "zomatoAPP");

        // respond to req or return
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;