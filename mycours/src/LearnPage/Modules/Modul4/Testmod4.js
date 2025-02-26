import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Testmod.css"
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

class Testmod4 extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            progress: JSON.parse(localStorage.getItem("ProgresMod4")),
            step: 0,
            test: [
                {      
                    key: 1,
                    question: "Які елементи зазвичай використовуються для створення ритмічного малюнка в біті?",
                    firstan: "Kick, snare, hi-hats, перкусія",
                    secondan: "Lead, pad, bass, piano",
                    thridan: " Reverb, delay, distortion, chorus",
                    fouran: " Кік, арпеджіатор, вокал, сайдчейн",
                },
                {     
                    key: 2,
                    question: "Який ефект допомагає зробити драм-звуки більш об’ємними?",
                    firstan: "Distortion",
                    secondan: "Reverb",
                    thridan: "Bitcrusher",
                    fouran: "Phaser",
                },
                {     
                    key: 4,
                    question: "Що допоможе зробити партію хетів цікавішою?",
                    firstan: "Використання тільки одного семплу хета",
                    secondan: "Використання лише закритих хетів без варіацій",
                    thridan: "Додавання тільки низькочастотних ефектів",
                    fouran: "Варіації velocity, панорамування та rolls",
                },
                {     
                    key: 3,
                    question: "Що можна автоматизувати в драм-партії для більш динамічного звучання?",
                    firstan: "Висоту нот у MIDI-кліпі",
                    secondan: "Кількість ударів в секунду",
                    thridan: "Гучність, панорамування та ефекти (наприклад, фільтри)",
                    fouran: "Тільки темп треку",
                },
                {     
                    key: 3,
                    question: "Що важливо робити при роботі з семплами ударних?",
                    firstan: "Завжди використовувати стандартні пресети без змін",
                    secondan: `Не застосовувати EQ або ефекти, щоб залишити звук "чистим"`,
                    thridan: "Використовувати layering, змінювати pitch, експериментувати зі звучанням",
                    fouran: "Використовувати тільки заводські семпли Ableton Live без модифікації",
                },
                {},
            ]
        }
    }
    setProgres(){
        this.setState({progress: this.state.progress+10})
    }
    localWrite(){
        localStorage.setItem("ProgresMod4", JSON.stringify(this.state.progress))
    }
    ChekAnswer=(w,n)=>{
        if(this.state.step === 4){
            window.location.href = "/Result4"
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
export default Testmod4