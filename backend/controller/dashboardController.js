const productcollection = require("../model/productModel");


const productadd = async (req, res) => {
    try {
        console.log('====================================');
        console.log(".req.body", req.body);
        console.log('====================================');
        const product = new productcollection(req.body);
        const result = await product.save()
        console.log("result", result);
        const posts = await productcollection.find();
        console.log("posts", posts);
      

        // posts = [...posts, { ...req.body }]
        res.status(200).json({
            message: 'sucess',
            data: posts
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: 'failed',
            error: error,
            data: []
        })
    }

}


const getProduct = async (req, res) => {

    try {
      
        const posts = await productcollection.find();
        console.log("posts", posts);
      

        // posts = [...posts, { ...req.body }]
        res.status(200).json(
           
         posts
        )
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: 'failed',
            error: error,
            data: []
        })
    }

}


module.exports = {
    productadd,
    getProduct

}