const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static('public'))
  .set('views', 'views')
  .set('view engine', 'ejs')
  .get("/getRate", calcRate)
  
  //.get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function calcRate(req, res) {
  const mail = req.query.mail;
  const weight = Number(req.query.weight);
  const params = {mail: mail, weight: weight};
  res.render("getRate", params);
}
