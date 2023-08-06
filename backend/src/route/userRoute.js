const express=require('express');


//create new router object
//this object represent mini router that you can use to define routes and middleware specific to a particular group of routes.
const router=express.Router();
const {registerUser,loginUser,logout}=require('../controller/userController');

//register 
router.post('/register', registerUser);
router.post('/login',loginUser);
router.delete('/logout',logout);
module.exports=router;