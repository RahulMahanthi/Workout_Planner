// pages/Meal/Meal.jsx

import React, { useContext } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useFetch from '../../useFetch';
import { AuthContext } from '../../authContext';
import "./meal.css";
import { Link } from 'react-router-dom';

const Meal = () => {
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`https://workout-planner-1-8yuq.onrender.com/api/meals/${user._id}`);

    // Handle loading state
    if (loading) return <p>Loading...</p>;
    // Handle error state
    if (error) return <p>Error: {error.message || "An error occurred"}</p>;

    return (
        <div className='mealsView'>
            <Navbar />
            <div className="mealsViewContainer">
                {
                    data.length === 0 ? (
                        <p>No meals found.</p> // Display message if no data
                    ) : (
                        data.map((m, index) => (
                            <div className="mealViewItem" key={index}>
                                <div className="mealDetails">
                                    <div className="mealName">{m.name}</div>
                                    <div className="mealDesc">{m.description}</div>
                                    <div className="mealTime">{m.time} minutes</div>
                                    <div className="mealCat">{m.category}</div>
                                </div>
                                {m.recipe && 
                                    <Link to={m.recipe} style={{ textDecoration: "none", color: "black" }}>
                                        <div className="mealLink">Watch Recipe Video</div>
                                    </Link>
                                }
                            </div>
                        ))
                    )
                }
            </div>
            <Footer />
        </div>
    );
}

export default Meal;
