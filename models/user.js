const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //a password-hashing function
const jwt = require('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV);
const SALT_ROUNDS = 10;
//Salt Rounds: This is the cost factor that indicates the amount of time needed to calculate a single bcrypt hash. 
//Higher the salt rounds, the more hashing rounds are done, hence the time and difficulty is increased while brute-forcing. 
//For example, a cost factor of n means that the calculation will be done 2^n times.

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true, //trim leading/trailing white spaces from input, e.g. " sss@gmail.com  " is saved as "sss@gmail.com"
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    firstname:{
        type: String,
        maxlength: 100
    },
    lastname:{
        type: String,
        maxlength: 100
    },
    address1:{
        type: String,
        required: true
    },
    address2:{
        type: String
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    zipcode:{
        type: Number,
        required: true
    },
    role:{
        type: Number,
        default: 0
    },
    token:{
        type: String
    }
});
//pre-hook: do something before the event triggers
userSchema.pre('save', function(next){
// In document middleware functions ('init', 'validate', 'save', 'remove'), 'this' refers to the document (model).
    let user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
// If you call `next()` with an argument, that argument is assumed to be an error.
            if(err) return next(err);
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

//Tutorial 128
//callback is the function that we're going to call at last
//aka the logic inside comparePasswords in routes/user.js is going to be executed
//after bycrpt.compare()
userSchema.methods.comparePassword = function(candidatePassword, callback){
    let user = this;
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
        if(err) { return callback(err); } // could also pass in callback(err, isMatch)
        callback(null, isMatch); //no error, so assign error a null value
    });
};

//Tutorial 130
userSchema.methods.generateToken = function(callback){
    let user = this;
    let token = jwt.sign(user._id.toHexString(), config.SECRET);
    user.token = token;
    user.save((err, user) => {
        if(err) { return callback(err); }
        callback(null, user);
    });
}

userSchema.methods.deleteToken = function(token, callback){
    let user = this;
    //In MongoDB, the $unset operator is used to delete a particular field. 
    //The value specified in the $unset expression does not make any impact on the operation. 
    //The $unset has no effect when the field does not exist in the document.
    user.updateOne({$unset:{token:0}}, (err, user) => {
        if(err){ return callback(err); } 
        callback(null, user);
    });
}

//'statics' are the methods defined on the Model, 'methods' are defined on the document (instance).
userSchema.statics.findByToken = function(token, callback){
    let user = this; //this refer to User model
    jwt.verify(token, config.SECRET, (err, decode) =>{
        user.findOne({"_id": decode, "token": token}, (err, user)=>{
            if(err)  {
                console.log("models/user.js - findByToken err: " + err);
                return callback(err);
            }
            console.log('findByToken user'+ user);
            callback(null, user);
        })
    })
}


const User = mongoose.model('User', userSchema);
module.exports ={ User };
