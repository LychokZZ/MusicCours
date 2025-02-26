import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Learn.css"
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import WaterProgress from "./WaterProgres";
import { MdOutlineCake } from "react-icons/md";
const Info = ['1. Вступ до Ableton Live', '2. Теорія створення біта', '3. Написання мелодії' ,'4. Написання драм-партії', '5. Теорія музики для продюсерів', '6. Розширені техніки (опціонально)',"Ви пройшли курс ВІТАЮ!"]
class Progres extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Progres:   [false,
                        JSON.parse(localStorage.getItem("TestOne")   || true),
                        JSON.parse(localStorage.getItem("TestTwo")   || true),
                        JSON.parse(localStorage.getItem("TestThree") || true),
                        JSON.parse(localStorage.getItem("TestFour")  || true),
                        JSON.parse(localStorage.getItem("TestFive")  || true),
                        JSON.parse(localStorage.getItem("TestSix")   || true),],
            
        };
    }
    GetProg= () =>{
        const {Progres} = this.state;
        for(let i=0; i<=7; i++){
            if(Progres[i] === true){
                let words = Info[i-1];
                let b = i
                return [words, b];
            }else if(i >= 7){
                return [Info[6], false];
            }
        };
    };

    BottonNext=()=>{
        const GoNext = this.GetProg();
        const GoTo = `/Modul${GoNext[1]}`
        if(GoNext[1] === false){
            return <MdOutlineCake className="buttonlens"/>
        }else return <Link to={GoTo} ><button className="buttonlen"><FaArrowRight className="Avatarss"/></button></Link>
    }
    render(){
        const GoNext = this.GetProg();
        return (
            
            <div className="Progres" >
                <span className="pppr">Прогрес курсу </span>
                <div>
                    <div className="Progree"> <WaterProgress /></div>
                    
                    <div className="Post">
                        <h3 className="textbord">
                            Вперед до : 
                        </h3>
                        <div className="thess"> <h3>{GoNext[0]}</h3></div>
                        
                    </div>
                    
                    {this.BottonNext()}
                </div>
                
            </div>
           
        )
    }
}
export default Progres