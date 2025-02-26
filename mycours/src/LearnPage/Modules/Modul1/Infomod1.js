import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Infomod1 extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            progress: JSON.parse(localStorage.getItem("ProgresMod1") || 0),
            styler: "pita",
            visibleSections: [true,false,false,false,false],
            test: JSON.parse(localStorage.getItem("TestOne")),
            Info: [
                {
                    id: 1,
                    title: "1.1. Огляд програми",
                    description: "Ableton Live — це динамічна програма для створення, запису та обробки музики. Вона підходить як для початківців, так і для професіоналів завдяки своєму гнучкому функціоналу.",
                    elements: [
                        "Головне меню: місце, де ви знайдете основні налаштування програми.",
                        "Browser (Бібліотека): тут зберігаються інструменти, ефекти, семпли, лупи та готові пресети.",
                        "Arrangement View (Редактор арренджування): використовується для побудови структури треку у вигляді таймлайна.",
                        "Session View (Сесійний режим): підходить для імпровізації та створення лупів.",
                        "Mixer (Мікшер): дозволяє змінювати гучність, панорамування, а також додавати ефекти.",
                    ],
                },
                {
                    id: 2,
                    title: "1.2. Session View та Arrangement View",
                    description: "Session View містить кліпи — короткі музичні уривки, які можна повторювати, комбінувати та запускати у реальному часі. Це ідеально для створення ідей та імпровізації.",
                    additional: "Arrangement View дозволяє розміщувати кліпи у часі, будуючи повноцінний трек. Це підходить для створення фінальної структури композиції.",
                },
                {
                    id: 3,
                    title: "1.3. Налаштування програми",
                    description: "Відкрийте Preferences (Налаштування):",
                    elements: [
                        "Audio: виберіть звуковий пристрій (наприклад, аудіоінтерфейс).",
                        "MIDI: підключіть MIDI-контролери.",
                    ],
                    additional: "Встановіть буферизацію (латенцію):",
                    settings: [
                        "Для запису: використовуйте менше значення (наприклад, 128 samples).",
                        "Для мікшування: можна використовувати більше значення (512 samples).",
                    ],
                },
                {
                    id: 4,
                    title: "1.4. Основні функції",
                    elements: [
                        "Додавання треків: Натисніть правою кнопкою миші та виберіть 'Insert Audio Track' або 'Insert MIDI Track'.",
                        "Створення кліпів: Подвійно клікніть на MIDI або аудіотреку.",
                        "Автоматизація: Затисніть [A], щоб редагувати параметри (гучність, панорамування, ефекти).",
                    ],
                },
                {
                    id: 5,
                    title: "1.5. Hotkeys (Гарячі клавіші)",
                    elements: [
                        "[Tab]: перемикання між Session View та Arrangement View.",
                        "[Space]: старт або зупинка відтворення.",
                        "[Ctrl + T] (Windows) або [Cmd + T] (Mac): створення нового треку.",
                        "[Ctrl + Z] (Windows) або [Cmd + Z] (Mac): скасування дії.",
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
        localStorage.setItem("ProgresMod1", JSON.stringify(this.state.progress))
    }
    componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("ProgresMod1")) || 0;
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
        if(this.state.test === true){
            return <Link to="/test1"><button className="buttonnext"><FaArrowRight className="Avatares"/></button></Link>
        }else if(this.state.test === false){
            return <button onClick={()=> window.location.href = "/Result"} className="buttonnext"><FaArrowRight className="Avatares"/></button>
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
                                <h1 >1. Вступ до Ableton Live{this.state.progress >= 50 ? this.getButAcc():this.getButno()}</h1>
                                
                            </div>  
                            <div className="footback">
                                {this.state.Info.map((item,i) => (
                                    <div className="pita">
                                        {this.state.visibleSections[i] ? "" :(
                                                <div >
                                                    <FaLock className="lock"/>
                                                </div>
                                        )}
                                        <div key={item.id}  style={{
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
export default Infomod1