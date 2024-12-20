import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true); 

        try {
            const newUser = {
                ...info,
            };
            

            await axios.post("https://workout-planner-c3zz.onrender.com/api/auth/register", newUser); 
            navigate("/login");
        } catch (err) {
            setError("Error during registration. Please try again.");
            console.log("Error during registration:", err);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="register">
            <Navbar />
            <div className="registerCard">
                <div className="center">
                    <h1>Join Us</h1>

                    <form>
                        <div className="formInput">
                            <div className="txt_field">
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    onChange={handleChange}
                                    id="username"
                                    required
                                />
                            </div>
                            <div className="txt_field">
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    onChange={handleChange}
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="txt_field">
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    onChange={handleChange}
                                    id="password"
                                    required
                                />
                            </div>
                        </div>

                        {error && <p className="error">{error}</p>} {}

                        <div className="login_button">
                            <button className="button" onClick={handleClick} disabled={loading}>
                                {loading ? "Registering..." : "Register"}
                            </button>
                        </div>

                        <div className="signup_link">
                            <p>
                                Already Registered? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Register;
