const express=require('express')
const router=express.Router()
const itemController=require('../controllers/itemController')

//CRUD operations
router.post('/items',itemController.createItem)
router.get('/items',itemController.getAllItems)
router.get('/items/:id',itemController.getItem)
router.put('/items/:id',itemController.updateItem)
router.delete('/items/:id',itemController.deleteItem)
router.get('/items/stats', itemController.getItemStats)

module.exports=router