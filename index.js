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
  const cost = 0;
  /*
  if (mail = "Letters (Stamped)") {
    if (weight <= 1) {
      cost = 0.55;
    }
    else if (weight <= 2) {
      cost = 0.70;
    }
    else if (weight <= 3) {
      cost = 0.85;
    }
    else if (weight <= 3.5) {
      cost = 1.00;
    }
  }
  */
  const params = {mail: mail, weight: weight, cost: cost};
  res.render("getRate", params);
}
