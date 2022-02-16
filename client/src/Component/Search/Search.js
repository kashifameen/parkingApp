import './Search.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {todaysDate, todaysTime} from '../../Services/DateTimeService'

const Search = (props) => {
    let duration = props.duration || 1

    const [value, setValue] = useState(duration)
    const handleSelect = (e) => {
        setValue(e.target.selectedOptions[0].value)
    }

    return (
        <section className="search-container">
            <div className="search-inputs-container">
                <div className="search-input-container">
                    <p>Date</p>
                    <h6>{todaysDate()}</h6>
                </div>
                <div className="search-input-container">
                    <p>Time</p>
                    <h6>{todaysTime()}</h6>
                </div>
                <div className="search-input-container">
                    <p>Duration</p>
                    <select defaultValue={duration} onChange={handleSelect}>
                        <option value="1">1 hr</option>
                        <option value="2">2 hrs</option>
                        <option value="3">3 hrs</option>
                        <option value="4">4 hrs</option>
                        <option value="5">5 hrs</option>
                        <option value="6">6 hrs</option>
                        <option value="7">7 hrs</option>
                        <option value="8">8 hrs</option>
                    </select>
                </div>
            </div>
            <div className="search-button">
                <Link to={`/availableCarParks/${value}`}>Search</Link>
            </div>
        </section>
    )
}

export default Search