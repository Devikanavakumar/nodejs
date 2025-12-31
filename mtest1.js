const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf8"));

let stars = ""; 

for (let i = 0; i < n; i++) {
  stars = stars + "*"; 
  console.log(stars);  
}

