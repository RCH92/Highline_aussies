var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home.ejs'));
router.get('/about', (req, res) => res.render('about.ejs'));
router.get('/ourdogs', (req, res) => res.render('ourdogs.ejs'));
router.get('/litters', (req, res) => res.render('litters.ejs'));
router.get('/bredby', (req, res) => res.render('home.ejs')); //add this
router.get('/gallery', (req, res) => res.render('gallery.ejs'));
router.get('/info', (req, res) => res.render('info.ejs'));
router.get('/contact', (req, res) => res.render('contact.ejs'));
router.get('/ourdogs/allie', (req, res) => res.render('allie.ejs'));
router.get('/ourdogs/lulu', (req, res) => res.render('lulu.ejs'));
router.get('/ourdogs/dela', (req, res) => res.render('dela.ejs'));
router.get('/ourdogs/crush', (req, res) => res.render('crush.ejs'));
// router.get('*',function (req, res) {
//     res.redirect('/');
// });
module.exports = router;