const NearestHourService = require('./NearestHourService')
const MongoId = require('mongodb').ObjectId

const getAllCarParks = async (collection) => {
    return collection.find({}).toArray()
}

const getOneCarPark = async (collection, id) => {
    return collection.find({
        _id: MongoId(id)
    }).toArray()
}

const getAvailableCarParks = async (carParkCollection, duration) => {
    const secsInHour = 60 * 60
    const startTime = NearestHourService()
    const endTime = startTime + (duration * secsInHour)
    let carParks = await carParkCollection.aggregate([
        {
            $lookup: {
                from: 'bookings',
                localField: '_id',
                foreignField: 'carParkId',
                as: 'bookings'
            }
        },
        {
            $addFields: {
                bookings: {
                    $filter: {
                        input: '$bookings',
                        as: 'bookings',
                        cond: {
                            $and: [
                                {
                                    $lt: ['$$bookings.startDateTime', endTime]
                                },
                                {
                                    $gt: [{
                                        $sum: ['$$bookings.startDateTime',
                                            {$multiply: ['$$bookings.duration', secsInHour]}]
                                    },
                                        startTime]
                                }
                            ]
                        }
                    }
                }
            }
        },
        {
            $addFields: {
                availableSpaces: {
                    $subtract: ['$totalSpaces', {
                        $size: '$bookings'
                    }]
                }
            }
        },
        {
            $unset: 'bookings'
        }


    ]).toArray()
    carParks = await carParks.filter((carPark) => {
        return carPark.availableSpaces > 0
    })

    return carParks
}

module.exports.getAllCarParks = getAllCarParks
module.exports.getOneCarPark = getOneCarPark
module.exports.getAvailableCarParks = getAvailableCarParks
