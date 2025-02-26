import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css";
import Testmod4 from "./Testmod4";
import Infomod4 from "./Infomod4";

class Modul4 extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route path="/Modul4">
                                <Infomod4/>
                            </Route>
                            <Route path="/info4">
                                <Infomod4 />
                            </Route>
                            <Route path="/test4" >
                                <Testmod4 />
                            </Route>
                            
                    </Switch>
                </Router>
                
        )
    }
}
export default Modul4