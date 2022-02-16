const formatDate = (date) => {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear().toString().slice(-2)
    return day + '-' + month + '-' + year
}

const todaysDate = () => {
    let today = new Date()
    return formatDate(today)
}

const formatTime = (date) => {
    const hour = date.getHours()
    const minutes = date.getMinutes()
    if (minutes <30) {
        return hour + ':' + '00'
    } else {
        return hour+1 + ':' + '00'
    }
}

const todaysTime = () => {
    let today = new Date()
    return formatTime(today)
}

export { formatDate, todaysDate, formatTime, todaysTime }
