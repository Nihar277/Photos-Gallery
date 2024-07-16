const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb+srv://whitehat2774:CZuB9d0b3ksJHz2x@cluster0.sjpnq7x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/gallery")
const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  contact:Number, 
  board:{
    type:Array,
    default:[]
  },
  
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
})


//using plugin password serialize and deserialize function de rhe samje 
// jiss hash password store ho rha 
userSchema.plugin(plm,{usernameField:'email'})

module.exports  = mongoose.model("User",userSchema)