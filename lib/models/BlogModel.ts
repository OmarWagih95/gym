const { default: mongoose } = require("mongoose");

const Shcema =mongoose.Schema({
title:{
    type:String,
    required:true
},
secondTitle:{
    type:String,
    required:true
},
content:{
    type:String,
    required:true,
}
});


const  BlogModel = mongoose.models.blog ||  mongoose.model('blog',Shcema);

export default BlogModel;