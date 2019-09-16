const express = require('express');
const bodyParser = require ('body-parser');
const nodemailer = require('nodemailer');
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/form', (req, res)=> {

const transporter = nodemailer.createTransport({
    host: 'mail.niko.ge',
    port: 465,
    secure: true,
    auth: {
        user: 'niko@niko.ge',
        pass: 'gaebi1969'
    }
    });

let mailOptions = {

    from: 'niko@niko.ge',
    to: 'mchedlish@yahoo.com',
    name:req.body.name,
    subject: 'New Message',
    text: req.body.message
   
}

transporter.sendMail(mailOptions);




   
    console.log(req.body)



});

const PORT=process.env.PORT||3001;


app.listen(PORT, ()=>{
console.log(`Server listening to ${PORT}`)


})