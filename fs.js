const fs=require("fs")

// fs.writeFile("sample.txt","create a file using fs",(err)=>{})
    // fs.appendFile("sample.txt","this msg is appened",(err)=>{})
// fs.readFile("sample.txt",(err,data)=>{
//     console.log(data.toString());
// })

// fs.writeFile("Sample1.txt","This is sample file",(err)=>{
// });

// fs.readFile("Sample1.txt",(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());
// })

// fs.unlink("sample.txt",()=>{});
// try{

// }


// fs.rmdir("folder",(err)=>{});

// fs.writeFile("first.txt","Hi",(err)=>{});
// fs.readFile("first.txt",(err,data)=>{
//        console.log(data.toString());
//     })
// console.log("outside");

// const fileData=fs.readFileSync("Sample1.txt","utf-8")
// console.log(fileData);

// console.log("outisde");

// fs.writeFile("First1.txt","This is the first file",(err)=>{
//     fs.appendFile("First1.txt","\n New Data",(err)=>{
//         fs.readFile("First1.txt",(err,data)=>{console.log(data.toString())  //rather than this we use sync function

//         });
//     });

// });




fs.writeFile("new.txt","New File",(err)=>{});