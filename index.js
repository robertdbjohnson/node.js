const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static('public'))
  .set('views', 'views')
  .set('view engine', 'ejs')
  .get("/form", function(req, res) {
    res.render("getRate")
  })
  //.get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
