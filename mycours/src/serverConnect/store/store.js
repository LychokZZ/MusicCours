import {makeAutoObservable} from 'mobx'
import serviceAuth from '../service/serviseAuth';

export default class Store{
    isAuth = false
    constructor(){
        this.user = {};
        makeAutoObservable(this)
    }


    setAuth(bool){
        this.isAuth = bool;
    }

    setUser(username, password, email){
        this.user = {username, password, email}
    }
    async login(username,password){
        try{
            const response = await serviceAuth.login(username,password)
            localStorage.setItem("Auth", JSON.stringify(true))
            localStorage.setItem("Userauth", JSON.stringify(username))
            this.setAuth(true)
            this.setUser(response.data.user)
            setTimeout(()=>(this.logout()),5*60*1000)
        }catch(e){
            console.log(e)
        }
    }
    async register(username,password,email){
        try{
            const response = await serviceAuth.register(username,password,email)
            console.log("response " + response)
            localStorage.setItem("Auth", JSON.stringify(true))
            localStorage.setItem("Userauth", JSON.stringify(username))
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e){
            console.log(e)
        }
    }
    async sendletter(From,To,text){
        console.log(From,To,text)
        try{
            const response = await serviceAuth.sendletter(From,To,text)
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }

    async logout(){
        try{
            window.location.href = "/Home"
            localStorage.setItem("Userauth", JSON.stringify(''))
            localStorage.setItem("Auth", JSON.stringify(false))
            this.setAuth(false)
            this.setUser({})
        }catch(e){
            console.log(e)
        }
    }

    async delmail(_id){
        console.log(_id)
        try{
            const response = await serviceAuth.delmail(_id)
            return response
        }catch(e){
            console.log(e)
        }
    }    
}