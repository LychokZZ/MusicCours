import React, { useContext ,useState }  from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { Context } from "..";





const RegF = () =>{
    const [username ,setUsername] = useState('')
    const [password ,setPassword] = useState('')
    const [email ,setEmail] = useState('')
    const {store} = useContext(Context);
    

    const Registraton = (username, password, email) => {
        store.register(username, password,email)
        setTimeout(()=>{
            const Auth = JSON.parse(localStorage.getItem("Auth"))
            if(Auth === true){
                window.location.href ="/Office"
            }else alert("Не вдалось!")
        },2000)
    }
        return (
            <div className="back">
                <div className="Loginbody">
                    <div className="Loginbody1">
                        <form>
                            <div className="ifu">
                                <Link to="/LogF"><button className="buttonout">Login <CiLogin className="out"/> </button></Link>    
                            </div>  
                            <div className="head">
                                <h1>Register</h1>
                                <div className="underline"></div>
                            </div>
                                
                        
                            <div className="inputbox">
                                <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} required/>
                                <FaUser className="icon"/>
                            </div>
                            <div className="inputbox">
                                <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required/>
                                <IoIosMail className="icon"/>
                            </div>
                            <div className="inputbox">
                                <input type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)} required/>
                                <FaLock className="icon"/>
                            </div>
                            <div className="butlogcent">
                                <button onClick={(event)=> {event.preventDefault(); Registraton(username, password,email)}} className="buttonrr">Register</button>
                            </div>
                            

                            
                        </form>
                    </div>
                </div>
            </div>
        )

}

export default RegF