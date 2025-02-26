import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Testmod.css"
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Testmod5 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod5")),
            step: 0,
            test: [
                {      
                    key: 2,
                    question: " Що означає розмір 4/4?",
                    firstan: "Три долі в такті",
                    secondan: "Чотири долі в такті",
                    thridan: "П’ять долей в такті",
                    fouran: "Одна доля в такті",
                },
                {     
                    key: 1,
                    question: "В якому стилі електронної музики найчастіше використовується розмір 4/4?",
                    firstan: "Хаус",
                    secondan: "Дабстеп",
                    thridan: "Рок",
                    fouran: "Джаз",
                },
                {     
                    key: 1,
                    question: "Які ноти зазвичай використовуються для хай-хетів у розмірі 4/4?",
                    firstan: "Шістнадцяті ноти",
                    secondan: "Долі",
                    thridan: "Цілі ноти",
                    fouran: "Третини нот",
                },
                {     
                    key: 2,
                    question: "Який інструмент зазвичай ставиться на долю 2 та 4 у розмірі 4/4?",
                    firstan: "Кік",
                    secondan: "Снейр або клапи",
                    thridan: "Бас",
                    fouran: "Мелодія",
                },
                {     
                    key: 2,
                    question: "Яке основне призначення розміру 4/4 в електронній музиці?",
                    firstan: "Створити складний ритм для прослуховування.",
                    secondan: "Забезпечити зрозумілий і стабільний ритм для танцю.",
                    thridan: "Використовувати лише для створення струнних мелодій.",
                    fouran: "Скласти мелодії для класичної музики.",
                },
                {},
            ]
        }
    }
    setProgres(){
        this.setState({progress: this.state.progress+10})
    }
    localWrite(){
        localStorage.setItem("ProgresMod5", JSON.stringify(this.state.progress))
    }
    ChekAnswer=(w,n)=>{
        if(this.state.step === 4){
            window.location.href = "/Result5"
            this.setState({step: 0})
        }
        if(n === w ){
            let b = this.state.step
            b = b +1
            this.setProgres()
            this.setState({step: b})
            
        }else if( n !== w){
            let b = this.state.step
            b = b +1
            this.setState({step: b})
        }
    }
    render(){
        const getColor = () => {
            return "#94ceab"
        }
        const quiz = this.state.test[this.state.step]
        this.localWrite()
        
        return (
            <div className="test" >
                <header className="progresbar">
                    <Link to="/Office"><div className="home"><FaHome className="Avatars"/></div></Link>
                    <div
                        style={{
                            width: `${this.state.progress}%`,
                            backgroundColor: getColor(),
                            transition: "width .5s ease-in-out"
                        }}
                    ></div>
                </header>
                <div>
                <div className="qblok">
                    <div className="qwes">{quiz.question}</div>
                    <div></div>
                    <div className="anwsblok">
                        <button className="butq" onClick={()=> this.ChekAnswer(1,quiz.key)}>{quiz.firstan}</button>
                        <button className="butq" onClick={()=> this.ChekAnswer(2,quiz.key)}>{quiz.secondan}</button>
                        <button className="butq" onClick={()=> this.ChekAnswer(3,quiz.key)}>{quiz.thridan}</button>
                        <button className="butq" onClick={()=> this.ChekAnswer(4,quiz.key)}>{quiz.fouran}</button>
                    </div>
                </div> 
                </div>
            </div>
           
        )
    }
}
export default Testmod5