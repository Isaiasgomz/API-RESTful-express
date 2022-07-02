app .get('/users', (req,res)=> {
  const {limit, offset} = req.query
  res.json({
    limit,
    offset
  })
})
