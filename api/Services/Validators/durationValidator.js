const DurationValidator = (duration) => {
    duration = duration || 1
    duration = parseFloat(duration)
    if (typeof duration === 'number' && !isNaN(duration)) {
        duration = Math.round(duration)
        if (duration < 1)
            duration = 1
        return duration
    }
    return 1
}

module.exports = DurationValidator
