import $api from "../http"

export default class serviceAuth {
    static async login( username, password){
        return $api.post('/login ', {username,password}) 
    }

    static async register( username, password, email){
        return $api.post('/registration ', {username,password, email}) 
    }

    static async sendletter(From,To, text){
        return $api.post('/sendletter ', {From,To, text}) 
    }
    static async getletter(){
        return $api.get('/getletterr ') 
    }
    static async delmail(_id){
        return $api.delete('/delmail', { data: { _id } })
    }

}