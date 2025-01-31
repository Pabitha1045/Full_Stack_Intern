// const readline=require("readline")
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// let variable=""
// rl.question("Enter your name:",(data)=>{
//     variable=data
//     console.log("Hello,",data);
// })

// console.log(variable);

// const os=require("os")
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.cpus());

// console.log(os.arch());
// console.log(os.platform());

// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.version());
// console.log(os.freemem());

const path=require("path")

// console.log(__dirname);
// console.log(__filename);
console.log(path.basename("D:\server\index.js"));
console.log(path.extname("sample.txt"));
console.log(path.join("folder","index.js"));
console.log(path.parse("D:\server\index.js"));