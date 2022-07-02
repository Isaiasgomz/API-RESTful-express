const express = require('express')
const productsServices = require('../services/services')
const validatorHandler =require('../Midlewares/validator.schema')
const {createProductsSchema, getProductsSchema, updateProductsSchema} = require('../Schemas/schemas.products')

const services = new productsServices()

const router = express.Router()


router.get('/',async (req,res)=>{
  const {size} = req.query
  const products = await services.find()
    res.json(products)
})




router.get('/:id',
  validatorHandler(getProductsSchema,'params'),
    async (req,res,next) =>{
      try {
        const {id} = req.params
        const product =await services.findOne(id)
        res.status(200).json(product)
      } catch (error) {
        next(error)
      }

})



router.post('/',
  validatorHandler(createProductsSchema, 'body'),
    async (req, res)=>{
      const data = req.body
      const newProduct =await services.create(data)
      res.status(201).json(newProduct)
})


router.patch('/:id',
  validatorHandler(getProductsSchema, 'params'),
  validatorHandler(updateProductsSchema, 'body'),
    async (req,res,next) => {
    try {
      const {id} = req.params
      const data = req.body
      let product =await services.update(id,data)
      res.json(product)
    } catch (error) {
        next(error)
    }

})

router.delete('/:id',async (req,res) => {
  const {id} = req.params
  let product =await services.delete(id)
  res.json(product)
})

module.exports = router
