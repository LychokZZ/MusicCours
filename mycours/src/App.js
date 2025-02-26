import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import RegF from "./Pages/RegF";
import LogF from "./Pages/LogF";
import { RiHome9Line } from "react-icons/ri";
import Mail from "./LearnPage/Mail";
import Office from "./LearnPage/Office";
import Modul1 from "./LearnPage/Modules/Modul1/Modul1";
import Modul2 from "./LearnPage/Modules/Modul2/Modul2";
import Modul3 from "./LearnPage/Modules/Modul3/Modul3";
import Modul4 from "./LearnPage/Modules/Modul4/Modul4";
import Modul5 from "./LearnPage/Modules/Modul5/Modul5";
import Daw from "./DawLen/Daw";
import Setting from "./LearnPage/Setting";
import Result4 from "./LearnPage/Modules/Modul4/Result4";
import Result3 from "./LearnPage/Modules/Modul3/Result3";
import Result2 from "./LearnPage/Modules/Modul2/Result2";
import Result from "./LearnPage/Modules/Modul1/Result";
import Result5 from "./LearnPage/Modules/Modul5/Result5";
import Result6 from "./LearnPage/Modules/Modul6/Result6";
import Modul6 from "./LearnPage/Modules/Modul6/Modul6";
import Advent from "./LearnPage/Advent";


class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="toup">
                        <button 
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }}
                        className="reup"><RiHome9Line/>
                        </button>
                </div>
                <div>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/RegF">
                            <RegF />
                        </Route>
                        <Route path="/LogF">
                            <LogF />
                        </Route>
                        <Route path="/Office">
                            <Office />
                        </Route>
                        
                        <Route path="/Mail">
                            <Mail />
                        </Route>
                        <Route path="/Daw">
                            <Daw />
                        </Route>
                        <Route path="/Setting" >
                                <Setting />
                        </Route>
                        <Route path="/Modul1">
                            <Modul1 />
                        </Route>
                        <Route path="/Modul2">
                            <Modul2 />
                        </Route>
                        <Route path="/Modul3">
                            <Modul3 />
                        </Route>
                        <Route path="/Modul4">
                            <Modul4 />
                        </Route>
                        <Route path="/Modul5">
                            <Modul5 />
                        </Route>
                        <Route path="/Modul6">
                            <Modul6 />
                        </Route>
                        <Route path="/Result6" >
                                <Result6 />
                        </Route>
                        <Route path="/Result5" >
                                <Result5 />
                        </Route>
                        <Route path="/Result4" >
                                <Result4 />
                        </Route>
                        <Route path="/Result3" >
                                <Result3 />
                        </Route>
                        <Route path="/Result2" >
                                <Result2 />
                        </Route>
                        <Route path="/Result" >
                                <Result />
                        </Route>
                        <Route path="/Advent" >
                                <Advent />
                        </Route>
                    </Switch>
                </div>
            </Router>
            )
        }
}


export default App
