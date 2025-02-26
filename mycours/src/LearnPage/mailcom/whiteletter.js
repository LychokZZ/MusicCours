import React, {useContext, useState} from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mail.css"
import { Context } from "../../";

const Write = () =>{
    const From = JSON.parse(localStorage.getItem("Userauth"))
    const [To, setTo] = useState()
    const [text, settext] = useState()
    const {store} = useContext(Context);
   
        return(
        <div> 
            <div className="write">
                        <div className="hedmail">
                            <h2 className="namers">Напишіть листа </h2>
                            <button type="button" className="buttondzer" onClick={()=> {store.sendletter(From,To, text);window.location.href="/Mail"}}>Надіслати</button>
                        </div>
                        
                        <div className="Masssse">
                            <input placeholder="Кому" className="inputpolehow" onChange={(e)=>setTo(e.target.value)}/>
                            <textarea placeholder="Ваше повідомлення" className="inputpolemas" onChange={(e) =>settext(e.target.value)} ></textarea>
                           
                        </div>
                </div>
        </div>
        )
    }
export default Write
