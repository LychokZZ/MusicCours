import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { BsEmojiFrown } from "react-icons/bs";
import {Link } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";

class Result4 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod4")),
            test: JSON.parse(localStorage.getItem("TestFour"))
        }
    }

    Repeat = () => {
        return (
            <div className="repeat">
                <div className="Malo">
                        <h4 className="noo">Цього мало щоб пройти далі</h4>
                        <div className="JIJI"><BsEmojiFrown  className="emoji"/></div>
                </div>
                <div className="material">
                    <h4>Повторіть матеріал!</h4>
                    <Link className="bar" to="/Modul4"><button onClick={()=>localStorage.setItem("ProgresMod4", JSON.stringify(50))} className="but-result">Пройти знову!</button></Link>   
                </div>
            </div>
        )
    }
    Goods=()=> {
        localStorage.setItem("TestFour", JSON.stringify(false))
        return(
            <div className="repeat">
                <div className="Malo">
                    <h3 className="noo">Більшість відповідей правильні!!</h3>
                    <div className="JYJI"><BsEmojiSmile className="emoji"/></div>
                </div>
                <div className="modules-result">
                    <h4> До наступних модулів!</h4>
                    <Link className="bar" to="/Office"><button className="but-result">До модулів!</button></Link>
                </div>
            </div>
        )
    }
    render(){
        return (
            <div className="Result" >
                <div className="block-result">
                    <div className="foot-result">
                        <h3 className="Footer-result">Ваш результат: {this.state.progress}</h3>
                    </div>
                    <div >
                        {this.state.progress <80 ? this.Repeat(): this.Goods()}                     
                    </div>
                   
                </div>
                
            </div>
           
        )
    }
}
export default Result4