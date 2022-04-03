import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address:
        [
            {
                detail: { type: String },
                for: { type: String }
            }
        ],
    phoneNumber: [{ type: Number }]
}, {
    timestamps: true
});
// global mathod 
// only after creating user we need this data
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "zomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    // check whether email exist 
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exist!");
    }

    return false;
};

// this will run this fuction while in some state of database
// while saving the data or creating a data this method will run
// here we define this function for save at create stage
UserSchema.pre("save", function (next) {
    // refer to the current user, for which this function is called
    const user = this;
    // here we are implementing our logic in between
    // then the control will passed to next function
    // here we are checking if password is modified or not
    if (!user.isModified("password")) return next();

    // hash password
    // salt - number of iteration while hashing
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);

        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            user.password = hash;
            return next();
        });
    });
});

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    // check whether email exist 
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new Error("User does not exist!");
    }

    // compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) {
        throw new Error("Invalid Password!");
    }

    return user;
};

export const UserModel = mongoose.model("Users", UserSchema);