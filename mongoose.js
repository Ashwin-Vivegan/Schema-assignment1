const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    roles:{type:String,default:[]}
})

const user = mongoose.model("user",userschema)

const profilSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number}
})

const profile = mongoose.model("user",profilSchema)

const activitytracking = new mongoose.Schema({
    lastlogin:{type:Date}
})

const activity = mongoose.model("user",activitytracking)

module.exports = mongoose.model('user',userschema);
module.exports = mongoose.model('profile',profilSchema);
module.exports = mongoose.model('activity',activitytracking);