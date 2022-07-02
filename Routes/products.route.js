const express = require('express')
const productsServices = require('../services/services')

const services = new productsServices()

const router = express.Router()


router.get('/', (req,res)=>{
  const {size} = req.query
  const products = services.find()
    res.json(products)
})




router.get('/:id', (req,res) =>{
  const {id} = req.params
  const product = services.findOne(id)
  res.status(200).json(product)
})



router.post('/', (req, res)=>{
  const data = req.body
  const newProduct = services.create(data)
  res.status(201).json(newProduct)
})


router.patch('/:id', (req,res) => {
  const {id} = req.params
  const data = req.body
  let product = services.update(id,data)
  res.json(product)
})

router.delete('/:id', (req,res) => {
  const {id} = req.params
  let product = services.delete(id)
  res.json(product)
})

module.exports = router
