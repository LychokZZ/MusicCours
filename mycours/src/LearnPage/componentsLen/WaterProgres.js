import React, { Component } from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/WaterProgress.css";

class WaterProgress extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Progres:   [JSON.parse(localStorage.getItem("TestOne") || true),
                    JSON.parse(localStorage.getItem("TestTwo") || true),
                    JSON.parse(localStorage.getItem("TestThree") || true),
                    JSON.parse(localStorage.getItem("TestFour") || true),
                    JSON.parse(localStorage.getItem("TestFive") || true),
                    JSON.parse(localStorage.getItem("TestSix") || true),],
      };
    }
    calcProgress(){
        const {Progres} = this.state
        let count = 0
        for(let i=0; i<=Progres.length; i++){
            if(Progres[i] === false){
                count++
            }
        }
        return Math.round((count*100)/6)
    }
    render() {
      localStorage.setItem("AllProgress", JSON.stringify(this.calcProgress()))
      const progress  = this.calcProgress()
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progress / 100) * circumference;
  
      return (
        <div className="progress-container">
          <svg viewBox="0 0 100 100" className="progress-circle">
            <circle cx="50" cy="50" r="45" className="circle-bg" />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="progress-fill"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
            <text x="50" y="55" className="progress-text">{progress}%</text>
          </svg>
        </div>
      );
    }
  }
  
  export default WaterProgress;
  