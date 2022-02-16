#Using the API

##/CarParks
###GET

- Retrieves all the car parks data from the carParks collection in the database
- Data format - sends an array of:
    - `{ '_id': '1', 'name': 'example', 'location': 'Avon Street, Bath BA1 1UF', 'totalSpaces': '1', 'hourlyRate': '1.6' }`
- Returns success true / false:
    - if the data are received successfully
        - `{'success':true, 'message':'', 'status': 200, 'data':[]}`
    - if the data are not received successfully
        - `{'success':false, 'message':'', 'status': 500, 'data':[]}`
    - if there are not data in the database
        - `{'success':false, 'message':'No car parks found!', 'status': 405 'data':[]}`

###/CarParks/{id}

###GET
- Retrieves the data from a specific car park with the specified id
- Data format - an object in the format:
    - `{ '_id': '1', 'name': 'example', 'location': 'Avon Street, Bath BA1 1UF', 'totalSpaces': '1', 'hourlyRate': '1.6' }`
- Returns success true / false:
    - if the data are received successfully
        - `{'success':true, 'message':'', 'status': 200, 'data':[]}`
    - if the data are not received successfully
        - `{'success':false, 'message':'', 'status': 500, 'data':[]}`
    - if the specific car park is not found
        - `{'success':false, 'message':'Car park not found', 'status': 405 'data':[]}`
  - if the car park is invalid
      - `{'success':false, 'message':'Invalid car park id', 'status': 400 'data':[]}`

###POST

- This route does not support POST requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###PUT

- This route does not support PUT requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###DELETE

- This route does not support DELETE requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`


##/AvailableCarParks
###GET

- Shows all the available car parks 
- Takes a get parameter of duration indicating how long the intended stay is in hours, if none given it defaults to one hour.
- Data format - sends an array of:
    - `{ '_id': '1', 'name': 'example', 'location': 'Avon Street, Bath BA1 1UF', 'totalSpaces': '1', 'hourlyRate': '1.6', 'availableSpaces' : '1' }`
- Returns success true / false:
    - if the data are received successfully
        - `{'success':true, 'message':'', 'status': 200, 'data':[]}`
    - if the data are not received successfully
        - `{'success':false, 'message':'', 'status': 500, 'data':[]}`
    - if there is no data in the database
        - `{'success':false, 'message':'No car parks found!', 'status': 405 'data':[]}`

###POST

- This route does not support POST requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###PUT

- This route does not support PUT requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###DELETE

- This route does not support DELETE requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

##/bookings
###GET

- Retrieves all the booking data from the bookings collection in the database
- Data format - sends an array of:
    - `{ '_id': '60c876061e57a1bc8122a33f', 'email': 'email@example.com', 'registration': 'LS56NIA', 'duration': 1, 'startDateTime': 1623924861, 'carParkId': '60c73a20ae1624754daa9f53' }`
- Returns success true / false:
    - if the data are received successfully
        - `{'success':true, 'message':'Success - bookings located', 'status': 200, 'data':[]}`
    - if the data are not received successfully
        - `{'success':false, 'message':'', 'status': 500, 'data':[]}`
    - if there are not data in the database
        - `{'success':false, 'message':'There are no bookings found', 'status': 405 'data':[]}`

###/bookings/{id}

###GET
- Retrieves the data from a specific booking with the specified id
- Data format - an object in the format:
    - `{ '_id': '60c876061e57a1bc8122a33f', 'email': 'email@example.com', 'registration': 'LS56NIA', 'duration': 1, 'startDateTime': 1623924861, 'carParkId': '60c73a20ae1624754daa9f53' }`
- Returns success true / false:
    - if the data are received successfully
        - `{'success':true, 'message':'Success - booking located', 'status': 200, 'data':[]}`
    - if the data are not received successfully
        - `{'success':false, 'message':'', 'status': 500, 'data':[]}`
    - if the specific car park is not found
        - `{'success':false, 'message':'There are no bookings found', 'status': 405 'data':[]}`
    - if the car park is invalid
        - `{'success':false, 'message':'Invalid booking id', 'status': 400 'data':[]}`

###POST

-Sends the data for a car park booking
    - `{'carParkId': '60c73a20ae1624754daa9f53', 'email': 'email@example.com', 'registration': 'LS56NIA', 'duration': 1}`
- Data format - an object in the format: 
    - `{ '_id': '60c876061e57a1bc8122a33f', 'email': 'email@example.com', 'registration': 'LS56NIA', 'duration': 1, 'startDateTime': 1623924861, 'carParkId': '60c73a20ae1624754daa9f53' }`
- Returns success true / false:
  - if the data are sent successfully
    -`{'success':true, 'message':'New booking added', 'status': 201, 'data':[]}`
  - if the data are not sent successfully
      - `{'success':false, 'message':'Error in adding booking', 'status': 500, 'data':[]}`

###PUT

- This route does not support PUT requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`

###DELETE

- This route does not support DELETE requests

- Returns success false:
    - `{'success':false, 'message':"This route does not allow for PUT, POST or DELETE requests", 'status': 405 'data':[]}`
