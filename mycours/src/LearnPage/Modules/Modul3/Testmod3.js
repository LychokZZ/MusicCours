import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Testmod.css"
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Testmod3 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod3")),
            step: 0,
            test: [
                {      
                    key: 3,
                    question: "Яка гама зазвичай використовується для створення сумної або драматичної мелодії?",
                    firstan: "Мажорна",
                    secondan: "Пентатонічна",
                    thridan: "Мінорна",
                    fouran: "Блюзова",
                },
                {     
                    key: 2,
                    question: "Яка функція в піаноролі допомагає вирівнювати ноти за сіткою ритму?",
                    firstan: "Quantize",
                    secondan: "Velocity",
                    thridan: "Arpeggiator",
                    fouran: "Transpose",
                },
                {     
                    key: 1,
                    question: "Що таке арпеджіо?",
                    firstan: "Гра нот акорду послідовно, а не одночасно",
                    secondan: " Додавання ефекту реверберації до мелодії",
                    thridan: "  Використання шумових ефектів у треку",
                    fouran: " Повторення однієї ноти в ритмічному малюнку",
                },
                {     
                    key: 2,
                    question: "Що потрібно зробити, щоб змінити довжину ноти в піаноролі?",
                    firstan: " Натиснути правою кнопкою миші на ноту",
                    secondan: "Перетягнути її правий або лівий край",
                    thridan: "Виділити ноту та натиснути Delete",
                    fouran: "Використати клавішу Q для збільшення тривалості",
                },
                {     
                    key: 3,
                    question: "Для чого використовується параметр Velocity у піаноролі?",
                    firstan: "Для зміни тривалості нот",
                    secondan: " Для автоматизації темпу",
                    thridan: "Для контролю гучності та виразності нот",
                    fouran: " Для зміни висоти тону ноти",
                },
                {},
            ]
        }
    }
    setProgres(){
        this.setState({progress: this.state.progress+10})
    }
    localWrite(){
        localStorage.setItem("ProgresMod3", JSON.stringify(this.state.progress))
    }
    ChekAnswer=(w,n)=>{
        if(this.state.step === 4){
            window.location.href = "/Result3"
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
export default Testmod3