const { connect } = require('mongoose');

const connectDatabase = async (mongoUrl) => {
    connect(mongoUrl, {  useUnifiedTopology: true })
        .then(() => console.log('Çonnected to Database'))
        .catch(error => console.log(`Failed to connect to DB: ${error}`));
};

module.exports = { connectDatabase }