const { Schema, model } = require("mongoose");

const EventSchema = Schema({
    title:{
        type: String,
        required:true
    },
    notes:{
        type: String,
    },
    start:{
        type:Date,
        required:true,
    },
    end:{
        type:Date,
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId, // Le dice a mongoose que va ser hacia referecia
        ref:'user',
        required:true
    }
})

EventSchema.method('toJSON',function(){
   const {__v, _id, ...Object} =  this.toObject();
   Object.id = _id;
   return Object
})

module.exports = model( "event",EventSchema )