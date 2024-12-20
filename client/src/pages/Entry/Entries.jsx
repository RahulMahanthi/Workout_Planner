// pages/Entry/Entries.jsx

import React, { useContext } from 'react';
import useFetch from '../../useFetch';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./entry.css";
import { AuthContext } from '../../authContext';

const Entries = () => {
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`https://workout-planner-1-8yuq.onrender.com/api/entries/${user._id}`);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    // Handle loading state
    if (loading) return <p>Loading...</p>;
    // Handle error state
    if (error) return <p>Error: {error.message || "An error occurred"}</p>;

    return (
        <div className='entry'>
            <Navbar />
            <div className="entriesContainer">
                {
                    data.length === 0 ? (
                        <p>No entries found.</p> // Display message if no data
                    ) : (
                        data.map((d, index) => (
                            <div className="entryItem" key={index}>
                                <h1>{formatDate(d.date)}</h1>
                                <h2>Meals taken</h2>
                                <div className="mealsContainer">
                                    {d?.meals?.map((m, i) => (
                                        <div className="mealItem" key={i}>{m.name}</div>
                                    ))}
                                </div>
                                <h2>Exercise done</h2>
                                <div className="routinesContainer">
                                    {d?.routines?.map((r, j) => (
                                        <div className="routineItem" key={j}>{r.name}</div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
            <Footer />
        </div>
    );
}

export default Entries;
