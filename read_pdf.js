const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Radip_Shrestha_Resume.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error reading PDF:", err);
});
