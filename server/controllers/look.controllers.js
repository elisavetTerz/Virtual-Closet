const Look = require("../models/look.models");
const cloudinary = require("cloudinary");
const Users = require('../models/users.models')
const ObjectId = require('mongoose').Types.ObjectId;

// remember to add your credentials to .env file
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const upload = async (req, res) => {
    const { userName } = req.body;
    try {
        const user = await Users.findOne({ username: userName })
        console.log(user._id);
        let closet = files.map((item) => {
            return {
                public_id: pic.uploadInfo.public_id,
                photo_url: pic.uploadInfo.secure_url,
                userId: new ObjectId(user._id)
            };
        });
        const created = await Closet.create(closet);
        console.log(created);
        res.json({ ok: true, created });
    } catch (error) {
        res.json({ ok: false });
    }
};

const remove = async (req, res) => {
    const { _id } = req.params;
    try {
        const deleted = await Pictures.findByIdAndRemove({ _id: _id });
        if (deleted.public_id) {
            await cloudinary.v2.api.delete_resources([deleted.public_id]);
            res.json({ ok: true, deleted });
        } else {
            res.json({ ok: false });
        }
    } catch (error) {
        res.json({ ok: false });
    }
};

const update = async (req, res) => {
    const { id } = req.body;
    try {
        const updated = await Pictures.findOneAndUpdate({ public_id: id }, {
            category: category,
            color: color,
            season: season
        });
        console.log(updated);
        res.json({ ok: true, updated });
    } catch (error) {
        res.json({ ok: false });
    }
};

const get_look = async (req, res) => {
    const { _id, user } = req.params
    console.log(user);
    try {
        const userFound = await Users.findOne({ username: user })
        const closet = await Closet.find({ season: season, userId: userFound._id });
        res.json({ ok: true, closet });
    } catch (error) {
        res.json({ ok: false });
    }
};

module.exports = { upload,remove, update, get_look };
