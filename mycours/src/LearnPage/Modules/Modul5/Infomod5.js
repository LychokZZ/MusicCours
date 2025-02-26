import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Infomod5 extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            progress: JSON.parse(localStorage.getItem("ProgresMod5") || 0),
            styler: "pita",
            visibleSections: [true,false,false,false,false],
            test: JSON.parse(localStorage.getItem("TestFive")),
            Info: [
                {
                    id: 1,
                    title: "5.1. Основи гармонії",
                    description: `Тональність і ключ – це основа гармонії.`,
                    elements: [
                       `Тональність визначає набір нот, які звучать гармонійно в композиції.`,
                       `Ключ (мажор або мінор) визначає загальний настрій: мажор – яскравий, мінор – меланхолійний.`,
                    ],
                    additional: `Основні акорди – тризвуки (наприклад, Cmaj, Amin), які формують гармонічну основу треку.`,   
                    settings: [
                        `В електронній музиці часто використовують прості акордові послідовності, наприклад:  I–V–vi–IV (C–G–Am–F)  I–vi–IV–V (C–Am–F–G)`,
                    ],
                   
                },
                {
                    id: 2,
                    title: "5.2. Ритміка",
                    description: `Розмір 4/4 (часто його називають "чотири чверті") – це один з найпоширеніших метрів у музиці, особливо в електронних жанрах. Давай розберемо, чому він такий популярний.`,
                    elements: [
                        `Кік – на 1 і 3 долі (бум-бум)`,
                        `Снейр/клап – на 2 і 4 долі (клац-клац)`,
                        `Хети – восьмі або шістнадцяті ноти (тік-тік-тік)`,
                    ],
                    additional: `Поліритми – накладення різних ритмічних малюнків. Наприклад:`,   
                    settings: [
                        `Кік грає 4 удари в такт, а перкусія – 3 удари (поліритм 4:3).`,
                    ],
                },
                {
                    id: 3,
                    title: "5.3. Мелодика",
                    description: "Структура треку в електронній музиці часто має схему:",
                    elements: [
                        "Куплет (Verse) – основна ідея треку, задає атмосферу.",
                        "Приспів (Chorus/Drop) – найвиразніша частина, кульмінація.",
                        "Брейкдаун (Breakdown) – спокійніший момент перед дропом.",
                    ],
                    additional: `Усі ці частини взаємопов’язані, і мелодика часто розвивається від куплета до приспіву.`,   
                },
                {
                    id: 4,
                    title: " 5.4. Взаємодія інструментів у міксі",
                    description: "Кожен елемент треку повинен займати своє місце:",
                    elements: [
                        "Бас – низькі частоти, глибина.",
                        "Мелодія – середні/високі частоти, основна емоція.",
                        "Перкусія – додає ритмічну енергію.",
                        "FX-звуки – для створення атмосфери.",
                    ],
                    additional: "Основне правило – не перевантажувати мікс, залишати простір між елементами.",
                },
                {
                    id: 5,
                    title: " 5.5. Практика",
                    description: "Створи короткий фрагмент треку, використовуючи всі ці знання:",
                    elements: [
                        "Визнач тональність та основну гармонію.",
                        "Запиши простий ритм у розмірі 4/4.",
                        "Додай мелодію та бас.",
                        "Розбий фрагмент на куплет, приспів і брейкдаун.",
                        "Оброби мікс: баланс, еквалізація, реверб.",
                    ],
                    additional: "Якщо хочеш, можеш надіслати проєкт – розберемо разом! 🚀",
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
        localStorage.setItem("ProgresMod5", JSON.stringify(this.state.progress))
    }
    componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("ProgresMod5")) || 0;
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
            return <Link to="/test5"><button className="buttonnext"><FaArrowRight className="Avatares"/></button></Link>
        }else if(this.state.test === false){
            return <button onClick={()=> window.location.href = "/Result5"} className="buttonnext"><FaArrowRight className="Avatares"/></button>
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
                                <h1 >5. Теорія для продюсерів {this.state.progress >= 50 ? this.getButAcc():this.getButno()}</h1>
                                
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
export default Infomod5