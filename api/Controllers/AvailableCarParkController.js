const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')
const DurationValidator = require('../Services/Validators/durationValidator')

let getAvailableCarParks = async (req, res) => {
    try {
        connectToDb(async (collection) => {
            const duration = DurationValidator(req.query.duration)
            let carParks = await carParkService.getAvailableCarParks(collection, duration)
            if (carParks.length > 0) {
                let jsonRes = jsonResponse.successful()
                jsonRes.message = 'Success - car parks located'
                jsonRes.data = carParks
                res.json(jsonRes)
            } else {
                let jsonRes = jsonResponse.unsuccessful()
                jsonRes.message = 'There are no car parks found'
                jsonRes.status = 204
                res.json(jsonRes)
            }
        })
    } catch (error) {
        let jsonRes = jsonResponse.unsuccessful()
        jsonRes.message = error.message
        jsonRes.status = 500
        res.json(jsonRes)
    }
}


module.exports = getAvailableCarParks
