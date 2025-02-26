import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css";
import Testmod2 from "./Testmod2";
import Infomod2 from "./Infomod2";

class Modul2 extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route path="/Modul2">
                                <Infomod2/>
                            </Route>
                            <Route path="/info2">
                                <Infomod2 />
                            </Route>
                            <Route path="/test2" >
                                <Testmod2 />
                            </Route>
                    </Switch>
                </Router>
                
        )
    }
}
export default Modul2