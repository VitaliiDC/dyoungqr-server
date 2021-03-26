const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dyoungqr@gmail.com',
        pass: 'C2bVzM2S'
    }
})

app.post('/', (req, res) => {
    var mailOptions = {
        from: 'dyoungqr@gmail.com',
        to: 'cdrobitvitalii@gmail.com',
        subject: 'Хтось написав відгук для підліткового...',
        text: `Ім\я: ${req.body.name} | Повідомлення: ${req.body.message}`
      };
      
      mail.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.send('success')
})

app.listen(5000, () => console.log(5000))