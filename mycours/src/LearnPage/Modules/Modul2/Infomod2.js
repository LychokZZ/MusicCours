import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Infomod2 extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            progress: JSON.parse(localStorage.getItem("ProgresMod2") || 0),
            styler: "pita",
            visibleSections: [true,false,false,false,false],
            test: JSON.parse(localStorage.getItem("TestTwo")),
            Info: [
                {
                    id: 1,
                    title: "2.1. Що таке біт і його основні компоненти",
                    description: "Біт — це основа ритмічної структури музичного треку. Він задає темп, настрій і динаміку композиції. Основні компоненти біта:",
                    elements: [
                        "Kick (бочка) — основний ударний звук, що задає ритмічну основу.",
                        "Snare (малий барабан) — акцентує другий і четвертий такти в 4/4.",
                        "Hi-hats (хети) — закриті й відкриті хети додають руху та наповнюють простір.",
                        "Percussion (перкусія) — додаткові ударні елементи (клавеси, шейкери, томи).",
                        "Bassline (басова лінія) — низькочастотний інструмент, що доповнює ударні.",
                        "Melodic elements (мелодика) — синтезатори, акорди, семпли, що формують гармонію.",
                    ],
                },
 
                {
                    id: 2,
                    title: "2.2. Структура біта: основний ритм, підкладка, акценти",
                    description: `Кожен такт складається з чотирьох ударів, де кожен удар можна розділити на 16 рівних часток. Зазначені цифри (від 1 до 16) вказують на позиції цих часток у такті.`,
                    elements: [
                        `Основний ритм — це повторюваний малюнок ударних інструментів. Наприклад, у хіп-хопі використовується схема "бочка – снєр – бочка – снєр".`,
                        "Акценти — розставлення додаткових ударів, які роблять біт унікальним (наприклад, синкопи в трапі).",
                        'Класична схема розташування ударних у 4/4:(цифри – це 16 часток у такті)',
                    ],
 
                },
                {
                    id: 3,
                    title: "2.3. Типи біта в електронній музиці",
                    description: "Хаус (House)",
                    elements: [
                        "Темп: 120-130 BPM Основний малюнок: 4/4, бочка звучить на кожну долю",
                        "Характерні елементи: глибокий бас, відкриті хай-хети, вокальні семпли",
                    ],
                    additional: "Хіп-хоп (Hip-hop)",
                    settings: [
                        "Темп: 75-110 BPM Основний малюнок: класична схема бочка-снєр з варіаціями" ,
                        "Характерні елементи: семпли з вінілів, джазові акорди, розслаблений грув",
                    ],
                   
                },
                {
                    id: 4,
                    title: "2.4. Використання драм-машини",
                    elements: [
                        "Drum Rack та Simpler в Ableton Live — це потужні інструменти для створення ударних партій.",
                        "Drum Rack дозволяє завантажувати та обробляти різні семпли, створюючи унікальні ритми.",
                        "Simpler дозволяє нарізати семпли та використовувати їх у ритмічному малюнку.",
                    ],
                    additional: "Робота з семплами:",
                    settings: [
                        "Використання готових лупів та їх нарізка." ,
                        "Маніпуляції з висотою звуку (pitch), панорамою (panning) та ревербом.",
                    ],
                },
                {
                    id: 5,
                    title: "2.5. Створення першого простого біта в Daw на сайті",
                    elements: [
                        "Вибери темп (наприклад, 90 BPM для хіп-хопу або 130 BPM для хауса).",
                        "Додай бочку (Kick) на 1, 5, 9, 13 кроки в 16-нотній сітці.",
                        "Розмісти снєр (Snare) на 5 та 13 кроки.",
                        "Додай хай-хети (Hi-hats) на парні або всі 16 кроків для динаміки.",
                        "Додай перкусію або ефекти для унікального звучання.",
                        "➡️ Готово! Ти створив свій перший біт! 🥁🔥",
                    ],
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
        localStorage.setItem("ProgresMod2", JSON.stringify(this.state.progress))
        
    }
    componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("ProgresMod2")) || 0;
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
            return <Link to="/test2"><button className="buttonnext"><FaArrowRight className="Avatares"/></button></Link>
        }else if(this.state.test === false){
            return <button onClick={()=> window.location.href = "/Result2"} className="buttonnext"><FaArrowRight className="Avatares"/></button>
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
                                <h1 >2. Теорія створення біта {this.state.progress >= 50 ? this.getButAcc():this.getButno()}</h1>
                                
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
export default Infomod2