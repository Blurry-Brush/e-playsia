import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    if(!user){
        return navigate("/login/Valorant");
    }
    else{
        return children;
    }
}

export default ProtectedRoute