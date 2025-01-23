const express = require('express'); 

const app = express();
const port = 3002; //port for express js

app.get('/hello', (req, res)=>{
    res.send('Hello agabas');
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); // make port go live
})