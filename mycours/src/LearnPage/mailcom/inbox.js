import React, { useState, useEffect,useContext } from "react";
import "/Users/ivanlucik/Documents/test/mycours/src/css/Mail.css";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from "../../";

const Inbox = () => {
  const [userMails, setUserMails] = useState([]);
  const [windMail, setWindMail] = useState(null);
  const {store} = useContext(Context);
  const To = JSON.parse(localStorage.getItem("Userauth"));

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await fetch("http://localhost:5001/auth/getletter");
        const mails = await response.json();
        const filteredMails = mails.filter((letter) => letter.To === To);
        setUserMails(filteredMails);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchMails();
  }, [To]);

  const currectmail = (message) => {
    return message.length > 40 ? message.slice(0, 40) + "..." : message;
  };

  const openMail = (letter) => {
    setWindMail(
      <div className="openmails">
        <div className="hedrmail">
          <h2 className="namers">Names: {letter.From}</h2>
        </div>
        <div className="Masssse">
          <h3>Message:</h3>
          <p>{letter.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{windMail}</div>
      <div>
        {userMails.length > 0 ? (
          userMails.map((letter, index) => (
            <div key={index}>
              <button
                onClick={() => openMail(letter, index)}
                className="potter"
              >
                <div className="read">
                    <FaTrashAlt className="readAvatar" onClick={()=> {store.delmail(letter._id); window.location.href="/Mail"}}/>
                </div>
                <div>
                  <h3 className="namers">{letter.From}</h3>
                  <p>{currectmail(letter.text)}</p>
                </div>
              </button>
            </div>
          ))
        ) : (
          <p>Немає листів!</p>
        )}
      </div>
    </div>
  );
};

export default Inbox;
