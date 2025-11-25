import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css'

export const Login = () =>{
    const [userForm, setUserForm] = useState({name:"",password:""});
    const {user,login} = useAuthContext();

    const navigate = useNavigate();

    if(user){
        return <Navigate to="/admin/alta-productos"/>
    }

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserForm({...userForm, [name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const success = login(userForm.name,userForm.password);

        if(success){
            navigate("/admin/alta-productos");
        }else{
            alert("Credenciales incorrectas");
            setUserForm({name:"",password:""});
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesion</h2>
            <div>
                <label htmlFor="name">
                    Usuario:
                </label><br />
                <input onChange={handleChange} type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="password">
                    Contraseña:
                </label><br />
                <input onChange={handleChange} type="password" name="password" id="password" />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    )
}