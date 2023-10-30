const express=require('express')
const mongoDB=require('./db')
mongoDB();

const app=express()
const port=5000


app.use((req,resp,next)=>{
    resp.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    resp.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with,Content-Type,Accept"
    
    )
    next();
})
app.get('/',(req,resp)=>{
    resp.send("Hello World")
})
app.use(express.json())
app.use('/api',require('./routes/createuser'));
// app.use('/api',require('./routes/crateuser'));

app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})

