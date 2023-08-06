var mongoose = require("mongoose")

const productschema = new mongoose.Schema({


    name:{
        type:String,
        require:true
    },
  
    category:{
        type:String,
        require:true
    },
  

    description:{
        type:String,
        require:true
    },
  

    price:{
        type:Number,
        require:true
    },
  

    color:{
        type:String,
        require:true
    },
  

    size:{
        type:String,
        require:true
    },
  

    image:{
        type:Array,
        
    },


   

    stock:{
        type:Number,
        require:true
    },


    createdAt: {
        type: Date,
        default: Date.now,
      },
  
  
  

  });
  
  const productcollection = mongoose.model('products', productschema);

module.exports = productcollection