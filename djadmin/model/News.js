const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const NewsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    cate:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },

})

// module.exports=News=mongoose.model('news',NewsSchema)
const News=mongoose.model('news',NewsSchema)
module.exports=News

