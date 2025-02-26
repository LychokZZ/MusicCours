import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mod.css"
import { FaArrowRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Infomod6 extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            progress: JSON.parse(localStorage.getItem("ProgresMod6") || 0),
            styler: "pita",
            visibleSections: [true,false,false,false,false],
            test: JSON.parse(localStorage.getItem("TestSix")),
            Info: [
                {
                    id: 1,
                    title: "6.1. Саунддизайн: створення власних звуків",
                    description: `Саунддизайн — це мистецтво створення та обробки звуків, яке дозволяє зробити ваші мелодії неповторними.`,
                    elements: [
                       `Субтрактивний синтез (робота з фільтрами, ADSR-енвелопами).`,
                       `FM-синтез (створення складних гармоній за допомогою модуляції частоти).`,
                       "Вейвтейбл-синтез (зміна форми хвилі для отримання динамічних звуків).",
                       "Семплування (створення нових звуків із готових аудіофайлів).",
                       "Гранулярний синтез (розщеплення звуку на маленькі частинки для нових текстур).",
                    ],   
                },
                {
                    id: 2,
                    title: "6.2. Автоматизація параметрів для динаміки треку",
                    description: `Автоматизація додає динаміку та рух у ваш трек, змінюючи параметри в певних частинах композиції.  Інструменти в Ableton Live: Envelopes, LFO, Automation curves.`,
                    elements: [
                        `Гучність (плавні переходи, ефект "під'їзду").`,
                        `Фільтри (відкриття/закриття частот для створення напруги).`,
                        `Панорамування (рух звуку в стереопросторі).`,
                        "Реверберацію та ділей (збільшення/зменшення просторості звуку).",
                        "Пітч (ефект глісандо або підвищення напруги перед дропом).",
                    ],
                },
                {
                    id: 3,
                    title: "6.3. Міксинг і мастеринг: основні принципи",
                    description: "Основи міксингу:",
                    elements: [
                        "Баланс частот (еквалізація інструментів, щоб уникнути конфліктів).",
                        "Компресія (вирівнювання динаміки звуків).",
                        "Розташування у просторі (панорамування, реверберація, ділей).",
                        "Гейн-стейджинг (правильний рівень гучності кожного елемента).",
                    ],
                    additional: ` Основи мастерингу:`,   
                    settings: [
                        'Фінальна еквалізація (видалення резонансів, посилення певних частот).',
                        'Лімітер та компресор (збільшення гучності без кліпінгу).',
                        'Стерео-обробка (ширина міксу, M/S-обробка).',
                        'Перевірка на різних пристроях (навушники, монітори, телефони).',
                    ],
                },
                {
                    id: 4,
                    title: "6.4. Експорт треку",
                    description: "Фінальний етап – правильний експорт, щоб ваш трек звучав якісно на всіх пристроях.",
                    elements: [
                        "Формат: WAV (16/24/32-bit) або MP3 (320 kbps).",
                        "Семпл-рейт: 44.1 kHz (для стрімінгу), 48 kHz (для відео).",
                        "Dithering: Використовуйте при зниженні бітності файлу.",
                        "Normalization: Уникайте, якщо не впевнені в результаті.",
                    ],
                    additional: " Додатково: Stem-експорт (експорт окремих доріжок для подальшої обробки).",
                },
            ],
        };
        
    };
    
    handleButtonClick = (id) => {
        if(this.state.progress === 50){
            alert("В цьому блоці максимум 50%)")
            return 
        }
        if(this.state.progress >= 30){
            this.compite()
            this.setState({next: this.getButAcc()})
        }

        this.setState((prevState) => ({
            progress: Math.min(prevState.progress + 12.5, 100),
            
        }));
        console.log("Prevstte " + this.state.progress)
        let updatedVisibility = [...this.state.visibleSections];
            if(id <= updatedVisibility.length){
                updatedVisibility[id] = true
            }
            this.setState({ visibleSections: updatedVisibility });

    };
    localWrite(){
        localStorage.setItem("ProgresMod6", JSON.stringify(this.state.progress))
    }
    componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("ProgresMod6")) || 0;
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
        console.log(" Loop" +this.state.test)
        if(this.state.test === true){
            return <Link to="/test6"><button className="buttonnext"><FaArrowRight className="Avatares"/></button></Link>
        }else if(this.state.test === false){
            return <button onClick={()=> window.location.href = "/Result6"} className="buttonnext"><FaArrowRight className="Avatares"/></button>
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
                                <h1 >6. Розширені техніки {this.state.progress >= 50 ? this.getButAcc():this.getButno()}</h1>
                                
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
export default Infomod6
