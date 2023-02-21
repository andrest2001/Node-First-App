const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure:true,
  auth:{
    user: 'andres13072001@gmail.com',
    pass: 'azgkbzpkjilkdqzo'
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Segunda app con express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


router.post('/send-email',async(req,res)=>{
  await transporter.sendMail({
    from: '"Fred Foo 👻" <andres13072001@gmail.com>', // sender address
    to: "andres13072001@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    
  });
  res.redirect('/send-email')
})

module.exports = router;
