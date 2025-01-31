const express = require("express")
const { deleteProduct,getProducts,getProductsid,patchProducts,putProducts,postProducts } = require("../routehandler/productFunctions");
const productRoutes = express.Router()

productRoutes.route("/")
.get(getProducts)
.post(postProducts)

productRoutes.route("/:id")
.get(getProductsid)
.delete(deleteProduct)
.patch(patchProducts)
.put(putProducts)

module.exports=productRoutes;