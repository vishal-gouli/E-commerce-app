const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const app = express();
app.use(cors());
app.use(express.json({}))

 mongoose.connect("mongodb://localhost:27017/crudoperation")
.then(()=>console.log("server is connected to backend"))
.catch((err)=>console.log(err));

const PORT = process.env.PORT || 9000

// schema

const schemadata = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
} , {
    timeStamps :true
})

const usermodel = mongoose.model("users", schemadata)

// reading

app.get("/" , async(req,res)=>{
    const data = await usermodel.find({})
    res.json({ message : "Server is running at port" ,  data:data})
})

//ive add comments 
//vishal is good 

// create data || read data in mongodb
// app.post("/create" ,upload.single('image'), async(req,res)=>{
app.post("/create" , async(req,res)=>{
    
    console.log(req.body , req.file)
    const data = new usermodel(req.body)
    await data.save();
    res.send({success: true ,message:"data saved successfully"})
})

app.listen(PORT , ()=>{
    console.log("server is running at port : http//localhost 9000")
})

// update data
// app.put("/update" , async(req,res)=>{
//     await usermodel.updateOne({_id:req.body.id} , {name : "amith111"});
//     res.send({success : true , message: " data updated successfully"})
//     console.log(req.body)
// })


