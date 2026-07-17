import { useState } from "react";
import { login } from "../services/authService";


function Login() {
    const [form,setForm] = useState({email:"", password:"" });
    const [message,setMessage] = useState("");

    function handleChange(e){setForm({...form, [e.target.name]:e.target.value});}

    async function handleSubmit(e){
        e.preventDefault();
        const data = await login(form);
        if(data.user) {
            localStorage.setItem("user",JSON.stringify(data.user));
            window.location.href = "/";
            setMessage("Login successful");
        }
        else {
            setMessage(data.message);
        }

    }



    return (

        <div className="container">


            <h1>Login</h1>


            <form onSubmit={handleSubmit}>


                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                />


                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                />


                <button>
                    Login
                </button>


            </form>


            <p>{message}</p>


        </div>

    );

}


export default Login;