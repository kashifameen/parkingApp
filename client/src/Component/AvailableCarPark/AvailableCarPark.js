import './AvailableCarPark.css'
import {Link} from 'react-router-dom'

const AvailableCarPark = (props) => {
    return (
        <article className="card">
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>{props.availableSpaces} available spaces</p>
            <p>{(props.hourlyRate).toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP'
            })} per hour</p>
            <Link className="bookButton" to={`/book/${props.id}/${props.duration}`}>Book</Link>
        </article>
    )
}

export default AvailableCarPark