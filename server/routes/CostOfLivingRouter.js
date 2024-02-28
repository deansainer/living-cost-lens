const CostOfLivingController = require('../controllers/CostOfLivingController')
const UsersController = require('../controllers/UsersController')
const express = require('express')
const router = express.Router()


router.get('/users', UsersController.getUsers)
router.post('/users/signup', UsersController.signUp)
router.post('/users/login', UsersController.logIn)

router.get('/:countryName', CostOfLivingController.getDataByCountry)
router.get('/compare/:firstCountry/:secondCountry', CostOfLivingController.compareCountries)

module.exports = router;