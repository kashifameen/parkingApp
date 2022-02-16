import './AllCarParks.css'
import CarPark from './../CarPark/CarPark'
import {useEffect, useState} from 'react'
import NoCarParks from '../NoCarParks/NoCarParks'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import {Link} from 'react-router-dom'
import Logo from './../Logo/Logo'


const AllCarParks = () => {
    const[carParks, setCarParks] = useState([])

    const displayCarParks = (carParks) => {
        return carParks.map((carPark) => {
            return <CarPark key={carPark._id} name={carPark.name} location={carPark.location} totalSpaces={carPark.totalSpaces} hourlyRate={carPark.hourlyRate} />
        })
    }

    useEffect(() => {
        fetch('http://localhost:9000/carParks')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCarParks(displayCarParks(data.data))
                } else {
                    setCarParks(<NoCarParks />)
                }
            })
            .catch(() => setCarParks(<NoCarParks />))
    },[])

    return (
        <main className="all-car-parks-page">
            <div className="all-car-parks-header">
                <h1>All car parks</h1>
                <Logo />
            </div>
            <div className="back">
                <KeyboardArrowLeft /><Link to={"./"}>Back to home</Link>
            </div>
            {carParks}
        </main>
    )
}

export default AllCarParks
