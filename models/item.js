const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    // Adding Indexes and Validation
    name:{type:String, required:true, unique:true},
    quantity:Number,
    description:String
})

const itemModel=mongoose.model('Item',itemSchema)
module.exports=itemModel