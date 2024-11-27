const mongoose = require('mongoose')
const Mongo_URI="mongodb://localhost:27017/shradha"
const dbConnect=()=>{
    mongoose.connect(Mongo_URI)
    .then(()=>{
        console.log("mongodb successfully connected");
        
    })
    
}
module.exports=dbConnect