import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Infomod4 extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            progress: JSON.parse(localStorage.getItem("ProgresMod4") || 0),
            styler: "pita",
            visibleSections: [true,false,false,false,false],
            test: JSON.parse(localStorage.getItem("TestFour")),
            Info: [
                {
                    id: 1,
                    title: "4.1. Розширення біта",
                    description: `Щоб зробити біт динамічним і цікавим, важливо комбінувати різні елементи:`,
                    elements: [
                       `Хети (Hi-Hats) – створюють рух. Закриті хети додають чіткості та стабільності. Відкриті хети використовуються для акцентів. Ролли та варіації роблять партію живішою.`,
                       `Клепи (Claps) і снери (Snares) – підкреслюють другий і четвертий біт у такті. Використовуй шари (layering), комбінуючи декілька клепів або снери для унікального звучання.`,
                       `Кік (Kick) – основа ритму. Підбирай кік відповідно до жанру (потужний 808 для трапу, punchy kick для хаусу).`,
                       `Перкусія (Percussion) – дрібні елементи (шакери, конги, бонги) додають ритмічної різноманітності.`,
                    ],
                   
                },
                {
                    id: 2,
                    title: "4.2. Робота з ефектами",
                    description: "Обробка драмів робить їх звучання професійним і виразним.",
                    elements: [
                        `Reverb (Реверб) – додає глибину та простір. Малий реверб на клепах створює "живий" ефект. Великий реверб може додати атмосферності, але його треба використовувати обережно.`,
                        `Delay (Ділей) – створює відлуння, особливо на хетах та перкусії.`,
                        `EQ (Еквалайзер) – очищує частоти: Низькі частоти (до 100 Гц) – залишаємо лише для кіка. Середні частоти (200-1000 Гц) – снери та клепи. Високі частоти (вище 5 кГц) – хети та перкусія.`,
                    ],
                },
                {
                    id: 3,
                    title: "4.3. Використання семплів і створення своїх звуків",
                    description: "Семпли",
                    elements: [
                        "Використовуй якісні семпл-паки для ударних.",
                        "Не бійся експериментувати з відтінками звуку (pitch, time-stretching).",
                    ],
                    additional: ` Синтез ударних`,   
                    settings: [
                        "Kick – синтезується за допомогою sine wave + pitch envelope.",
                        "Snare – можна зробити в Operator або Wavetable через білий шум.",
                    ],
                },
                {
                    id: 4,
                    title: "4.4. Автоматизація в драм-партіях",
                    elements: [
                        `Гучність (Volume automation) – поступові зміни гучності створюють "драйв".`,
                        "Фільтри (Low-pass/High-pass) – допомагають плавно вводити або прибирати елементи.",
                        "Панорамування (Panning automation) – можна автоматично змінювати положення перкусії.",
                    ],
                },
                {
                    id: 5,
                    title: "4.5. Практика: створення складної драм-партії ",
                    elements: [
                        "Вибери якісні кік, клеп, хети та перкусію.",
                        "Розмісти кік на сильні долі, а хети – в ритмічні заповнення.",
                        "Додай варіації: rolls, velocity changes, ghost notes.",
                        " Оброби ефектами (EQ, Reverb, Compression).",
                    ],
                    additional: "Порада: аналізуй драм-партії у своїх улюблених треках, щоб зрозуміти, як вони працюють у міксі!",
                },
            ],
        };
        
    };
    
    handleButtonClick = (id) => {
        if(this.state.progress === 50){
            alert("В цьому блоці максимум 50%)")
            return 
        }
        if(this.state.progress === 40){
            this.compite()
            this.setState({next: this.getButAcc()})
        }

        this.setState((prevState) => ({
            progress: Math.min(prevState.progress + 10, 100),
            
        }));
        console.log("Prevstte " + this.state.progress)
        let updatedVisibility = [...this.state.visibleSections];
            if(id <= updatedVisibility.length){
                updatedVisibility[id] = true
            }
            this.setState({ visibleSections: updatedVisibility });

    };
    localWrite(){
        localStorage.setItem("ProgresMod4", JSON.stringify(this.state.progress))
    }
    componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("ProgresMod4")) || 0;
        this.setState({ progress: savedProgress }, () => {
            this.chekingProgres(savedProgress);
        });
    }
    
    chekingProgres(progress) {
        const steps = [0, 10, 20, 30, 40, 50];
        let visibleSections = steps.map(step => step <= progress);
    
        this.setState({ visibleSections });
    }
    compite = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    getButno(){
        return <button className="buttonne"><FaArrowRight className="Avatares"/></button>
    }
    getButAcc(){
        console.log(this.state.test)
        if(this.state.test === true){
            return <Link to="/test4"><button className="buttonnext"><FaArrowRight className="Avatares"/></button></Link>
        }else if(this.state.test === false){
            return <button onClick={()=> window.location.href = "/Result4"} className="buttonnext"><FaArrowRight className="Avatares"/></button>
        }

    }
    render(){
        const getColor = () => {
            return "#94ceab"
        }
        this.localWrite()
        return (
            <div className="modul" >
                <header className="progresbar">
                    <div onClick={()=> window.location.href ="/Office"} className="home"><FaHome className="Avatars"/></div>
                    
                    <div
                        style={{
                            width: `${this.state.progress}%`,
                            backgroundColor: getColor(),
                            transition: "width .5s ease-in-out"
                        }}
                    ></div>
                </header>
                <div className="tops">
                    <div className="selectcourses">
                        <div className="beg">
                            
                            <div className="foot">
                                <h1 >4. Написання драм-партії {this.state.progress >= 50 ? this.getButAcc():this.getButno()}</h1>
                                
                            </div>  
                            <div className="footback">
                                {this.state.Info.map((item,i) => (
                                    <div className="pita">
                                        {this.state.visibleSections[i] ? "" :(
                                                <div >
                                                    <FaLock className="lock"/>
                                                </div>
                                        )}
                                        <div key={item.id}   style={{
                                            opacity: this.state.visibleSections[i] ? 1 : 0.05,
                                            transition: "opacity 0.5s ease-in-out", 
                                        }}> 
                                            
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            {item.elements && (
                                                <ul>
                                                    {item.elements.map((el, index) => (
                                                        <li key={index}>{el}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {item.additional && <p>{item.additional}</p>}
                                            {item.settings && (
                                                <ul>
                                                    {item.settings.map((setting, index) => (
                                                        <li key={index}>{setting}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {this.state.visibleSections[i+1] ? <button className="buttonread"> Прочитано!</button> : <button onClick={() => this.handleButtonClick(i+1)} className="buttonread"> Прочитати</button>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}
export default Infomod4