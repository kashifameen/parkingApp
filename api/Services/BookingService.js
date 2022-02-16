const MongoId = require('mongodb').ObjectId

const getAllBookings = async (collection) => {
    return collection.find({}).toArray()
}

const getOneBooking = async (collection, id) => {
    return collection.find({
        _id: MongoId(id)
    }).toArray()
}

const postBooking = async (bookingCollection, newBooking) => {
    return await bookingCollection.insertOne(newBooking)
}

module.exports.getAllBookings = getAllBookings
module.exports.getOneBooking = getOneBooking
module.exports.postBooking = postBooking
