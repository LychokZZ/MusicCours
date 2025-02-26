import React, { useState, useEffect,useContext } from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mail.css";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from "../../";

const Sends = () => {
  const [userMails, setUserMails] = useState([]);
  const [windMail, setWindMail] = useState(null);
  const {store} = useContext(Context);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("Userauth"));
    if (userData) {
      fetchMails(userData);
    }
  }, []);

  const fetchMails = async (usname) => {
    try {
      const response = await fetch("http://localhost:5001/auth/getletter");
      const mails = await response.json();
      const filteredMails = mails.filter((letter) => letter.From === usname);
      setUserMails(filteredMails);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const openMail = (letter) => {
    setWindMail(
      letter.text ? (
        <div className="openmails">
          <div className="hedrmail">
            <h2 className="namers">Names: {letter.To}</h2>
          </div>
          <div className="Masssse">
            <h3>Message:</h3>
            <p>{letter.text}</p>
          </div>
        </div>
      ) : (
        <div className="openmails">
          <h3>No message</h3>
        </div>
      )
    );
  };

  const currectmail = (message) => {
    return message.length > 40 ? message.slice(0, 40) + "..." : message;
  };

  return (
    <div>
      <div>{windMail}</div>
      {console.log(userMails)}
      <div>
        {userMails.length > 0 ? (
          userMails.map((el, index) => (
            <button key={index} onClick={() => openMail(el)} className="potter">
              <div className="read">
                    <FaTrashAlt className="readAvatar" onClick={()=> {store.delmail(el._id); window.location.href="/Mail"}}/>
                </div>
              <div>
                <h3 className="namers">{el.To}</h3>
                <p>{currectmail(el.text)}</p>
              </div>
              
            </button>
          ))
        ) : (
          <p>Немає листів!</p>
        )}
      </div>
    </div>
  );
};

export default Sends;
