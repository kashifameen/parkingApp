let successful = () => {
    return {
        "success": true,
        "message": "",
        "status": 200,
        "data": []
    }
}
let unsuccessful = () => {
    return {
        "success": false,
        "message": "",
        "status": 500,
        "data": []
    }
}

module.exports.successful = successful
module.exports.unsuccessful = unsuccessful
