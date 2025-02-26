import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mail.css"
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Inbox from "./mailcom/inbox";
import Sends from "./mailcom/sendletter";
import Write from "./mailcom/whiteletter";

class Mail extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          selectedContent: this.inbox(),
          mail: [
            {
                id:1,
                names: "Olif Eventes",
                message: "Привіт як справи бачив ти непогано справляєшся з завданнями я радий за тебе брате!",
                isRead: false,
            },
          ]
        };
        this.writelet = this.writelet.bind(this)
      }
    inbox() {
        return <Inbox reply={this.replymail}/>
    }
    sends(){
        return <Sends male={this.state.mail}/>
    }
    write(names){
        return <Write onAdd={this.writelet} name={names}/>
    }
    eSelect = (content) => {
        this.setState({ selectedContent: content });
      };
    replymail = (names) => {
        this.setState({ selectedContent: this.write(names) });
    };
    render(){
        return (
            <div className="bodymail">
                <header className="headmail">
                    <Link to="/Office"><div><FaHome className="Avatars"/></div></Link>
                </header>
                <div className="basecent"> 
                    <div className="malios">
                        <div className="divburt">
                            <button onClick={() => this.eSelect(this.inbox())} className="buttonmail">Пошта</button>
                            <button onClick={() => this.eSelect(this.sends())} className="buttonmail">Відправленні</button>
                            <button onClick={() => this.eSelect(this.write())} className="buttonmail">Написати</button>
                        </div>
                        <div>
                            <div className="">{this.state.selectedContent}</div>
                            <div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        )
    }
    writelet(mail){
        const id = this.state.mail.length +1
        this.setState({ mail: [...this.state.mail, {id, ...mail}]})
    }
    

}
export default Mail