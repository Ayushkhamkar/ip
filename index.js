const express = require ('express')
const mongoose = require ("mongoose")
const cors = require ("cors")
const EmployeeModel = require ('./models/Employee.js')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post("/login",async(req ,res) => {
    const {email,password} =req.body;
    const user =await EmployeeModel.findOne({email:email})
    if (!user){
        res.status(404).json({ashish:"timepsas"})

    }
    res.status(200).json(user)
    /*EmployeeModel.findOne({email:email})
    .then(user => {
        if(user){
            if (user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
            }else{
                res.json("no record exist")
            }
        }
    )}*/
    })


app.post('/register',(req,res) =>{
        EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("server is running")
})

app.get('/home',(req,res)=>{
    res.send("WELCOME");
})

