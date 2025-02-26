import React from "react";
import Header from "/Users/ivanlucik/Documents/test/mycours/src/components/Header";
import Center from "/Users/ivanlucik/Documents/test/mycours/src/components/Center";
import Under from "/Users/ivanlucik/Documents/test/mycours/src/components/Under"
import About from "../components/About";
import Price from "../components/Price"

class Home extends React.Component{
    render(){
        return(
        <div className="app"> 
            <Header/>
            <Center/> 
            <div className="baground">
                <div className="centrAbout" >
                    <About />
                </div>
                <div>
                    <Price />
                </div>
                <div className="underapp">
                    <Under/>
                </div>       
            </div>          
                 
        </div>
        )
    }
}


export default Home
