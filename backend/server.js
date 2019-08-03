const express=require('express');
const user=require('./routes/userFunctions');
const cors=require('cors');
const app=express();
const PORT=8080||process.env.PORT;
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/user',user);
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});