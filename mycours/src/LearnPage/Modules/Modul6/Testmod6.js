import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Testmod.css"
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Testmod6 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod6")),
            step: 0,
            test: [
                {      
                    key: 2,
                    question: "Який синтез використовується для створення складних гармоній шляхом модуляції частоти?",
                    firstan: "Субтрактивний синтез",
                    secondan: "FM-синтез",
                    thridan: "Вейвтейбл-синтез",
                    fouran: "Гранулярний синтез",
                },
                {     
                    key: 1,
                    question: "Що можна автоматизувати в треку для створення динаміки?",
                    firstan: "Панорамування ",
                    secondan: "Кількість MIDI-кліпів",
                    thridan: "Темп проєкту",
                    fouran: "Розмір буфера",
                },
                {     
                    key: 2,
                    question: "Який основний інструмент в Ableton Live використовується для фінальної еквалізації під час мастерингу?",
                    firstan: "Glue Compressor",
                    secondan: "EQ Eight ",
                    thridan: "Limiter",
                    fouran: "Operator",
                },
                {     
                    key: 3,
                    question: "Який формат найкраще підходить для збереження треку для стрімінгу?",
                    firstan: "WAV 32-bit",
                    secondan: "MP3 128 kbps",
                    thridan: "MP3 320 kbps",
                    fouran: "FLAC",
                },
                {     
                    key: 4,
                    question: " Який ефект допомагає розширити стереополе міксу?",
                    firstan: "Лімітер",
                    secondan: "Компресор",
                    thridan: "Овердрайв",
                    fouran: "Реверберація ",
                },
                {},
            ]
        }
    }
    setProgres(){
        this.setState({progress: this.state.progress+10})
    }
    localWrite(){
        localStorage.setItem("ProgresMod6", JSON.stringify(this.state.progress))
    }
    ChekAnswer=(w,n)=>{
        if(this.state.step === 4){
            window.location.href = "/Result6"
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
export default Testmod6
