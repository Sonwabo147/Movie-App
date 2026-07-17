import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    function logout() {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");

    }
    
    return (
        <nav className="navbar">
            <div>
                <Link to="/">
                    Movie App
                </Link>
            </div>
            <Link to="/contact">Contact</Link>
            <div>

                {
                    user ? (

                        <>
                            <span>Welcome, {user.username}</span>
                            <Link to="/favorites">Favorites</Link>
                            <button onClick={logout}>Logout</button>
                            
                        </>

                    ) : (

                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )
                }

            </div>
        </nav>
    );

}


export default Navbar;