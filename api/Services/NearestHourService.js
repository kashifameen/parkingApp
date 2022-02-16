const GetNearestHourInSeconds = () => {
    const secsInHour = 60 * 60
    return Math.round(Date.now() / (secsInHour * 1000) ) * secsInHour
}

module.exports = GetNearestHourInSeconds
