const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { auth } = require('../middleware/auth');

// POST /api/users/register
router.post('/register', (req, res) => {
    console.log('works');
    const user = new User(req.body);
    user.save((err, doc) => {
        if(err) {
            console.log(err);
            return res.status(500).json({success: false});
        }
        //TODO: Add logic to check if email has been registered
        res.status(200).json({
            success: true,
            user: doc
        });
    });
  
});

// POST /api/users/login
router.post('/login',(req,res)=>{
    User.findOne({'email': req.body.email},(err,user)=>{
        if(!user) return res.json({
            auth:false,
            message:'Auth failed, email not found',
            userData:false
        });

        // function(err, isMatch) is the callback that we passed to "userSchema.methods.comparePassword"
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                auth:false,
                message:'Wrong password',
                userData: false
            });
            //create an access token, which uniquely identifies the user's session
           user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                //Cookie contains key-value pairs: {"auth": user.token}
                console.log("/login generateToken: " + user.token);
                res.cookie('auth',user.token).json({
                    auth:true,
                    userData: {
                        id:user._id,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        address1: user.address1,
                        address2: user.address2,
                        city: user.city,
                        state: user.state,
                        country: user.country,
                        zipcode: user.zipcode,
                        role: user.role
                    }
                })
           })
        })
    })
});
// GET /api/users/auth
// use the 'auth' middleware to validate tokens 
router.get('/auth', auth, (req, res)=>{
    res.json({
        auth:true,
        userData:{
            id:req.user._id,
            email: req.user.email,
            firstname: req.user.firstname,
            lastname: req.user.lastname
        }
    });
});

// GET /api/users/logout
router.get('/logout', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        console.log('/logout: ' + req.token)
        if(err) {
            console.log("logout err" + err);
            return res.status(400).send(err);
        }
        res.status(200).send('goodbye');
    });
});
module.exports = router;