import { Button, TextField, Grid, Typography, } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const isSignup =false
    const [logged, setLogged] = useState(false)
    const [values,setValues] = useState({})
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        setLogged(true);
        console.log(values);
        navigate('home')
        
    }
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    return (
        <>
       
        </>
    )
}

export default Login