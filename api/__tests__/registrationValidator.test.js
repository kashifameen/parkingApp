const registrationValidator = require('../Services/Validators/registrationValidator')

describe('Registration Validator', () => {
    test('Response for successful car registration plate', () => {
        expect(registrationValidator('D1ANA')).toEqual(true)
    })
    test('Response for unsuccessful car registration plate', () => {
        expect(registrationValidator('XXXXX')).toEqual(false)
    })
    test('Response for passing in undefined', () => {
        expect(registrationValidator(undefined)).toEqual(false)
    })
})