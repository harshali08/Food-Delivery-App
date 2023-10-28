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


const express = require('express');
const router = express.Router();
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

    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        });
        
        resp.json({ success: true, user: newUser });
    } catch (error) {
        resp.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;