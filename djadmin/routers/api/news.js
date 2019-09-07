const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const router = express.Router()
const News = require('../../model/News')

// 新闻增加接口
router.post('/addNews',(req,res)=>{
    const newNews=new News({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        cate:req.body.cate,
        img_url:req.body.img_url
    })
    console.log(newNews)
    newNews.save().then(news=>{
        res.json(news)
    })
})


module.exports=router