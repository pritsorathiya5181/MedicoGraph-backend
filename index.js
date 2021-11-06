const express = require('express');
const connectDB = require('./config/db');
const path = require("path");

const app = express();
connectDB();

//init middleware
app.use(express.json());

app.get('/', (req,res)=>res.send('API running')); 

//define routes
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/patient',require('./routes/api/patient'));
app.use('/api/record',require('./routes/api/record'));

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});
