const {User, LoginUser,}=require('../models/user');
const mongoose = require('mongoose');
const registerUser=async(req,res)=>
{
    const info=req.body;
    console.log(info.email!="");
    if(info.email!="")
    {
        let olduser;
        olduser=await User.findOne({email:info.email});
        if(olduser)
        {
            res.send("Enter unique email");
            
        }
        else{
            const { firstname, lastname, email ,password } = req.body;
            const newUser=  new User(
                {
                    firstname,
                    lastname,
                    email,
                    password,
                }
            )
            newUser.save().then(()=>
            {
                res.send("registered succesfully");
            }).catch((err)=>
            {
                res.send(err);
            })
        }
       
    }
    else
    {
        let olduser;
        olduser=await User.findOne({phoneNumber:info.phoneNumber});
        if(olduser)
        {
            res.send("Enter unique phoneNumber");
            
        }
        else
        {
            const { firstname, lastname, phoneNumber ,password } = req.body;
            const newUser=  new User(
                {
                    firstname,
                    lastname,
                    phoneNumber,
                    password,
                }
            )
            newUser.save().then(()=>
            {
                res.send("registered succesfully");
            }).catch((err)=>
            {
                res.send(err);
            });
        }
        
    }

    

   
};

const loginUser=async (req,res)=>
{
    const loginInfo=req.body;
    if(loginInfo.email)
    {
        const {email,password}=req.body;
        let luser;
        luser=await User.findOne({email:email});
       
        if(luser && luser.password===password)
        {
           
            const firstname=luser.firstname;
            const lastname=luser.lastname;
           
            const loginuser=new LoginUser(
                {
                    firstname,
                    lastname,
                    email,
                    password,
                }
            )

            loginuser.save().then(()=>
            {
                 res.send("login succesfully");
             }).catch((err)=>
            {
                    res.send(err);
            });
            
        }
        else
        {
            res.send("invalid credentials");
        }
    }
    else
    {
        const {phoneNumber,password}=req.body;
        let luser;
        luser=await User.findOne({phoneNumber:phoneNumber});
       
        if(luser && luser.password===password)
        {
          
            const firstname=luser.firstname;
            const lastname=luser.lastname;
            const loginuser=new LoginUser(
                {
                    firstname,
                    lastname,
                    phoneNumber,
                    password,
                }
            )

            loginuser.save().then(()=>
            {
                 res.send("login succesfully");
             }).catch((err)=>
            {
                    res.send(err);
            });
            
        }
        else
        {
            res.send("invalid credentials");
        }
    }
    
}


const logout=async (req,res)=>
{
    const currentUser=await LoginUser.deleteMany();
    console.log(currentUser);
    res.send("logged out");
}


module.exports={
    registerUser,loginUser,logout
};