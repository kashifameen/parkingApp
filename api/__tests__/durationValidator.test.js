const DurationValidator = require('../Services/Validators/durationValidator')

describe('Duration Validator', () => {
    test('Response for passing in an integer', () => {
        expect(DurationValidator(5)).toEqual(5)
    })
    test('Response for passing in a negative integer', () => {
        expect(DurationValidator(-5)).toEqual(1)
    })
    test('Response for passing in 0', () => {
        expect(DurationValidator(0)).toEqual(1)
    })
    test('Response for passing in a string', () => {
        expect(DurationValidator('Hello')).toEqual(1)
    })
    test('Response for passing in a numeric string', () => {
        expect(DurationValidator('5')).toEqual(5)
    })
    test('Response for passing in a decimal', () => {
        expect(DurationValidator(4.4)).toEqual(4)
        expect(DurationValidator(4.6)).toEqual(5)
    })
    test('Response for passing in undefined', () => {
        expect(DurationValidator(undefined)).toEqual(1)
    })
})
