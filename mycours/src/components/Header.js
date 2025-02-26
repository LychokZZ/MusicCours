import React from "react";
import {Link} from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            Auth:  JSON.parse(localStorage.getItem("Auth") || false),
        }
    }

    but(){
        return (
            <div>
                <Link to="/LogF"><button className="buttonlog">Sing in</button></Link>
                <Link to="/RegF"><button className="buttonreg">Sing up</button></Link>
            </div>
        )
    }

    render(){
        return (
            <header className="header">
                <button 
                    onClick={() => {
                        window.scrollTo({
                            top: 580,
                            behavior: "smooth",
                        })
                    }}
                    className="buttons">Про курс
                </button>

                <button 
                    onClick={() => {
                        window.scrollTo({
                            top: 1150,
                            behavior: "smooth",
                        })
                    }}
                    className="buttons">Прайс
                </button>
                <button 
                    onClick={() => {
                        window.scrollTo({
                            top: 2000,
                            behavior: "smooth",
                        })
                    }}
                    className="buttons">Контакти
                </button>
                {this.state.Auth ? <RxAvatar className="autho" onClick={()=> window.location.href ="/Office"} /> : this.but() }
            </header>
            
        )
    }
}
export default Header 