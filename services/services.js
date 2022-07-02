const { faker } = require('@faker-js/faker');

class productsServices {

  constructor(){
    this.products = []
    this.generator()

  }

  generator(){
    const limit = 100
    for (let index = 0; index < limit; index++) {
    this.products.push({
      "id": faker.datatype.uuid(),
      "name":faker.commerce.productName(),
      "price": parseInt(faker.commerce.price(),10),
      "img":faker.image.imageUrl()
      })
    }
  }

  create(data){
    const newProduct =  {
      "id": faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find(){
    return this.products
  }

  findOne(id){
    return this.products.find(item => item.id === id)

  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
      throw new Error('product not found')
    }
    let value = this.products[index]
    let newProduct = this.products[index] ={
      ...value,
      ...changes
    }
    return newProduct
  }

  delete(id){
    let index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('Product not found')
    }
    this.products.splice(index,1)
    return id
  }


}

module.exports = productsServices
