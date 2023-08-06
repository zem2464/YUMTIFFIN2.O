const mongoose=require('mongoose');

//mongoose is Object Data Modeling for node nd mongodb
//used for coonection,schema,validation,middleware
const connectDb=async()=>
{
    try{
        await mongoose.connect('mongodb://localhost:27017/registrationDB',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected");

    }
    catch(error)
    {
        console.log("error connecting to mongodb",error);
        process.exit(1);
    }
}

module.exports=connectDb;