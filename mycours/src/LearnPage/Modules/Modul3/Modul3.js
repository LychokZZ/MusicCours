import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css";
import Testmod3 from "./Testmod3";
import Infomod3 from "./Infomod3";

class Modul3 extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route path="/Modul3">
                                <Infomod3/>
                            </Route>
                            <Route path="/info3">
                                <Infomod3 />
                            </Route>
                            <Route path="/test3" >
                                <Testmod3 />
                            </Route>
                            
                    </Switch>
                </Router>
                
        )
    }
}
export default Modul3