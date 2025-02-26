const User = require('./user')
const Letter = require('./Letter')
const { validationResult} = require('express-validator')
const jwt = require("jsonwebtoken")
const {secret} = require('./config')
const uuid = require('uuid')
const Mail = require('./Mail')
generateAccessToken=(id) => {
    const payload = {id}
    return jwt.sign(payload, secret , {expiresIn: "5m"})
}

class authController{ 
    constructor() {
        this.activator = this.activator.bind(this);
        this.activate = this.activate.bind(this);
    }
    async registation(req, res){
        try{
            const error = validationResult(req)
            if(!error.isEmpty()){
                return res.status(400).json({message: "Error registration" , error})
            }
            const {username , password, email} = req.body
            const candidat = await User.findOne({username})
            if(candidat){
                return res.status(400).json({message: "Імя зайняте"})
            }
            const emails = await User.findOne({email})
            if(emails){
                return res.status(400).json({message: "Пошта зайнята"})
            }
            const activateLink = uuid.v4();
            await Mail.sendActiveMail(email, `http://localhost:5001/auth/activate/${activateLink}` )

            const token = generateAccessToken(User._id)
            const TokenKey = JSON.stringify(token)
            const user = new User({username, password, email, activateLink , TokenKey})
            await user.save() 
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
            res.status(400).json({message: "Registration error"})
        }
    }
    

    async login(req, res){
        try{
            const {username , password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `Користувача ${username} не найдено!`})
            }
            const passwordValid = await User.findOne({password})
            if(!passwordValid){
                return res.status(400).json({message: 'Парольне не правильний'})
            }
            const token = generateAccessToken(User._id)
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
            res.status(400).json({message: "Login error"})
        }
    }

    async logout(req, res){
        try{
            
        }catch(e){
            console.log(e)
        }
    } 
    async activator(activateLink,res){
        const user = await User.findOne({activateLink})
        if(!user){
            res.status(400).json({message: "Некоректна силка активації"})
        }
        user.isActivated = true;
        await user.save()
    }
    async activate(req, res){
        try{
            const activationLink = req.params.link;
            await this.activator(activationLink, res)
            return res.redirect("http://localhost:3000/Home")
        }catch(e){
            console.log(e)
        }
    }

    async getUsers(req, res){
        try{
            const users = await User.find()
            res.json(users)
        }catch(e){
            console.log(e)
        }
    }

    async getToken (req,res){
        try{
            const users = await User.find()
            res.json(users)
        }catch(e){
            console.log(e)
        }
    }

    async sendLetter(req,res){
        try{
            const {From , To, text} = req.body
            const leter = new Letter({From, To, text})
            await leter.save() 
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
        }
    }

    async getLetter(req,res){
        try{
            const letter = await Letter.find()
            res.json(letter)
        }catch(e){
            console.log(e)
        }
    }
    async delMail(req,res){
        try {
            const {_id} = req.body
            if (!_id) {
                return res.status(400).json({ message: 'Email ID is required' });
            }
            const result = await Letter.findByIdAndDelete(_id);
            if (!result) {
                return res.status(404).json({ message: 'Email not found' });
            }
            res.status(200).json({ message: 'Email deleted successfully', result });
            console.log('Deleted email:', result);
        }catch(e){
            console.log(e)
        }
    }

}

module.exports = new authController()