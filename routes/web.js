const express = require('express')
const UserController = require('../Controller/UserController')
const TenderController = require('../Controller/TenderController')
const router = express.Router()

router.get('/getalluser', UserController.getalluser)
router.post('/loginuser', UserController.loginuser)
router.post('/registerUser', UserController.registerUser)


router.post('/inserttender', TenderController.Tender_insert)

router.get('/getallTender', TenderController.getallTender)

router.post('/getTenderById/:id', TenderController.getTenderById)

router.post('/deleteTender/:id', TenderController.deleteTender)








module.exports = router