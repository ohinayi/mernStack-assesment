import Vector from './assets/Vector.png';
import { Link } from 'react-router-dom';
import './navBar.css'
const NavBar = () => {
    return(
        <>
            <nav className="navbar-container">
                <div className="logo">
                    <h2 className="L-name">zwilt</h2>
                    <img src={Vector} alt={Vector} className='vector' />
                </div>
                <div className='links'>
                    <Link className='nav-link'>Find Work</Link>
                    <Link className='nav-link'>Find Talent</Link>
                    <Link className='nav-link'>Articles</Link>
                    <Link className='nav-link'>About Us</Link>
                    <Link className='nav-link'>Contact Us</Link>
                </div>
                <div className='actions'>
                    <Link className='login'>Login</Link>
                    <button className='join'>Join Now</button>
                </div>
            </nav>
        </>
    )
}
export default NavBar;