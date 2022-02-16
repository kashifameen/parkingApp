const jsonResponse = require('../Services/JsonResponseService')

const NoMethodController = (req, res) => {
    let jsonRes = jsonResponse.unsuccessful()
    jsonRes.message = 'This route does not allow for that request type'
    jsonRes.status = 405
    res.json(jsonRes)
}

module.exports = NoMethodController