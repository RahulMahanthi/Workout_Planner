import React, { useContext } from 'react';
import "./landing.css";
import { AuthContext } from '../../authContext';
import { Link } from "react-router-dom";

const Landing = () => {
    const { user } = useContext(AuthContext);

    const quotes = [
        "Unlock your potential with ShapeSync!",
        "Your journey to a healthier you starts here.",
        "Shape your body, sync your mind.",
        "Consistency is key to transformation.",
        "Every step is progress – let's take it together."
    ];

    return (
        <div className='landing'>
            <div className="header">
            </div>
            <div className="upper-layer">
                <h1>Welcome to <span className='brand-name'>ShapeSync</span></h1>
                <p className='quote'>{quotes[Math.floor(Math.random() * quotes.length)]}</p> {/* Random quote */}
                <Link to={user ? '/home' : '/login'}>
                    <button className='btn-get-started'>Get Started</button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;
