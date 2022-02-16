const JsonResponse = require('./../Services/JsonResponseService')
describe('JsonResponseService', () => {
    test('Json response for successful', () => {
        expect(JsonResponse.successful()).toMatchObject({
            success: true,
            status: 200,
            message: "",
            data: []
        })
    })

    test('Json response for unsuccessful', () => {
        expect(JsonResponse.unsuccessful()).toMatchObject({
            success: false,
            status: 500,
            message: "",
            data: []
        })
    })
})