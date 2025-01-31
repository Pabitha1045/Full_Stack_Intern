const express = require("express");
const app = express();
const morgan = require("morgan")
const productRoutes = require("./routes/productroutes")
app.use("/api/v1/products",productRoutes)        //common url for both routes this is for linking productRoutes with app
app.use(express.json())
// app.use(mid)
// function mid(req,res,next){
//     console.log("yes middleware");
// }
app.use(morgan("dev"));
module.exports=app


// Route to get products
// app.get("/api/v1/products",getProducts)
// app.post("/api/v1/products",postProducts)
// app.delete("/api/v1/products/:id",deleteProduct)
// app.patch("/api/v1/products/:id",patchProducts)
// app.put("/api/v1/products/:id",putProducts)
// app.get("/api/v1/products/:id",getProductsid)


