const Router = require('express')
const router = new Router
const controller = require('./authController')
const {check, body} = require('express-validator')

router.post('/registration', [ 
    check('username' , `Ім'я користувача не може бути пустим`).notEmpty(),
    check('password' , `Пароль повинен бути довшим`).isLength({min:8 , max: 16}), 
    body('email' , 'Пошта не коректна').isEmail(),
],controller.registation)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/activate/:link', controller.activate)
router.get('/users', controller.getUsers)
router.delete('/delmail', controller.delMail)

router.post('/sendletter', controller.sendLetter)
router.get('/getletter', controller.getLetter)


module.exports = router 