import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css";
import Testmod6 from "./Testmod6";
import Infomod6 from "./Infomod6";

class Modul6 extends React.Component{
    render(){
        return (
                <Router>
                    <Switch>
                            <Route path="/Modul6">
                                <Infomod6/>
                            </Route>
                            <Route path="/info6">
                                <Infomod6 />
                            </Route>
                            <Route path="/test6" >
                                <Testmod6 />
                            </Route>
                            
                    </Switch>
                </Router>
                
        )
    }
}
export default Modul6