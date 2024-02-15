const CostOfLivingController = require('../controllers/CostOfLivingController')
const express = require('express')
const router = express.Router()


router.get('/:countryName', CostOfLivingController.getDataByCountry)
router.get('/compare/:firstCountry/:secondCountry', CostOfLivingController.compareCountries)



module.exports = router;