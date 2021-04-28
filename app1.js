const express = require("express");
const app = express();
 
app.get("/", function(request, response){
 
    console.log("Hello from Express!");
});

app.listen(3000);