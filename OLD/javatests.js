const fs = require('fs');
let directory_name = "./images/courses/"; 
let fileNames = fs.readdirSync(directory_name);

fileNames.forEach((file) => {
    console.log(file);
});