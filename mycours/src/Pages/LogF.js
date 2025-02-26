import React , { useContext ,useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { Context } from "..";

const LogF =() => {
    const [username ,setUsername] = useState('')
    const [password ,setPassword] = useState('')
    const {store} = useContext(Context);

    const Login = (username, password) => {
        store.login(username, password)
        setTimeout(()=>{
            const Auth = JSON.parse(localStorage.getItem("Auth"))
            if(Auth === true){
                window.location.href ="/Office"
            }else alert("Не вдалось!")
        },1000)
    }
        return (
            <div className="back">
                <div className="Loginbody" >
                    <form className="Loginbody1">
                        <div className="ifu">
                                <Link to="/RegF" ><button className="buttonout">Register <CiLogin className="out"/> </button></Link>    
                        </div>  
                        <div className="head">
                            <h1>Login</h1>
                            <div className="underline"></div>    
                        </div>
                    
                    
                        <div className="inputbox">
                            <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} required/>
                            <FaUser className="icon"/>
                        </div>
                        <div className="inputbox">
                            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
                            <FaLock className="icon"/>
                        </div>
                        <div className="remember">
                            
                            <label className="check"> <input type="checkbox" ></input>Remember</label>
                            <a href="dsds">Forgot password?</a> 
                        </div>
                        <div className="butlogcent">
                            <button className="buttonrr" onClick={(event)=> {event.preventDefault(); Login(username, password)}}>Login</button>
                        </div >

                    </form>
                    
                </div>

            </div>
            
        )
    }
export default LogF