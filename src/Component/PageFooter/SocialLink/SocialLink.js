import React, { Component } from "react";

class SocialLink extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="social footer__social">
        <h4 className="visually-hidden">Социальные сети</h4>
        <ul className="social__list">
          <li className="social__item">
            <a className="social__link facebook" href="#">
              <span className="visually-hidden"> Фейсбук</span>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link twitter" href="#">
              <span className="visually-hidden">Твиттер</span>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link google" href="#">
              <span className="visually-hidden">Гугл</span>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link linkedin" href="#">
              <span className="visually-hidden">ЛинкедИн</span>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
export default SocialLink;
