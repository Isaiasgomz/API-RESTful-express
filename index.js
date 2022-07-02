const express = require('express')
const app = express();
const port = 3000;
const routerApi = require('./Routes')

app.use(express.json())

app.get('/', (req,res)=>{
  res.send('hola desde mi server')
})

app.get('/nuevaRuta', (req,res)=> {
  res.send('Esta es la nueva ruta')
})

routerApi(app)

app.listen(port,()=>{
  console.log('hola desde mi server' +port)} )
