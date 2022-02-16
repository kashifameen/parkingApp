import './BookingSuccess.css'
import {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {formatDate, formatTime} from '../../Services/DateTimeService'
import Logo from './../Logo/Logo'

const BookingSuccess = (props) => {
    const [carPark, setCarPark] = useState({})
    const [booking, setBooking] = useState({})
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9000/bookings/${props.match.params.id}`)
            .then(result => result.json())
            .then(data => {
                if (data.success) {
                    setBooking(data.data)
                    fetch(`http://localhost:9000/carParks/${data.data.carParkId}`)
                        .then(result => result.json())
                        .then(data=> {
                            if (data.success){
                                setCarPark(data.data)
                            } else {
                                setRedirect(true)
                            }
                        })
                        .catch(()=> {
                            setRedirect(true)
                        })
                } else {
                    setRedirect( true)
                }
            })
            .catch(() => {
                setRedirect( true)
            })
    }, [])

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <main className="book-car-park-page">
            <div className="all-car-parks-header">
                <h1>Your booking</h1>
                <Logo />
            </div>
            <div className="bookingSuccessPanel">
                Success!
            </div>
            <article className="booking card">
                <h3>{carPark.name}</h3>
                <p>{carPark.location || ''}</p>
                <p>{(carPark.hourlyRate || '').toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                })} per hour</p>
                <p>Date: {formatDate(new Date(booking.startDateTime * 1000) || new Date())}</p>
                <p>Start time: {formatTime(new Date(booking.startDateTime * 1000) || new Date())}</p>
                <p>Duration: {booking.duration} hrs</p>
                <p>Email: {booking.email} </p>
                <p>Car reg: {booking.registration} </p>
                <Link className="backToHomeButton" to="/">Back to home</Link>
            </article>
        </main>
    )
}

export default BookingSuccess
