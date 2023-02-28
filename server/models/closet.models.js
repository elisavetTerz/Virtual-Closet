const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new mongoose.Schema({
    photo_url:{ 
        type:String, 
        unique:true, 
        required:true 
    },
    public_id:{ 
        type:String,
        unique:true, 
        required:true 
    },
    country: {
        type:String, 
        required: true
    },
    title: {
        type:String,
    },
    description: {
        type:String,
    },
    userId: {type:Schema.Types.ObjectId, ref:"users", required:true}
},
{strictQuery: false}
)

module.exports = mongoose.model('pictures', PictureSchema);