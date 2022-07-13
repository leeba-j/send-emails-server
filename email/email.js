const { createTransport } = require('nodemailer');
const path = require('path');
const HandleBars = require('nodemailer-express-handlebars');
const smtpTransport = require('nodemailer-smtp-transport')

const transporter = createTransport(smtpTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },

}));

const handlebarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialDir: path.resolve("templates"),
        defaultLayout: false
    },
    viewPath: path.resolve("templates"),
    extName: ".handlebars"
};

transporter.use("compile", HandleBars(handlebarOptions));

const getMailOptions = ({ name, email, weight, height, bmi }) => ({
    from: 'BMI<notifications@bmi.org>',
    to: email,
    subject: `BMI Report`,
    template: 'email-template',
    context: {
        name: name,
        weight: weight,
        height: height,
        bmi: bmi
    }
});

module.exports = { transporter, getMailOptions }