// const express=require('express')
// const router=express.Router();
// const User=require('../models/User')
// const {body,validationResult}=require('express-validator')

// router.post('/createuser',[
//     body('email').isEmail(),
//     body('name').isLength({min:3}),
//     body('password').isLength({min:6})

    
// ],
// async(req,resp)=>{

//     const result = validationResult(req);
//     if (result.isEmpty()) {
//       return resp.send(`Hello, ${req.query.person}!`);
//     }
  
//     resp.send({ errors: result.array() });

//     try {
//         User.create({
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password,
//             location:req.body.location
//         })
//         resp.json({success:true})
//     } catch (error) {
//         // resp.json({error})
//         resp.json({success:true})
//     }
// })

// module.exports=router;


const express = require('express')
const router = express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const secretKey="mynameisharshali"
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/createuser', [
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 6 })
], async (req, resp) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    const secPassword=await bcrypt.hash(req.body.password,salt);
    console.log(secPassword)

    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location
        });
        
        resp.json({ success: true, user: newUser });
    } catch (error) {
        resp.status(500).json({ success: false, error: error.message });
    }
});

router.post('/loginuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
], async (req, resp) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
    }

    let useremail = req.body.email;

    try {
        const userData = await User.findOne({ email: useremail });

        if (!userData) {
            return resp.status(400).json({ error: "Enter Valid Credentials!" });
        }
        const pwdCompare= await bcrypt.compare(req.body.password,userData.password)
        if (!pwdCompare) {
            return resp.status(400).json({ error: "Enter Correct Password" });
        }

        // If the password matches, return the user info
        const data={
            users:{
               id:userData.id
            }
        }
        const authToken=await jwt.sign(data,secretKey)
        return resp.json({ success: true, user: userData,authToken:authToken });
    } catch (error) {
        return resp.status(500).json({ success: false, error: error.message });
    }
});


module.exports = router;
