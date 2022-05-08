require('dotenv').config();

const PORT=process.env.PORT; 
const CONNECTION_STRING=process.env.CONNECTION_STRING;
const ENVIRONMENT=process.env.ENVIRONMENT;
module.exports = {PORT,CONNECTION_STRING,ENVIRONMENT}

