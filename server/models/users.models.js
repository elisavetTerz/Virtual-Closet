const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
},
//  That means that all the fields will be saved in the database, even if some of them are not specified in the Schema model.
{strictQuery: false}
)

//'users' is the name of our collection in our database
module.exports = mongoose.model('users', UserSchema);