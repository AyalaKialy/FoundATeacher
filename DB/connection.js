const mongoose = require('mongoose');
const {CONNECTION_STRING} = require('../config')

main().catch(err => console.log(err));

async function main() {
  if(await mongoose.connect(CONNECTION_STRING) )
      console.log("connect to mongo!!!");
  else
  console.log("not connect to mongo");
    
}