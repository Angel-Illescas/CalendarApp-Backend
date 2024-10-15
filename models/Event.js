const { Schema, model } = require("mongoose");

const EventSchema = Schema({
    title:{
        type: String,
        require:true
    },
    notes:{
        type: String,
    },
    start:{
        type:Date,
        require:true,
    },
    end:{
        type:Date,
        require:true,
    },
    user:{
        type:Schema.Types.ObjectId, // Le dice a mongoose que va ser hacia referecia
        ref:'user',
    }
})

module.exports = model( "event",UserSchema )