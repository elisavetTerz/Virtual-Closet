const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClosetSchema = new mongoose.Schema({
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
    category: {
        type:String,
    },
    color: {
        type:String,
    },
    season: {
        type:String,
    },
    userId: {type:Schema.Types.ObjectId, ref:"users", required:true}, 
},
{strictQuery: false}
)

module.exports = mongoose.model('closet', ClosetSchema);