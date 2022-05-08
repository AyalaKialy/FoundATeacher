const { format } = require('express/lib/response');
const winston = require('winston');
require('winston-mongodb');

const logconfiguration ={
    transports:[
        new winston.transports.Console(
            {level:'info'}),
        new winston.transports.File({
            level:'error',
            filename:'Logger/logger'
        }),
        new winston.transports.MongoDB({
            level:'error',
            db:'mongodb://localhost:27017/FoundATeacher',
            options:{useUnifiedTopology:true},
            collection: 'logger',
            // format : winston.format.combine(
            //    winston.format.timestamp(),
            //     winston.format.json(),)
        })   
    ],
    format : winston.format.combine(
        winston.format.timestamp({
            format:'MMM-DD-YYYY hh:mm:ss.SSS'
        }),
        winston.format.printf(info => `${info.level} : ${info.timestamp} : ${info.message}`)
    )
}

const logger = winston.createLogger(logconfiguration);
module.exports = logger;