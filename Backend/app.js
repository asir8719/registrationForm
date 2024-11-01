import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import {signup, login} from './models/user.js';

(async () => {
const app = express()
const port = process.env.PORT || 3000;
await mongoose.connect('mongodb+srv://ashir16592:90600Asir@cluster0.1pa3y.mongodb.net/CRUD')

app.use(cors({origin:'https://registrationform-1-5pfk.onrender.com'}))

app.use(express.json());

app.get('/', (req,res) => {
    res.send("data inserted")
})

app.post('/', async (req,res) => {
    const formData = req.body;
    console.log(`received form data ${JSON.stringify(formData)}`)
    res.send({message:`form data received successfully`, data:formData})
    // const login = new course({username: formData.userName, password: formData.password})
    // await login.save()
    const signUp = new signup({firstname: formData.firstName, lastname: formData.lastName, email: formData.email, password: formData.password, phone: formData.phone})
    await signUp.save()
})

app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
})})()
