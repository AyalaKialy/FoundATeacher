const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstName : { type:String, require:true},
    lastName : { type:String, require:true},
    email : { type:String,
              require:true,
              unique: true,
              validate(value){
                  if(!validator.isEmail(value))
                      throw new Error('please enter valid email')
              }},
    password : { type:String, require:true},
    adress : [{city: {type: String},
               street: {type:String},
               bilding: {type:Number, min:1}}],
    lastVisit : { type:Date}
    });


    userSchema.virtual('allOrdersByUserId',{
        ref:'order',
        localField:'_id',
        foreignField:'userId'
        },{virtuals:true})
        
        userSchema.set('toJSON',{virtuals:true})

module.exports = mongoose.model('user',userSchema);


