// const http = require("http")
// const fs = require("fs")
// const url = require("url")

// const server = http.createServer((req,res)=>{
//      let {query} = url.parse(req.url,true)
//      console.log(query.id)
//      let {id,name} = query;
//      console.log(id)
//      console.log(name)
//     // fs.readFile("index.html","utf-8",(err,data)=>{
//     //     res.writeHead(200,{"Content-type": "text/html"})
//     //     res.end(data)
//     //  })
//     res.end("hello")   
// })
// server.listen(3000,()=>console.log("server is running"))

// const http = require("http")
// const fs = require("fs")
// const jsonData  = fs.readFileSync("product.json","utf-8")
// console.log(jsonData)
// const htmlsty = fs.readFileSync("index.html","utf8")
// const server = http.createServer((req,res)=>{
// // res.writeHead(200,{"conFtent-type":"application/json"})
// //     res.end(jsonData)

// let path = req.url
// if(path === "/home" || path==="/"){
//     res.writeHead(200,{"content-type":"text/html"})
//     res.end(htmlsty)
// }
// else if(path == "/contact"){
//     res.end("contact")
// }
// else if(path == "/about"){
//     res.end("about")
// }
// else if(path == "/products"){
//     res.end("products")
// }
// else{
//     res.end("404")
// }
// })
// server.listen(3000,()=>{console.log("http:127.0.0.1:3000")})

// ~~~~~~~~~~~~~~~~~~~~~~~~ DYNAMIC RENDERING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const https = require ("http") 
const url = require ("url") 
const fs = require ("fs")
const path = require ("path")

const r = fs.readFileSync(path.join (__dirname, "Templates", "template.html"), "utf-8") 
const product = fs.readFileSync(path.join (__dirname, "Templates", "product.html"), "utf-8")
//      console.log(product);

const jsonData = JSON.parse(fs.readFileSync("product.json", "utf-8"))     // convert to JSON file to obj file format
//      console.log(jsonData);

let productHtmlArray = jsonData.map((prod) => {
    let output = product.replace("{{%IMAGE%}}", prod.productImage)
    output = output.replace("{{%NAME%}}", prod.name)
    output = output.replace("{{%MODNAME%}}", prod.modeName)
    output = output.replace("{{%MODNUM%}}", prod.modelNumber)
    output = output.replace("{{%COLOR%}}", prod.color)
    output = output.replace("{{%SIZE%}}", prod.size)
    output = output.replace("{{%CAMERA%}}", prod.camera)
    output = output.replace("{{%PRICE%}}", prod.price)
    output = output.replace("{{%ID%}}", prod.id)
    return output;
})

productHtmlArray = productHtmlArray.join(",")
console.log(productHtmlArray);
console.log(typeof(productHtmlArray));


const server = https.createServer((req,res) => {
    
                                         //----> routing
    path = path.toLocaleLowerCase()
    let {query,pathname}=url.parse(req.url,true)
    pathname=pathname.toLowerCase()
    console.log(pathname);  // ----> to avoid 404 error



        if(path==="/home"){
        res.end(r.replace("{{%CONTENT%}}","You Are At Home"))     // "{{%CONTENT%}}" --> GINGER TAG
        } 
        else if(path === "/contact"){
        res.end(r.replace("{{%CONTENT%}}","You Are At Contact"))
        }
        else if(path === "/about"){
            res.end(r.replace("{{%CONTENT%}}","You Are At About"))
        }
        else if(path.indexOf("/products")){            
            if(query.id) {
                res.end("Hello :)")
        }   else {
            res.end((r.replace("{{%CONTENT%}}",productHtmlArray)))
        }}    

        else res.end("404")        
})
server.listen(250, () => {
    console.log("Vanakkam...!");    
})