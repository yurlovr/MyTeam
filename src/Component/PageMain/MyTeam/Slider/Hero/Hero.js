import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="hero">
        <h3 className="visually-hidden">Герой</h3>
        <a className="hero__link" href="#">
          <img
            className="hero__photo"
            src={this.props.data.image}
            alt="Кунг-Фу Панда"
            width={128 + "px"}
            height={127 + "px"}
          />
        </a>
        <p className="hero__name">
          {this.props.data.name}
          <br />
          <span className="hero__name-skill">{this.props.data.rang}</span>
        </p>
        <p className="hero__born">
          Дата вступления в команду:&nbsp;
          <br />
          {this.props.data.addDate}
        </p>
      </article>
    );
  }
}
export default Hero;
