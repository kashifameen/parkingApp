const CarParkController = require('../Controllers/CarParkController')
const AvailableCarParkController = require('../Controllers/AvailableCarParkController')
const BookCarParkController = require('../Controllers/BookCarParkController')
const NoMethodController = require('../Controllers/NoMethodController')
const GetBookingController = require('../Controllers/GetBookingController')
const { body } = require('express-validator')

let routes = (app) => {
    app.get('/carParks', CarParkController.getAllCarParks)

    app.get('/carParks/:id', CarParkController.getOneCarPark)

    app.post('/carParks', NoMethodController)

    app.put('/carParks', NoMethodController)

    app.delete('/carParks', NoMethodController)

    app.get('/availableCarParks', AvailableCarParkController)

    app.post('/availableCarParks', NoMethodController)

    app.put('/availableCarParks', NoMethodController)

    app.delete('/availableCarParks', NoMethodController)

    app.get('/bookings', GetBookingController.getAllBookings)

    app.get('/bookings/:id', GetBookingController.getOneBooking)

    app.post('/bookings', [body('email').trim().isEmail().normalizeEmail(), body('registration').trim()], BookCarParkController)

    app.put('/bookings', NoMethodController)

    app.delete('/bookings', NoMethodController)
}

module.exports = routes
