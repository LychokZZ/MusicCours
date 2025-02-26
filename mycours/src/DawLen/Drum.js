import React from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Daw.css"
import * as Tone from "tone";
import { TbMetronome } from "react-icons/tb";
var meta = false
let leftPiano = [false,false,false,false,false,false,false,false,false,false,false,false]
class Drum extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            currentStep: -1,
            pianoSteps: -2,
            button: this.start(),
            stepData: Array(5).fill().map(() => Array(16).fill(false)),
            speed: 700,
            key: "A",
            speedPiano: false, 
            stylePiano: this.style16(),
            styleRowPiano: this.for16(), 
            lengthNote: "+1",
            PianoArray: this.set16(),
            metrunom: null,
            onof: this.buton(),
            bpm: 0,
            switch: this.swith16(),
        };
        this.interval = null;
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.intervals);
    }
    startSteps = (n) => {
        if(n === true){
            this.butr(false)
            this.StepsPiano(meta)
            this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    currentStep: prevState.currentStep < 14 ? prevState.currentStep + 1 : -1,
                }));
                this.goes(this.state.currentStep);
                this.metron()
            }, this.state.speed); 
        }else if(n === false){
            this.butr(true)
            this.setState({currentStep: -1 })
            this.StepsPiano(null)
            clearInterval(this.interval);
        }
    };

    StepsPiano(n){
        const spre = (this.state.speed)/2
        if(n===true){
            this.setState({pianoSteps: -2 })
            this.intervals = setInterval(() => {
                this.setState((prevState) => ({
                    pianoSteps: prevState.pianoSteps < 29 ? prevState.pianoSteps + 1 : -2,
                }));
                this.Rolles(this.state.pianoSteps);
            }, spre); 
        }else if(n===false){
            this.setState({pianoSteps: -1 })
            this.intervals = setInterval(() => {
                this.setState((prevState) => ({
                    pianoSteps: prevState.pianoSteps < 14 ? prevState.pianoSteps + 1 : -1,
                }));
                this.Rolles(this.state.pianoSteps);
            }, this.state.speed);
        }else if(n === null){
            this.setState({pianoSteps: -1 })
            clearInterval(this.intervals);
        }
    }

    metron(){
        if(this.state.metrunom === true){
            this.metronom()
        }
    }
    OnOfMetro(n){
        if(n === true){
            this.setState({metrunom: true}) 
            this.setState({onof: this.butof()}) 
        }else if(n === false ){
            this.setState({metrunom: false}) 
            this.setState({onof: this.buton()}) 
        }
    }
    buton(){
        return <button onClick={()=>{this.OnOfMetro(true)}}  className="metro"><TbMetronome className="iconMetr"/></button>
    }
    butof(){
        return <button onClick={()=>{this.OnOfMetro(false)}} className="metro"><TbMetronome style={{color: "#58cbe5"}} className="iconMetr"/></button>
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
    metronom(){
        const player = new Tone.Player(
            "/Audiocom/7rim.wav"
        ).toDestination();
        Tone.loaded().then(() => {
            player.start();
        });
        player.volume.value = -20;
    }
    setSpeed(speed){
        this.setState({speed: speed}) 
    }
    setBpm(speed){
        let bpm = Math.round(speed/5)
        this.setState({bpm: bpm})
    }
    start(){
        return <button onClick={()=>{this.startSteps(true)}} className="but">Start</button>
    }
    stop(){
        return <button onClick={()=>{this.startSteps(false)}} className="but">Stop</button>
    }
    butr = (n) =>{
        if(n === true){
            this.setState({button: this.start()}) 
        }else if(n === false){
            this.setState({button: this.stop()}) 
        }
    } 
    goes(n){
        if(this.state.stepData[0][n+1] === true){
            this.play(`${this.props.kick}`)
        }
        if(this.state.stepData[1][n+1] === true){
            this.play(`${this.props.clap}`)
        }
        if(this.state.stepData[2][n+1] === true){
            this.play(`${this.props.hihat}`)
        }
        if(this.state.stepData[3][n+1] === true){
            this.play(`${this.props.perk}`)
        }
        if(this.state.stepData[4][n+1] === true){
            this.play(`${this.props.ophat}`)
        }
    }; 
    Rolles(n){
        let spidi = this.state.speed/2

        if(this.state.PianoArray[0][n+1] === true|| n === "'" ){
            this.plays("B3")
            leftPiano[0] = true
            setTimeout(()=>{leftPiano[0] = false},spidi)
        }
        if(this.state.PianoArray[1][n+1] === true || n === ';' ){
            this.plays("A#3")
            leftPiano[1] = true
            setTimeout(()=>{leftPiano[1] = false},spidi)         
        }
        if(this.state.PianoArray[2][n+1] === true || n === 'p'){
            this.plays("A3")
            leftPiano[2] = true
            setTimeout(()=>{leftPiano[2] = false},spidi)
        }
        if(this.state.PianoArray[3][n+1] === true || n === 'l' ){
            this.plays("G#3")
            leftPiano[3] = true
            setTimeout(()=>{leftPiano[3] = false},spidi)
        }
        if(this.state.PianoArray[4][n+1] === true || n === 'k'){
            this.plays("G3")
            leftPiano[4] = true
            setTimeout(()=>{leftPiano[4] = false},spidi)
        }
        if(this.state.PianoArray[5][n+1] === true || n === 'j'){
            this.plays("F#3")
            leftPiano[5] = true
            setTimeout(()=>{leftPiano[5] = false},spidi)
        }
        if(this.state.PianoArray[6][n+1] === true || n === 'h' ){
            this.plays("F3")
            leftPiano[6] = true
            setTimeout(()=>{leftPiano[6] = false},spidi)
        }
        if(this.state.PianoArray[7][n+1] === true || n === 'g' ){
            this.plays("E3")
            leftPiano[7] = true
            setTimeout(()=>{leftPiano[7] = false},spidi)
        }
        if(this.state.PianoArray[8][n+1] === true || n === 'f' ){
            this.plays("D#3")
            leftPiano[8] = true
            setTimeout(()=>{leftPiano[8] = false},spidi)
        }
        if(this.state.PianoArray[9][n+1] === true || n === 'd' ){
            this.plays("D3")
            leftPiano[9] = true
            setTimeout(()=>{leftPiano[9] = false},spidi)
        }
        if(this.state.PianoArray[10][n+1] === true || n === 's' ){
            this.plays("C#3")
            leftPiano[10] = true
            setTimeout(()=>{leftPiano[10] = false
            },spidi)
        }
        if(this.state.PianoArray[11][n+1] === true || n === 'a' ){
            this.plays("C3")
            leftPiano[11] = true
            setTimeout(()=>{leftPiano[11] = false},spidi)
        }
    }
    plays=(n) =>{
        let ref = `${this.props.melody}${n}.mp3`
        const player = new Tone.Player({
            url: ref,
            autostart: false, 
          }).toDestination();

          Tone.loaded().then(() => {
            player.start();
            player.stop(this.state.lengthNote)
          });
          setTimeout(()=>{ this.setState({key: "A"})},500)
    } 
    handleChange = (row, step) => {
        this.setState((prevState) => {
            const newStepData = prevState.stepData.map((r, rowIndex) =>
                rowIndex === row
                    ? r.map((s, stepIndex) => (stepIndex === step ? !s : s))
                    : r
            );
            return { stepData: newStepData };
        });
    };
    handleChanges = (row, step) => {
        
        this.setState((prevState) => {
            const newPianoArray = prevState.PianoArray.map((r, rowIndex) =>
                rowIndex === row
                    ? r.map((s, PianoArray) => (PianoArray === step ? !s : s))
                    : r
            );
            return { PianoArray: newPianoArray };
        });
    };
    block(){
        return(
            <div className="grid">
                <div className="olop">
                    {this.state.stepData.map((row,rowid) => (
                        <div className="row">
                            {row.map((id,stepid) =>(
                                <div>
                                    <input
                                        className="drum"
                                        type="checkbox"
                                        id={stepid}
                                        onChange={(e) => this.handleChange(rowid,stepid)} 
                                    />
                                </div>
                            )
                            )}
                        </div>  
                    ))}
                </div>
            </div>
        )
    }
    ball(){
        const steps = [...Array(16).keys() ]
            return(
                <div>
                    {steps.map((id) => (
                    <label >
                        <input
                            className="ball"
                            type="radio"
                            name="lamp"
                            id={id}
                            disabled
                            checked = {id === this.state.currentStep}
                            style={{ display: "none" }}
                        />
                        
                       <span
                            style={{
                                width: "15px",
                                height: "15px",
                                margin: "0px 15px 0px 32px",
                                padding: "0px",
                                borderRadius: "50%",
                                display: "inline-block",
                                backgroundColor: id === this.state.currentStep ? "#525252" : "#fff",
                            }}
                        />
                    </label>
                ))}
                </div>
            )        
    };    
    switchTo(n) {
        if(n === true){
            meta = true
            this.setState({switch : this.swith32()})
            this.setState({PianoArray : this.set32()})
            console.log(this.state.PianoArray)
            
        }else if(n === false){
            meta = false 
            this.setState({switch : this.swith16()})
            this.setState({PianoArray : this.set16()})
            console.log(this.state.PianoArray)
        }
    }
    for16(){return "pianos"};
    for32(){return "pianos2"};
    style16(){return "piano"};
    style32(){return "piano2"};
    set16(){
        this.setState({stylePiano: this.style16()})
        this.setState({styleRowPiano: this.for16()})
        return Array(12).fill().map(() => Array(16).fill(false))   
    }
    set32(){
        this.setState({stylePiano: this.style32()})
        this.setState({styleRowPiano: this.for32()})
        return Array(12).fill().map(() => Array(32).fill(false))
    
    }
    swith16(){  
        return <button className="butSw" onClick={() => this.switchTo(true)}>Switch grid to 1/8</button>
    }
    swith32(){
        return <button className="butSw" onClick={() => this.switchTo(false)}>Switch grid to 1/4</button>
    }
    swap(n){
        if(n=== 5){
            this.setState({lengthNote: "+10"})
        }else if(n === 1.5){
            this.setState({lengthNote: "+1.5"})
        }else if(n === 1){
            this.setState({lengthNote: "+1"})
        }else this.setState({lengthNote: "+0.5"})
    }
    pianoShow(){
        return(
            <div className="">
                {leftPiano.map((id)=>(
                    <div className="Pianosis">
                            <input
                                className="Pianos"
                                type="checkbox"
                                id={id}
                                checked = {id === true}
                            />
                    </div>
                ))}
            </div>
        )
    }
    handleKeyDown = (event) => {
        this.Rolles(event.key)
        this.setState({key: event.key })
     };
    /*componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }*/

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }
    melody(){
        return(
            <div className="backrou">  
                <div className="lipowka">
                <div className="lopotki">
                    {this.pianoShow()}
                    {this.componentDidMount()}        
                </div>
                    <div className="uppiano">     
                        <div className="blocknot">     
                            <p>Вибери довжину нот:</p>
                            <div className="callbut">
                                <button onClick={()=> this.swap(5)} className="secbur">Full</button>
                                <button onClick={()=> this.swap(1.5)} className="secbur">1.5s</button>
                                <button onClick={()=> this.swap(1)} className="secbur">1s</button>
                                <button onClick={()=> this.swap(0.5)} className="secbur">0.5s</button>
                            </div>
                        </div>
                        <div className="divbutSw">
                            {this.state.switch}
                        </div>
                    </div>
                    <div className="opas">
                        {this.state.PianoArray.map((row,rowid)=>(
                            <div className={this.state.styleRowPiano}>
                                {row.map((step,stepid) => (
                                    <div>
                                    <input
                                    
                                        className={this.state.stylePiano}
                                        type="checkbox"
                                        id={stepid}

                                        onChange={(e) => this.handleChanges(rowid,stepid)} 
                                    />
                                </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
    }
    render(){
        return(
        <div className="overflow"> 
            <div className="formemd">

                <div>
                    <h3 className="names">Kick</h3>
                    <h3 className="names">Clap</h3>
                    <h3 className="names">Hi-hat</h3>
                    <h3 className="names">Perk</h3>
                    <h3 className="names">Op-hat</h3>
                </div>
                <div className="drumac">
                    <div className="krut">
                        {this.state.button}
                        <div><button className="butr">BMP: {this.state.bpm}</button></div>
                        <div className="endbut">{this.state.onof}</div>
                        
                        <input
                            className="roler"
                            type="range"
                            min="400"
                            max="1200"
                            step="1"
                            onChange={(e) => {
                                this.setSpeed(1200 - (Number(e.target.value)) -1)
                                this.setBpm(Number(e.target.value))
                            }}
                            
                        />
                    </div>
                    <div>{this.ball()}</div>
                    <div>{this.block()}</div>
                </div>
                
            </div>
            <div className="melodydrum">
                {this.melody()}
            </div>
        </div>
        
                    
        )
    }
}
export default Drum
