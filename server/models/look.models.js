const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LookSchema = new mongoose.Schema({
    looks: [{
        closet_items: [{photo_url:{
            type: String,
            unique: true,
            required: true
        }}],
        look_number: { type: Number, unique: true, required: true },
        title: { type: String },
    }],
    userId: {type:Schema.Types.ObjectId, ref:"users", required:true}, 
}, { strictQuery: false })

module.exports = mongoose.model('look', LookSchema);