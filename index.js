const express = require('express')
const routerApi = require('./Routes')
const {logErrors, errorHandler, boomErrorHandler } = require('./Midlewares/hadler.error')
const boom = require('@hapi/boom')
const cors = require('cors')


const app = express();
const port = 3000;

app.use(express.json())



// const whiteList =['http://localhost:3000','http://myApp.com']
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   }
// }
// app.use(cors(options))



app.use(cors())

app.get('/', (req,res)=>{
  res.send('hola desde mi server')
})

app.get('/nuevaRuta', (req,res)=> {
  res.send('Esta es la nueva ruta')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port,()=>{
  console.log('hola desde mi server' +port)} )
