const User = require("../models/users.models");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;


const register = async (req, res) => {
    const { username, email, password, password2 } = req.body;
    //json format
    if (!username || !email || !password || !password2) {
        return res.json({ ok: false, message: "All fields required" });
    }
    if (password !== password2) {
        return res.json({ ok: false, message: "Passwords do not match" });
    }
    if (!validator.isEmail(email)) {
        return res.json({ ok: false, message: "Invalid email" });
    }
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ ok: false, message: " This user already exists" });
        }
        const hash = await argon2.hash(password);
        console.log("hash ==>", hash);
        const newUser = {
            username, email, password: hash
        };
        await User.create(newUser);
        res.json({ ok: true, message: "Successfully registered" });
    } catch (error) {
        res.json({ ok: false, error });
    };

};


const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.json({ ok: false, message: "All fields are required" });
    }
    if (!validator.isUsername(username)) {
        return res.json({ ok: false, message: "Invalid data provided" })
    }
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ ok: false, message: "User doesn't exist" });
        }
        const match = await argon2.verify(user.password, password);
        if (match) {
            const token = jwt.sign({ userName: user.username }, jwt_secret, { expiresIn: "1d" });
            res.json({ ok: true, message: `Welcome ${user.username}!`, token });
        } else {
            return res.json({ ok: false, message: "Invalid data provided" });
        }
    } catch (error) {
        res.json({ ok: false, error });
    };
};
const verify_token = (req, res) => {
    console.log(req.headers);
    const token = req.headers.authorization;
    jwt.verify(token, jwt_secret, (error, success) => {
        error ? res.json({ ok: false, message: "something went wrong" }) : res.json({ ok: true, success })
    });
};



module.exports = { register, login, verify_token };