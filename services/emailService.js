const { getMailOptions, transporter } = require('../email/email')
const { createUser } = require('../DB/DBQueries')
const { getBMI } = require('../services/UserService')

const createdUserAndSendEmail = async (userDetails) => {
    await createUser(userDetails);
    const bmi = getBMI(userDetails.weight, userDetails.height)
    const mailOptions = getMailOptions({ ...userDetails, bmi: bmi });
    sendEmail(mailOptions, userDetails.email)
    return `Operation successfully completed`;
};

const sendEmail = (mailOptions, email) => {
    transporter.sendMail(mailOptions, (error, info) => {
        error ? console.log('Error: ', error) : console.log(`Email sent to ${email}. `, info.response);;
    });
}

module.exports = {
    createdUserAndSendEmail
}