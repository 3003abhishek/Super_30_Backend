const express = require('express'); 
const authMiddleware = require('../middlewares/auth.middleware') ;

const router = express.Router() ;


router.get('/',authMiddleware, async (req,res)=>{
    res.json({
        message:"Get all products",
        user:req.user
    });
});

module.exports = router ;