import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    menus: [{
        name: { type: String, required: true },
        items: [{
            type: mongoose.Types.ObjectId, refs: "Foods"
        }]
    }],
    recommended: [{
        type: mongoose.Types.ObjectId, refs: "Foods",
        unique: true
    }]
}, {
    timestamps: true
});

export const MenuModel = mongoose.model("Menu", MenuSchema);