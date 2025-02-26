import React,{useEffect, useState} from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Setting.css"

const User =  JSON.parse(localStorage.getItem("Userauth"))

const clear=()=>{
    localStorage.setItem("ProgresMod1", JSON.stringify(0))
    localStorage.setItem("TestOne", JSON.stringify(true))
    localStorage.setItem("TestTwo", JSON.stringify(true))
    localStorage.setItem("ProgresMod2", JSON.stringify(0))
    localStorage.setItem("TestThree", JSON.stringify(true))
    localStorage.setItem("ProgresMod3", JSON.stringify(0))
    localStorage.setItem("TestFour", JSON.stringify(true))
    localStorage.setItem("ProgresMod4", JSON.stringify(0))
    localStorage.setItem("TestFive", JSON.stringify(true))
    localStorage.setItem("ProgresMod5", JSON.stringify(0))
    localStorage.setItem("ProgresMod6", JSON.stringify(0))
    localStorage.setItem("TestSix", JSON.stringify(true))
}
const logout=()=>{
    window.location.href = "/Home"
    localStorage.setItem("Auth", JSON.stringify(false))
    localStorage.setItem("Userauth", JSON.stringify(''))
}
const getUserByUsername = async (usname) => {
    try {
      const response = await fetch(`http://localhost:5001/auth/users`);
      const users = await response.json();
      return users.find(user => user.username === usname) || null;
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  


function Setting() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        auth: ''
      });
      
      useEffect(() => {
            getUserByUsername(User).then(fetchedUser => {
                if (fetchedUser) {
                    setUser({
                        username: fetchedUser.username,
                        email: fetchedUser.email,
                        auth: fetchedUser.isActivated ? "Так" : "Ні"
                    });
                }
            });
    }, []);
    return(
        <div className="centalCee">
          
            
            <div className="userinfo">
                <div className="butros">
                    <button onClick={()=>logout()} className="buttonSet">Logout</button>
                    <button onClick={()=>window.location.href="/Office"} className="buttonSet">Home</button>
                </div>
                <div className="usiin">
                    <h3>INFO USER:</h3>
                    <h4>Username : {user.username}</h4>
                    <h4>Email : {user.email}</h4>
                    <h4>Активація акаунту: {user.auth}</h4>
                </div>  
                <div className="clear">
                    <h3>Очистити дані акаунта: </h3>
                    <button onClick={()=> clear()} className="buttonSet">Clear</button>
                </div>
            </div>
        </div>
    )

}

export default Setting