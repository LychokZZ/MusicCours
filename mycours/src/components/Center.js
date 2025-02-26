import React from "react";
import { Link } from "react-router-dom";
class Center extends React.Component{
    render(){
        return (
            <div className="Center" >
                 <h1 className="centerC"> Курс</h1>
                 <h1 className="centerB"> Написання музики</h1>
                 <Link to="/RegF"><button className="buttoncr">Записатись</button></Link>
            </div>
           
        )
    }
}
export default Center