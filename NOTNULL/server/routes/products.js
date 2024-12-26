const express = require('express')
const router = express.Router();
const Products = require('../models/products')


// router.route('/products/list/:products_num')
// .get(async(req,res,next)=>{
//     try{
//        const {products_num} = req.params;
//        const product = await Products.findOne({
//         where: {id:products_num}
//        })
//        res.json(product)
//     }catch(err){
//         console.error(err)
//         next(err)
//     }
// })


router.get('/products/:product_id',async(req,res,next)=>{
    try{
        const {product_id} = req.params;
        const product = await Products.findOne({
            where:{id:product_id}
        })
        res.json(product)
    }catch(err){
        console.error(err)
        next(err)
    }
})


module.exports = router;