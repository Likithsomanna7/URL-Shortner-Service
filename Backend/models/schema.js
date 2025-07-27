const mongoose  = require('mongoose')
 const schema =mongoose.Schema(
    {
    shortid:
    {
        type:String,
        required:true,
        unique:true, 
    },
    redirecturl :
    {
        type:String,
        required :true,
    },
    visitcount :
    [
        {
            timestamp :
            {
                type:Number,
            }
        }
    ],
} ,
{timestamps:true}); 
const URL =mongoose.model('urlinfo',schema,'urlinfo');
module.exports =URL;