var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('node', {title : req.params.userTitle ? req.params.userTitle : ''});
});

router.post('/', function(req, res, next){
   var email = req.body.email;
   var user = new User({
     firstName: 'Tiago',
     lastName: 'Ferreira',
     password: 'biruta',
     email: email,
   })
   user.save();
   res.redirect('/');
})

module.exports = router;
