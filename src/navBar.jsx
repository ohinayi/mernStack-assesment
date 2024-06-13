import Vector from './assets/Vector.png';
import { Link } from 'react-router-dom';
import './navBar.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
const NavBar = () => {
    const [barsNav, setBarsNav] = useState(false);
    return(
        <>
        <FaBars className='bars' onClick={()=>setBarsNav(!barsNav)} />
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
            {barsNav && (
                    <div className="scaff" onClick={()=>setBarsNav(!barsNav)}>
                        <div className="nav-dropDown">
                            <div>
                            </div>
                            <Link to="/" className="D-link">Home</Link>
                            <Link to="/login" className="D-link">Login</Link>
                            <Link to="/signup" className="D-link">Signup</Link>
                        </div>
                    </div>
                )}
        </>
    )
}
export default NavBar;