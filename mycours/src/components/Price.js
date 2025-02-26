import React from "react";
import "../css/Price.css";
import { Link } from "react-router-dom";

class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContent: this.getLowContent(),
    };
  }

  getLowContent() {
    return (
      <div>
        <h1>Low</h1>
        <h3 className="tuple">Ціна: 1,000 UAH</h3>
        <ul className="ultext">
          <li>Доступ до базового матеріалу курсу.</li>
          <li>Доступ до базового матеріалу курсу.</li>
          <li>Відеоуроки та текстові інструкції.</li>
          <li>Технічна підтримка через e-mail.</li>
          <li>Рекомендовані завдання для самостійного виконання.</li>
        </ul>
      </div>
    );
  }

  getStandartContent() {
    return (
      <div>
        <h1>Standart</h1>
        <h3 className="tuple">Ціна: 3,000 UAH</h3>
        <ul className="ultext">
          <li>Усе, що включено у пакет Low.</li>
          <li>Щотижневі онлайн-заняття з тренером.</li>
          <li>Персональні рекомендації щодо виконання завдань.</li>
          <li>Доступ до чату для обговорень та консультацій.</li>
          <li>Сертифікат про проходження курсу.</li>
        </ul>
      </div>
    );
  }

  getExclusiveContent() {
    return (
      <div>
        <h1>Exclusive</h1>
        <h3 className="tuple">Ціна: 7,000 UAH</h3>
        <ul className="ultext">
          <li>Усе, що включено у пакет Standart.</li>
          <li>Індивідуальні заняття з тренером.</li>
          <li>Перевірка домашніх завдань з розгорнутим фідбеком.</li>
          <li>Доступ до ексклюзивного контенту.</li>
          <li>Персоналізований план навчання під ваші цілі.</li>
        </ul>
      </div>
    );
  }

  handleSelect = (content) => {
    this.setState({ selectedContent: content });
  };

  render() {
    return (
      <div className="main">
        <div className="bordered">
          <div className="rozmet">
            <div className="title">
              <h1>Прайс лист:</h1>
            </div>

            <div className="suup">
              <h4 className="sup">Select plan:</h4>
            </div>

            <div className="selectedcontent">{this.state.selectedContent}</div>

            <div className="rere">
              <Link to="/RegF">
                <button className="zapus">Записатись!</button>
              </Link>
            </div>

            <div className="pram">
              <button
                onClick={() => this.handleSelect(this.getExclusiveContent())}
                className="Pone"
              >
                <h3 className="PRIMERY">EXCLUSIVE</h3>
              </button>
              <button
                onClick={() => this.handleSelect(this.getStandartContent())}
                className="Psec"
              >
                <h3 className="STANDART">STANDART</h3>
              </button>
              <button
                onClick={() => this.handleSelect(this.getLowContent())}
                className="Pthr"
              >
                <h3 className="LOW">LOW</h3>
              </button>
            </div>

            <div className="liner"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Price;
