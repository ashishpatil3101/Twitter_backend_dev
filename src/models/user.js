
const mongoose =  require('mongoose');
const bcrypt = require('bcrypt')

const userSchema  =  new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    }
},{ timestamps: true});

userSchema.pre('save', function ( next ){

    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPass =  bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPass;

    next();
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;