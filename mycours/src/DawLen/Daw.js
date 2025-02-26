import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Daw.css"
import Drum from "./Drum";
import { FaHome } from "react-icons/fa";
import * as Tone from "tone";
class Daw extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            kick: "23kick",
            clap: "classicclap",
            hihat: "14hihat",
            perk: "7rim",
            ophat: "8openhat",
            inst: "Piano",
            type: "Piano"
        }
    }
    play=(n) =>{
        let ref = `/Audiocom/${n}.wav`
        const player = new Tone.Player({
            url: ref,
            autostart: false, 
          }).toDestination();

          Tone.loaded().then(() => {
            player.start();
          });
    }
    playMelody(n,res){
        let ref = `${res}${n}.mp3`
        const player = new Tone.Player({
            url: ref,
            autostart: false, 
          }).toDestination();

          Tone.loaded().then(() => {
            player.start();
            player.stop("+2")
          });
    }
    assembly(){
        let ref = `/Audiocom/OneshotsMelody/${this.state.inst}/${this.state.type}`
        return ref
    }
    render(){
        return(
            <div className="Daw">
                <div className="Select">
                    <div className="Choose">
                        <h3 className="instruments">Виберіть інструменти <FaHome onClick={()=> window.location.href="/Office"} className="Homes"/></h3>
                        <div>
                            <h3>Drums choose:</h3>
                            <h4>Kick</h4>
                            <button onClick={()=> {this.setState({kick: "Kick1"}, () => {this.play("Kick1")})}} className="butchoos">Kick 1</button>
                            <button onClick={()=> {this.setState({kick: "23kick"}, () => {this.play("23kick")})}} className="butchoos">Kick 2</button>
                            <button onClick={()=> {this.setState({kick: "19kick"}, () => {this.play("19kick")})}} className="butchoos">Kick 3</button>
                            <button onClick={()=> {this.setState({kick: "13kick"}, () => {this.play("13kick")})}} className="butchoos">Kick 4</button>
                        </div>
                        <div>
                            <h4>Clap</h4>
                            <button onClick={()=> {this.setState({clap: "classicclap"}, () => {this.play("classicclap")})}} className="butchoos">Clap 1</button>
                            <button onClick={()=> {this.setState({clap: "hateclap"}, () => {this.play("hateclap")})}} className="butchoos">Clap 2</button>
                            <button onClick={()=> {this.setState({clap: "15snare"}, () => {this.play("15snare")})}} className="butchoos">Clap 3</button>
                            <button onClick={()=> {this.setState({clap: "25snare"}, () => {this.play("25snare")})}} className="butchoos">Clap 4</button>
                        </div>
                        <div>
                            <h4>Hi-Hat</h4>
                            <button onClick={()=> {this.setState({hihat: "14hihat"}, () => {this.play("14hihat")})}} className="butchoos">Hat 1</button>
                            <button onClick={()=> {this.setState({hihat: "acoustic"}, () => {this.play("acoustic")})}} className="butchoos">Hat 2</button>
                            <button onClick={()=> {this.setState({hihat: "15hihat"}, () => {this.play("15hihat")})}} className="butchoos">Hat 3</button>
                            <button onClick={()=> {this.setState({hihat: "30hihat"}, () => {this.play("30hihat")})}} className="butchoos">Hat 4</button>
                        </div>
                        <div>
                            <h4>Perk</h4>
                            <button onClick={()=> {this.setState({perk: "7rim"}, () => {this.play("7rim")})}} className="butchoos">Perk 1</button>
                            <button onClick={()=> {this.setState({perk: "24rim"}, () => {this.play("24rim")})}} className="butchoos">Perk 2</button>
                            <button onClick={()=> {this.setState({perk: "9perc"}, () => {this.play("9perc")})}} className="butchoos">Perk 3</button>
                            <button onClick={()=> {this.setState({perk: "3perc"}, () => {this.play("3perc")})}}className="butchoos">Perk 4</button>
                        </div>
                        <div>
                            <h4>Open-hat</h4>
                            <button onClick={()=> {this.setState({ophat: "8openhat"}, () => {this.play("8openhat")})}} className="butchoos">Open 1</button>
                            <button onClick={()=> {this.setState({ophat: "13openhat"}, () => {this.play("13openhat")})}} className="butchoos">Open 2</button>
                            <button onClick={()=> {this.setState({ophat: "10openhat"}, () => {this.play("10openhat")})}} className="butchoos">Open 3</button>
                            <button onClick={()=> {this.setState({ophat: "3crach"}, () => {this.play("3crach")})}} className="butchoos">Open 4</button>
                        </div>
                        <div>
                            <h3>Melody</h3>
                            <h4>Piano</h4>
                            <button  onClick={()=> {this.setState({inst: "Piano"}, () => {this.setState({type: "Piano"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Piano 1</button>
                            <button  onClick={()=> {this.setState({inst: "Piano"}, () => {this.setState({type: "Piano1"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Piano 2</button>
                            <button  onClick={()=> {this.setState({inst: "Piano"}, () => {this.setState({type: "Piano2"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Piano 3</button>
                            <button  onClick={()=> {this.setState({inst: "Piano"}, () => {this.setState({type: "Piano4"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Piano 4</button>
                        </div>
                        <div>
                            <h4>Flute</h4>
                            <button  onClick={()=> {this.setState({inst: "Flute"}, () => {this.setState({type: "Fl"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Flute 1</button>
                            <button  onClick={()=> {this.setState({inst: "Flute"}, () => {this.setState({type: "Fl1"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Flute 2</button>
                            <button  onClick={()=> {this.setState({inst: "Flute"}, () => {this.setState({type: "Fl2"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Flute 3</button>
                            <button  onClick={()=> {this.setState({inst: "Flute"}, () => {this.setState({type: "Fl3"},()=> this.playMelody("C3" , this.assembly()))})}}className="butchoos">Flute 4</button>
                        </div>
                    </div>
                </div>
                <div className="flow"> 
                    <Drum 
                    kick = {this.state.kick}
                    clap = {this.state.clap}
                    ophat ={this.state.ophat}
                    hihat ={this.state.hihat}
                    perk = {this.state.perk}
                    melody = {this.assembly()}
                    /> 
                </div>
            </div>
        )
    }
}
export default Daw
