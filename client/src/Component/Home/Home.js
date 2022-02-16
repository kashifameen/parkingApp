import './Home.css'
import Search from './../Search/Search'
import {Link} from 'react-router-dom'
import Logo from './../Logo/Logo'

const Home = () => {
    return (
        <main className="home-header">
                <div className="home-header-container">
                    <Logo />
                    <h1>Parking Scout</h1>
                </div>
                <Search />
                <div className="home-button-container">
                    <Link to={"./all"}><button className="secondary-button">View all car parks</button></Link>
                </div>
                <img className="home-img-container" src="city-driver.svg" alt="Woman with a red car" />
        </main>
    )
}

export default Home
