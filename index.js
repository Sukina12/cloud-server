'use strict';

const express = require ('express');
const app = express();
const PORT=process.env.PORT || 8000;
app.use(express.static('./public'))


app.get('/hello',(req,res) =>{
    res.send ('Hello From Sukina and Sara');
});

app.listen(PORT,()=>{
    console.log(`server working on the port ${PORT}`)
});
