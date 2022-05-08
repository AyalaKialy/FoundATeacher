const express = require('express');
const app = express();
require('./DB/connection');
const {ENVIRONMENT,PORT} = require ('./config');
const logconfig = require('./Logger/configuration');
const winston = require('winston')
const logger = winston.createLogger(logconfig);

const user = require('./Router/userRoute');
const path = require('path')

app.use(express.json());
app.use(express.static('./Static'));

app.use('/api/user',user);

app.use((err, req, res, next)=>{
    if (ENVIRONMENT=='development')
    logger.error(err.message)
    if(err.message == 'user validation failed: email: please enter valid email')
    res.status(400).send(err.message)
    else
    res.status(500).send(err.message)
})

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,'./Static/Html/404.html'));

});

app.listen(PORT,()=> logger.info(`server is runing on port ${PORT}`));





