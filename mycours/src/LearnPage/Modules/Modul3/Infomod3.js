import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Infomod3 extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            progress: JSON.parse(localStorage.getItem("ProgresMod3") || 0),
            styler: "pita",
            visibleSections: [true,false,false,false,false],
            test: JSON.parse(localStorage.getItem("TestThree")),
            Info: [
                {
                    id: 1,
                    title: "3.1. Основи мелодії в електронній музиці.",
                    description: `Мелодія — це основний елемент композиції, який складається з послідовності нот, що зазвичай мають певну висоту та ритмічну структуру. В електронній музиці мелодії часто використовуються як провідний елемент композиції, який може задавати атмосферу, настрій, емоції треку. "Головні принципи створення мелодії:"`,
                    elements: [
                       `Вибір інтервалів та гам. Інтервали визначають "відстань" між нотами. Наприклад, великі інтервали (як октави) створюють відчуття величезної простору, тоді як малі інтервали (як секунди) можуть створювати інтимну атмосферу.`,
                       `Вибір гами. Гама — це набір нот, що використовуються в композиції. Найпоширеніші гами — мажорна та мінорна. Мажорна дає відчуття радості, тоді як мінорна — суму чи меланхолію.`,
                       `Ритм та довжина нот. Ритмічні патерни та довжина нот важливі для створення "дихання" в мелодії. Для електронної музики часто використовують довгі, розтягнуті ноти або швидкіші ритмічні фігури, які додають драйву.`,
                    ],
                    additional: `Практичне завдання : Створити просту мелодію на основі мажорної чи мінорної гами, використовуючи різні інтервали. Спробуй змінювати ритм нот, щоб створити різний настрій.`,
                },
                {
                    id: 2,
                    title: "3.2 Інструменти Ableton для створення мелодій",
                    description: "MIDI-кліп — це основний інструмент для створення мелодій в Ableton. Це не звуковий файл, а набір інструкцій для відтворення нот на віртуальному інструменті.",
                    elements: [
                        `Створіть новий трек, виберіть інструмент (наприклад, синтезатор або плагін) і натисніть "Create MIDI Clip".`,
                        `За допомогою редактора MIDI ви можете малювати ноти або редагувати їх за допомогою миші або клавіатури.`,
                        `Ви можете змінювати довжину нот, їх висоту (тон) та інтервали.`,
                    ],
                },
                {
                    id: 3,
                    title: "3.3 Використання плагінів та VST",
                    description: "Плагіни (VST — Virtual Studio Technology) — це програмне забезпечення, яке додається до DAW (Digital Audio Workstation, наприклад, Ableton Live), щоб розширити можливості для синтезу звуків, ефектів, обробки звуку і багато іншого.",
                    elements: [
                        "Синтезатори: Це плагіни, які генерують звуки. Вони можуть бути різних типів, наприклад, субтрактивний синтез, FM-синтез, хвильові таблиці.",
                        "Ефекти: Плагіни для обробки звуків, такі як реверберація, ділей, фільтри, що змінюють звучання мелодії.",
                        "Підбір плагінів для різних стилів: Для більш мелодійних треків чудово підходять синтезатори, які дають м’які та приємні звуки. Для більш експериментальних треків — плагіни, які створюють нестандартні звуки.",
                    ],
                    additional: `Практичне завдання: Скачай плагін для синтезу (наприклад, Serum, Sylenth1, Massive) і створіть з його допомогою кілька різних мелодій.`,   
                },
                {
                    id: 4,
                    title: "3.4 Мелодичні прийоми",
                    elements: [
                        "Арпеджіо — це техніка, коли ноти акорду виконуються послідовно, а не одночасно. В електронній музиці арпеджіо часто використовується для створення енергійних та цікаво звучащих мелодій.",
                        "Лупи — це короткі фрагменти музики, які повторюються протягом треку. Вони можуть бути використані для створення основи мелодії.",
                        "Модуляція — це зміна параметрів звуку протягом часу, наприклад, зміна частоти фільтра, амплітуди або тону. Це додає динаміки і глибини мелодії.",
                    ],
                    additional: "Спробуй створити арпеджіо на основі акордів, використовуючи різні швидкості та інтервали. Потім додай модуляцію для змін у звучанні.",
                },
                {
                    id: 5,
                    title: "3.5 Практика: створення простої мелодії під біт",
                    elements: [
                        "Зайдіть в DAW на сайті і знайдіть Midi-clip",
                        "Підберіть інструмент (наприклад, Piano чи Flute) та налаштуйте звук під свою мелодію.",
                        "Використовуйте арпеджіо, лупи або модуляцію, щоб додати динаміки.",
                        "Встановіть біт, під який ваша мелодія повинна звучати.",
                        "➡️ Готово! Ти створив свою першу мелодію! 🥁🔥",
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
        localStorage.setItem("ProgresMod3", JSON.stringify(this.state.progress))
    }
    componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("ProgresMod3")) || 0;
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
            return <Link to="/test3"><button className="buttonnext"><FaArrowRight className="Avatares"/></button></Link>
        }else if(this.state.test === false){
            return <button onClick={()=> window.location.href = "/Result3"} className="buttonnext"><FaArrowRight className="Avatares"/></button>
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
                                <h1 >3. Написання мелодії {this.state.progress >= 50 ? this.getButAcc():this.getButno()}</h1>
                                
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
export default Infomod3