const connectToDb = require('../Services/DbService')
const carParkService = require('../Services/CarParkService')
const jsonResponse = require('../Services/JsonResponseService')
const MongoId = require('mongodb').ObjectId

let getAllCarParks = async (req, res) => {
    try {
        connectToDb(async (collection) => {
            let carParks = await carParkService.getAllCarParks(collection)
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

let getOneCarPark = async (req, res) => {
    try {
        connectToDb(async (collection) => {
            if (MongoId.isValid(req.params.id)) {
                const id = req.params.id
                let carPark = await carParkService.getOneCarPark(collection, id)
                if (carPark.length > 0) {
                    let jsonRes = jsonResponse.successful()
                    jsonRes.message = 'Success - car park located'
                    jsonRes.data = carPark[0]
                    res.json(jsonRes)
                } else {
                    let jsonRes = jsonResponse.unsuccessful()
                    jsonRes.message = 'Car park not found'
                    jsonRes.status = 204
                    res.json(jsonRes)
                }
            } else {
                let jsonRes = jsonResponse.unsuccessful()
                jsonRes.message = 'Invalid car park id'
                jsonRes.status = 400
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

module.exports.getAllCarParks = getAllCarParks
module.exports.getOneCarPark = getOneCarPark
