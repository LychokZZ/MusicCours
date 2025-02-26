import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css";
import Testmod5 from "./Testmod5";
import Infomod5 from "./Infomod5";

class Modul5 extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route path="/Modul5">
                                <Infomod5/>
                            </Route>
                            <Route path="/info5">
                                <Infomod5 />
                            </Route>
                            <Route path="/test5" >
                                <Testmod5 />
                            </Route>
                            
                    </Switch>
                </Router>
                
        )
    }
}
export default Modul5