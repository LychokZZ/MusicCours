import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Learn.css"
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import Progres from "./Progres";
import { IoMdMail } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaHeadset } from "react-icons/fa6";


class Info extends React.Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
          selectedContent: this.topicONE(),
          selectStruk: [
            {   id:0,
                key: 'ONE' ,
                discrop:'1. Вступ до Ableton Live' ,},
            {   id:1,
                key: "TWO" ,
                discrop:'2. Теорія створення біта' ,},
            {   id:2,
                key: "THRID" ,
                discrop:'3. Написання мелодії' ,},
            {   id:3,
                key: "FOUR" ,
                discrop:'4. Написання драм-партії' ,},
            {   id:4,
                key: "FIVE" ,
                discrop:'5. Теорія музики для продюсерів' ,},
            {   id:5,
                key: "SIX" ,
                discrop:'6. Розширені техніки (опціонально)' ,},
            ], 
            visibleSections: [true,false,false,false,false,false],
        };
      }

    topicONE() {
        
        return (
            <div className="topic">
                <h2>1. Вступ до Ableton Live <button onClick={()=> this.pushinfo(1)} className="learnbut">Вивчити!</button></h2>
                <p>1.1. Огляд програми: інтерфейс, основні елементи.</p>
                <p>1.2. Session View та Arrangement View – для чого кожен режим.</p>
                <p>1.3. Налаштування програми: аудіоінтерфейс, MIDI-контролери, буферизація.</p>
                <p>1.4. Основні функції: панель інструментів, бібліотека звуків, навігація.</p>
                <p>1.5. Hotkeys: основні комбінації клавіш для роботи.</p>
            </div>
        )
      }

      topicTWO() {
        return (
            <div className="topic">
                <h2>2. Теорія створення біта <button onClick={()=> this.pushinfo(2)} className="learnbut">Вивчити!</button></h2>
                <p>2.1. Що таке біт і його основні компоненти.</p>
                <p>2.2. Структура біта: основний ритм, підкладка, акценти.</p>
                <p>2.3. Типи біта в електронній музиці:
                    <ul> <li>Хаус, Техно, Трап, Хіп-хоп</li> </ul> </p>
                <p>2.4. Використання драм-машини:
                <ul> <li>Drum Rack та Simpler в Ableton Live, Робота з семплами</li> </ul> </p>
                <p>2.5. Створення першого простого біта.</p>
            </div>
        )
      }
      topicTHRID() {
        return (
            <div className="topic">
                <h2>3. Написання мелодії <button onClick={()=> this.pushinfo(3)} className="learnbut">Вивчити!</button></h2>
                <p>3.1. Основи мелодії в електронній музиці.</p>
                <p>3.2. Інструменти Ableton для створення мелодій:
                    <ul> <li>MIDI-кліпи, Інструменти (Operator, Wavetable, Analog)</li> </ul> </p>
                <p>3.3. Використання плагінів та VST.</p>
                <p>3.4. Мелодичні прийоми:
                    <ul> <li>Арпеджіо, Лупи, Модуляція</li> </ul> </p>
                <p>3.5. Практика: створення простої мелодії під біт.</p>
            </div>
        )
      }
      topicFOUR() {
        return (
            <div className="topic">
                <h2>4. Написання драм-партії <button onClick={()=> this.pushinfo(4)} className="learnbut">Вивчити!</button></h2>
                <p>4.1. Розширення біта:
                    <ul> <li>Хети, клепи, кік, перкусія.</li> </ul> </p>
                <p>4.2. Робота з ефектами (Reverb, Delay, EQ).</p>
                <p>4.3. Використання семплів і створення своїх звуків.</p>
                <p>4.4. Автоматизація в драм-партіях.</p>
                <p>4.5. Практика: створення складної драм-партії.</p>
            </div>
        )
      }
      topicFIVE() {
        return (
            <div className="topic">
                <h2>5. Теорія музики для продюсерів <button onClick={()=> this.pushinfo(5)} className="learnbut">Вивчити!</button></h2>
                <p>5.1. Основи гармонії:<ul> <li>Тональність і ключ, Основні акорди.</li> </ul> </p>
                <p>5.2. Ритміка:<ul> <li>Розмір 4/4, поліритми.</li> </ul> </p>
                <p>5.3. Мелодика:<ul> <li>Структура треку (куплет, приспів, брейкдаун).</li> </ul> </p>
                <p>5.4. Взаємодія інструментів у міксі.</p>
                <p>5.5. Практика: написання короткого фрагменту треку з використанням усіх отриманих знань.</p>
            </div>
        )
      }
      topicSIX() {
        return (
            <div className="topic">
                <h2>6. Розширені техніки (опціонально) <button onClick={()=> this.pushinfo(6)} className="learnbut">Вивчити!</button></h2>
                <p>6.1. Саунддизайн: створення власних звуків.</p>
                <p>6.2. Автоматизація параметрів для динаміки треку.</p>
                <p>6.3. Міксинг і мастеринг: основні принципи.</p>
                <p>6.4. Експорт треку.</p>
            </div>
        )
      }
      pushinfo(n){
        if(n===1){
            window.location.href = "/Modul1"
        }else if(n===2){
            window.location.href = "/Modul2"
        }
        else if(n===3){
            window.location.href = "/Modul3"
        }
        else if(n===4){
            window.location.href = "/Modul4"
        }
        else if(n===5){
            window.location.href = "/Modul5"
        }
        else if(n===6){
            window.location.href = "/Modul6"
        }

      }
      handleSelect = (content,id) => {
        let link = this[`topic${content}`]()
        console.log(link)
        if(this.state.visibleSections[id] === true){
            this.setState({ selectedContent: link });
        }else return
        
      };
      componentDidMount() {
        const savedProgress = JSON.parse(localStorage.getItem("AllProgress"));
        this.chekingProgres(savedProgress);
        
    }
      
      chekingProgres(progress) {
        const steps = [0, 17, 33, 50, 67, 84 ,100];
        let visibleSections = steps.map(step => step <= progress);
    
        this.setState({ visibleSections });
    }
      
    render(){
        return (
            <div className="info" >
                <div className="routeee">
                    <Link to="/Home"> <RxAvatar className="Avatar"/></Link>
                    <Link to="/Mail"> <IoMdMail className="Avatar"/></Link>
                    <IoMdSettings className="Avatar" onClick={()=>window.location.href ="/Setting"}/>
                    <Link to="/Daw"> <FaHeadset className="Avatar"/></Link>

                </div>
                
                <div className="struk">
                    <div className="Num">
                        <h1>Структура курсу</h1>
                    </div>

                    {this.state.selectStruk.map((el)=>(
                        <div key={el.id}   style={{
                            opacity: this.state.visibleSections[el.id] ? 1 : 0.05,
                            transition: "opacity 0.5s ease-in-out", 
                        }}> 
                            <button
                            onClick={() => this.handleSelect(el.key,el.id)}
                            className="buttonSt"
                            >
                            <h3 className="">{el.discrop}</h3>
                            </button>
                        </div>
                        
                    ))}
                </div>
                
                <div className="indo">
                    <div className="selcc">
                        <div>
                            <div>
                                <Progres />
                            </div>
                        </div>
                        <div className="opselect">
                            <h1 className="selectcourse">План курсу навчання електронної музики в Ableton Live: </h1>
                            
                            <div className="selectcourses">{this.state.selectedContent}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
             
        )
        
    }
    
}
export default Info 