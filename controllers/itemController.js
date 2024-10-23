//Import the 'Item' model corresponding to the schema
const Item=require('../models/item')

exports.createItem=async(req,res)=>{
    // Parse the item from request body
    const item=new Item(req.body)
    console.log(item)
    try
    {
        await item.save()
        res.status(201).send(item)
    }
    catch(error)
    {
        res.status(400).send(error)
    }
}

exports.getAllItems=async(req,res)=>{
    try{
        const items=await Item.find()
        res.status(200).send(items)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

exports.getItem=async(req,res)=>{
    try
    {
        const item=await Item.findById({_id:req.params.id})
        res.status(200).send(item)
    }
    catch(error)
    {
        res.status(404).send(error)
    }
}

exports.updateItem=async(req,res)=>{
    try
    {
        const item=await Item.findByIdAndUpdate(req.params.id,req.body)
        if(!item)
        {
            res.status(404).send(item)
        }
        res.status(200).send(item)
    }
    catch(error)
    {
        res.status(400).send(error)
    }
}

exports.deleteItem=async(req,res)=>{
    try{
        const item=await Item.findByIdAndDelete(req.params.id)
        if(!item)
        {
            res.status(404).send(item)
        }
        res.status(204).send(item)
    }
    catch(error)
    {
        res.status(400).send(error)
    }
}

exports.getItemStats = async (req, res) => {
    try {
        const stats = await Item.aggregate([
            { $group: { _id: null, totalQuantity: { $sum: "$quantity" } } }
        ]);
        res.status(200).send(stats);
    } catch (error) {
        res.status(500).send(error);
    }
};


