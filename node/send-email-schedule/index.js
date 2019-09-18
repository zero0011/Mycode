const nodeMailer = require("nodemailer");


const transporter = nodeMailer.createTransport({
    service:"qq",
    port:465, //  smtp
    user:"2732237782@qq.com",
    pass:''
})

