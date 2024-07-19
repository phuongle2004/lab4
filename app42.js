const express = require('express');
const mailer = require('nodemailer');

const app42 = express();

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'phuonglttph46328@fpt.edu.vn',
        pass: '24112004phuong'
    }
})

let mailOption = {
    from: 'phuonglttph46328@fpt.edu.vn',
    to: 'lphuong241124@gmail.com',
    subject: 'Gửi mail lab 4',
    text: 'Đây là mail gửi từ phuonglttph46328@fpt.edu.vn ngày 19/07/2024'
}

transporter.sendMail(mailOption, (err, info) => {
    if (err) {
        console.log('Error occurred:', err);
    } else {
        console.log('Message sent: %s', info.messageId);
    }
})

app42.listen(3002, () => {
    console.log('Server listening on port 3002...');  // server is listening on port 3002 to receive requests from client-side applications.
})