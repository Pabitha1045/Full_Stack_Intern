const fs  = require("fs")
const path = require("path")
const jsonData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "model", "product.json"), "utf-8")
);

const getProducts=(req,res)=>{
    try {
        res.json({
            status: "fulfilled",
            count: jsonData.length,
            data: { products: jsonData },
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message, // Include the error message
        });
    }
}

const getProductsid=(req,res)=>{
    const productId = req.params.id;
    console.log(productId)
    console.log(`Requested product ID: ${productId}`);

    // Find product with the requested ID
    const product = jsonData.find((p) => p.id === parseInt(productId, 10));

    try {
        res.json({
            status: "fulfilled",
            data: { product: product },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
        });
    }
}

const postProducts=(req,res)=>{
 const id = jsonData.length+1
    const newProduct = {...req.body,id:id}
    jsonData.push(newProduct)
    fs.writeFile(path.join(__dirname, "model", "product.json"),JSON.stringify(jsonData),()=>{})
    res.status(200).json({
        status:"fulfilled",
        count:jsonData.length,
        data:{
            products:jsonData
        }
        
    })
}

const deleteProduct = (req,res)=>{
    let id = req.params.id*1

let deletedJson = jsonData.filter((i)=>i.id!==id)
fs.writeFile(path.join(__dirname, "model", "product.json"),JSON.stringify(deletedJson),()=>{})
res.status(204)
res.json()
}

const patchProducts = (req,res)=>{
    let id = req.params.id*1
    let updateProd = jsonData.find((i)=>i.id===id)
    let index = jsonData.indexOf(updateProd)
    console.log( jsonData[index] );
    jsonData[index] = Object.assign(updateProd,req.body)     //updateProd - target |  req.body - value
    fs.writeFile(path.join(__dirname,"model","product.json"),JSON. stringify(jsonData),()=>{})    //to write update in json file
    try{
    res.status(200).json({
        status:"fullfilled",
        count:updateProd.length,
        data:{
            product:updateProd
        }
    })
}catch(err){res.json({status:"failed",message:"error"})}
    
}

const putProducts = (req,res)=>{
    let id = req.params.id*1
    let updateProd=jsonData.find((i)=>i.id===id)
    let index = jsonData.indexOf(updateProd)
    console.log( jsonData[index] );
    jsonData[index] =(req.body)                           // req.body - value
    fs.writeFile(path.join(__dirname,"model","product.json"),JSON. stringify(jsonData),()=>{})    //to write update in json file
    try{
    res.status(200).json({
        status:"put updated",
        count:updateProd.length,
        data:{
            product:updateProd
        }
    })
}catch(err){res.json({status:"failed",message:"error"})}

}

module.exports={
    getProducts,getProductsid,postProducts,deleteProduct,patchProducts,putProducts
}