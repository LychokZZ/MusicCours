import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css";
import Testmod1 from "./Testmod1";
import Infomod1 from "./Infomod1";

class Modul1 extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route path="/Modul1">
                                <Infomod1/>
                            </Route>
                            <Route path="/info1">
                                <Infomod1 />
                            </Route>
                            <Route path="/test1" >
                                <Testmod1 />
                            </Route>
                    </Switch>
                </Router>
                
        )
    }
}
export default Modul1