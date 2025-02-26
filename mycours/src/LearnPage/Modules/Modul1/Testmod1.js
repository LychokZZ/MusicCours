import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Testmod.css"
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Testmod1 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod1")),
            step: 0,
            test: [
                {      
                    key: 3,
                    question: "How many outputs in Ableton?",
                    firstan: "One",
                    secondan: "Eleven",
                    thridan: "Three",
                    fouran: "Seven",
                },
                {     
                    key: 2,
                    question: "Session View містить кліпи -",
                    firstan: "Короткі музичні уривки, які можна повторювати",
                    secondan: "Дозволяє розміщувати кліпи у часі",
                    thridan: "Підключить MIDI-контролери",
                    fouran: "Використовується для побудови структури трек",
                },
                {     
                    key: 4,
                    question: "Як налаштувати автоматизацію ефектів у кліпі та в аранжуванні?",
                    firstan: "Через Envelopes у Clip View:",
                    secondan: "Через Arrangement View:",
                    thridan: " Мапінг на MIDI-контролер",
                    fouran: " Запис автоматизації в реальному часі",
                },
                {     
                    key: 1,
                    question: "Які є способи оптимізувати CPU під час роботи з великими проєктами?",
                    firstan: "Короткі музичні уривки, які можна повторювати",
                    secondan: "Дозволяє розміщувати кліпи у часі",
                    thridan: "Підключить MIDI-контролери",
                    fouran: "Використовується для побудови структури трек",
                },
                {     
                    key: 2,
                    question: "Як використовувати Drum Rack для створення власного набору ударних?",
                    firstan: "Короткі музичні уривки, які можна повторювати",
                    secondan: "Дозволяє розміщувати кліпи у часі",
                    thridan: "Підключить MIDI-контролери",
                    fouran: "Використовується для побудови структури трек",
                },
                {},
            ]
        }
    }
    setProgres(){
        this.setState({progress: this.state.progress+10})
    }
    localWrite(){
        localStorage.setItem("ProgresMod1", JSON.stringify(this.state.progress))
    }
    ChekAnswer=(w,n)=>{
        if(this.state.step === 4){
            window.location.href = "/Result"
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
export default Testmod1