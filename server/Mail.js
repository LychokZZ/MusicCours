const nodemailer = require('nodemailer')
class Mail {
    constructor(){
        this.transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'vanioklte@gmail.com',
                pass: 'hdxl dbtq hyfs hqqn'
            }

        })
    }

    async sendActiveMail(to,link){
        await this.transporter.sendMail({
            from: 'vanioklte@gmail.com',
            to,
            subject: "Activate account",
            text: '',
            html: 
            `
            <div>
                <h1>Для активації перейдіть по силці</h1>
                <a href="${link}">${link}</a>
            </div>
            `
        })
    }
}
module.exports = new Mail();