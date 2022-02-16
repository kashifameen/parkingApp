import './SearchResults.css'
import Search from './../Search/Search'
import AvailableCarPark from '../AvailableCarPark/AvailableCarPark'
import {useEffect, useState} from 'react'
import NoCarParks from '../NoCarParks/NoCarParks'
import Logo from './../Logo/Logo'

const SearchResults = (props) => {
    const[availableCarParks, setCarParks] = useState([])

    const displayAvailableCarParks = (availableCarParks) => {
        return availableCarParks.map((availableCarPark) => {
            return <AvailableCarPark key={availableCarPark._id} id={availableCarPark._id} name={availableCarPark.name} location={availableCarPark.location} availableSpaces={availableCarPark.availableSpaces} hourlyRate={availableCarPark.hourlyRate} duration={duration} />
        })
    }

    const {duration} = props.match.params

    useEffect(() => {
        fetch('http://localhost:9000/availableCarParks' + '?duration=' + duration)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCarParks(displayAvailableCarParks(data.data))
                } else {
                    setCarParks(<NoCarParks />)
                }
            })
            .catch(() => setCarParks(<NoCarParks />))
    },[props.match.params])

    return (
        <main className="search-results-container">
            <div className="search-results-header">
                <h1>Search results</h1>
                <Logo />
            </div>
            <Search duration={duration}/>
            <h6>Available car parks</h6>
            {availableCarParks}
        </main>
    )
}

export default SearchResults