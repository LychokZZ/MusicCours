const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5001
const mongoose = require('mongoose');
const router = require('./authRouter');


const app =express()


app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}
));
app.use('/auth' ,router)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:admin@cluster0.bnxs5.mongodb.net/CoursEM?retryWrites=true&w=majority&appName=Cluster0`)
        app.listen(PORT, () => console.log(`Server start ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()