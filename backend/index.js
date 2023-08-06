const express=require('express');
const app=express();
const bodyParser=require("body-parser");
const port=3000;
const route=require('./src/route/userRoute');
const connectDB=require('./src/config/database');

//uses bodyparser middleware for parsing json data
app.use(bodyParser.json())

// This line configures the body-parser middleware to handle URL-encoded form data.
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
connectDB();
app.use('/',route);

app.listen(port,()=>
{
    console.log("listening on port");
});