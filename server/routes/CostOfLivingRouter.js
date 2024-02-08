const CostOfLivingController = require('../controllers/CostOfLivingController')
const express = require('express')
const router = express.Router()


router.get('/:countryName', CostOfLivingController.getDataByCountry)
router.get('/:countryName/:expensesType', CostOfLivingController.getDataByCountryAndType)



module.exports = router;