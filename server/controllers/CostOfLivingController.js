const pool = require('../db')

class CostOfLivingController{
    
    async getDataByCountry (req, res) {
        const {countryName} = req.params;
        try {
            const countryData = await pool.query('select * from expenses join countries on expenses.country_id=countries.id where countries.country_name=$1', [countryName])
            res.json(countryData.rows)
        } catch (error) {
           res.json(error) 
        }
    }

    async getDataByCountryAndType (req, res) {
        const {countryName, expensesType} = req.params;
        try {
            const data = await pool.query('select * from expenses join countries on expenses.country_id = countries.id where countries.country_name=$1 and expenses.type=$2', [countryName, expensesType])
            res.json(data.rows)
        } catch (error) {
           res.json(error) 
        }
    }

}


module.exports = new CostOfLivingController();