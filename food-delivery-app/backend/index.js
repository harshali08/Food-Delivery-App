const express=require('express')
const mongoDB=require('./db')
mongoDB();

const app=express()
const port=5000

app.get('/',(req,resp)=>{
    resp.send("Hello World")
})
app.use(express.json())
app.use('/api',require('./routes/createuser'));
app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})

