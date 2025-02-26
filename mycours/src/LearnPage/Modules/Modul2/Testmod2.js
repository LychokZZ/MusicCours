import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Testmod.css"
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Testmod2 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod2")),
            step: 0,
            test: [
                {      
                    key: 2,
                    question: "Які основні елементи біта?",
                    firstan: "Гітара, вокал, синтезатор",
                    secondan: "Kick, Snare, Hi-hats, Percussion, Bassline, Melodic elements ",
                    thridan: "Струнні, клавішні, вокал",
                    fouran: "Бочка, тарілки, вокал, фортепіано",
                },
                {     
                    key: 2,
                    question: `Що таке "підкладка" у біті?`,
                    firstan: "Основний ритм біта",
                    secondan: "Додаткові елементи, що додають рух і наповнюють трек ",
                    thridan: "Головна мелодія треку",
                    fouran: "Набір випадкових семплів",
                },
                {     
                    key: 3,
                    question: "Який стиль музики має темп 120-130 BPM і бочку на кожну долю?",
                    firstan: "Хіп-хоп",
                    secondan: "Техно",
                    thridan: "Хаус",
                    fouran: " Треп",
                },
                {     
                    key: 2,
                    question: "Що дозволяє робити Drum Rack в Ableton Live?",
                    firstan: "Генерувати випадкові звуки",
                    secondan: "Завантажувати та обробляти семпли для створення ритмів",
                    thridan: "Використовувати тільки стандартні звуки Ableton",
                    fouran: "Записувати вокал",
                },
                {     
                    key: 1,
                    question: "Що потрібно зробити для створення простого біта?",
                    firstan: "Встановити темп, додати бочку, снєр, хай-хети, перкусію",
                    secondan: " Використовувати тільки один інструмент",
                    thridan: "Додати вокал і мелодію без ударних",
                    fouran: "Зробити мікшування звуків перед створенням біта",
                },
                {},
            ]
        }
    }
    setProgres(){
        this.setState({progress: this.state.progress+10})
    }
    localWrite(){
        localStorage.setItem("ProgresMod2", JSON.stringify(this.state.progress))
    }
    ChekAnswer=(w,n)=>{
        if(this.state.step === 4){
            window.location.href = "/Result2"
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
export default Testmod2