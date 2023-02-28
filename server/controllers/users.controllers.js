const User = require("../models/users.models");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

// SIGN UP: the client is sending this body object
//  { userName, userLastName
//     email: form.email,
//     password: form.password,
//     password2: form.password2
//  }

const register = async (req, res) => {
    const { name, lastName, email, password, password2 } = req.body;
    //json format
    if (!name || !lastName || !email || !password || !password2) {
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
            name, lastName, email, password: hash
        };
        await User.create(newUser);
        res.json({ ok: true, message: "Successfully registered" });
    } catch (error) {
        res.json({ ok: false, error });
    };

};


const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ ok: false, message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
        return res.json({ ok: false, message: "Invalid data provided" })
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ ok: false, message: "User doesn't exist" });
        }
        const match = await argon2.verify(user.password, password);
        if (match) {
            const token = jwt.sign({ userEmail: user.email }, jwt_secret, { expiresIn: "1d" });
            res.json({ ok: true, message: `Welcome ${user.name}!`, token, email, payload: user.countries });
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

// const handleCountries = async (req, res) => {
//     const { email, picNum, country, name } = req.body;
//     try {
//         const exist = await User.findOne({ "email": email, "countries.country": country })
//         debugger
//         if (exist) {
//             let temp = [...exist.countries]
//             let countryIdx = temp.findIndex(countryObj => countryObj.country === country)
//             temp[countryIdx].name = name
//             temp[countryIdx].qty += picNum
//             const updateQty = await User.findOneAndUpdate({ email: email }, {
//                 countries: temp
//             })
//             const fetchUserCountries = await User.findOne({ email: email })
//             res.send(fetchUserCountries)
//         } else {
//             const addCountry = await User.update({ email: email }, {
//                 $push: { countries: { country: country, name: name, qty: picNum } }
//             })
//             const fetchUserCountries = await User.findOne({ email: email })
//             res.send(fetchUserCountries)
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };






module.exports = { register, login, verify_token };