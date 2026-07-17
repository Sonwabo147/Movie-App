import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });


    const [message, setMessage] = useState("");

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = await register(form);

        if (data.message === "Registration successful") {
            navigate("/login");
        } else {
            setMessage(data.message);
        }
    }


    return (
        <div className="container">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button>
                    Register
                </button>
            </form>
            <p>{message}</p>


        </div>

    );

}


export default Register;