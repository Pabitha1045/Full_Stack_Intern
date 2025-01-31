const fs = require('fs');

const currentDateTime = new Date().toLocaleString();

// fs.writeFileSync("task.txt","",()=>{})

fs.appendFileSync("task.txt", `${currentDateTime}\n`, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log(`Apended current date and time: ${currentDateTime}`)
    }
});