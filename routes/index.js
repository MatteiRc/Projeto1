const assistant = require('../routes/watsonAssistant')

module exports = router  => {

  //Metodo POST
  router.post('/', (req, res) => {

    const { text,context } = req.body
    
    const params = {
      input: {text},
      workspace_id: '365cd98a-c82b-4af1-b03b-b26216d5237e',
      context
    }

    assistant.message(params, (err, response) => {
      if(err)
        res.status(500).send(err)

      res.send(response)
      //res.send("TESTE")
    })

})
// FIM DO POST


};

/* ======= ORIGINAL DO MATTEI ======= */

//var express = require('express');
//var router = express.Router();

/* GET home page. */ 
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Puc: Watson Assistant!' });
//});

//module.exports = router;

/* ======= ORIGINAL DO MATTEI ======= */