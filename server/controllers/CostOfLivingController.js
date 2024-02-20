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

    async compareCountries (req, res) {
        const {firstCountry, secondCountry} = req.params;
        try {
            const first = await pool.query('select * from expenses join countries on expenses.country_id=countries.id where countries.country_name=$1', [firstCountry])
            const second = await pool.query('select * from expenses join countries on expenses.country_id=countries.id where countries.country_name=$1', [secondCountry])
            const firstCountryData = first.rows
            const secondCountryData = second.rows

            function compareCountries(country1, country2){
                const comparsion = []
                firstCountryData.forEach((firstCountryItem) => {
                    const secondCountryItem = secondCountryData.find((item) => item.type === firstCountryItem.type && item.description === firstCountryItem.description)
                    comparsion.push({
                        'type': firstCountryItem.type,
                        'description': firstCountryItem.description,
                        'firstCountryId': firstCountryItem.id,
                        'firstCountryName': firstCountryItem.country_name,
                        'firstCountryPrice': parseFloat(firstCountryItem.price),
                        'secondCountryId': secondCountryItem.id,
                        'secondCountryName': secondCountryItem.country_name,
                        'secondCountryPrice': parseFloat(secondCountryItem.price),
                        'priceDifference': parseFloat((((parseFloat(secondCountryItem.price) - parseFloat(firstCountryItem.price)) / parseFloat(firstCountryItem.price)) * 100).toFixed(2)*-1)
                    })
                })
                return comparsion
            }
            
            res.json(compareCountries(firstCountryData, secondCountryData))
        } catch (error) {
           res.json(error) 
        }
    }



}


module.exports = new CostOfLivingController();