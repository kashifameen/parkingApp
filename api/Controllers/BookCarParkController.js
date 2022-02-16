const connectToDb = require('../Services/DbService')
const bookingService = require('../Services/BookingService')
const jsonResponse = require('../Services/JsonResponseService')
const durationValidator = require ('../Services/Validators/durationValidator')
const registrationValidator = require ('../Services/Validators/registrationValidator')
const { validationResult } = require('express-validator')
const GetNearestHourInSeconds = require ('../Services/NearestHourService')
const ObjectId = require('mongodb').ObjectId

let postBooking = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            let jsonRes = jsonResponse.unsuccessful()
            jsonRes.message = 'Invalid email'
            jsonRes.status = 400
            res.json(jsonRes)
        } else if (!registrationValidator(req.body.registration)) {
            let jsonRes = jsonResponse.unsuccessful()
            jsonRes.message = 'Invalid car reg'
            jsonRes.status = 400
            res.json(jsonRes)
        } else if (!ObjectId.isValid(req.body.carParkId)) {
            let jsonRes = jsonResponse.unsuccessful()
            jsonRes.message = 'Invalid car park id'
            jsonRes.status = 400
            res.json(jsonRes)
        } else {
            let newBooking = {
                carParkId: ObjectId(req.body.carParkId),
                duration: durationValidator(req.body.duration),
                email: req.body.email,
                registration: req.body.registration,
                startDateTime: GetNearestHourInSeconds()
            }

            connectToDb(async (carParkCollection, bookingCollection) => {
                const result = await bookingService.postBooking(bookingCollection, newBooking)
                if (result.insertedCount == 1) {
                    let jsonRes = jsonResponse.successful()
                    jsonRes.message = 'New booking added'
                    jsonRes.status = 201
                    jsonRes.data = result.ops[0]
                    res.json(jsonRes)
                } else {
                    let jsonRes = jsonResponse.unsuccessful()
                    jsonRes.message = 'Error in adding booking'
                    jsonRes.status = 500
                    res.json(jsonRes)
                }
            })
        }
    } catch (error) {
        let jsonRes = jsonResponse.unsuccessful()
        jsonRes.message = error.message
        jsonRes.status = 500
        res.json(jsonRes)
    }
}

module.exports = postBooking
