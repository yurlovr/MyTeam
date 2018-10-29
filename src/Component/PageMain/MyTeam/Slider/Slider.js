import React, { Component } from "react";
import Hero from "./Hero/Hero";
import SliderButton from "./SliderButton/SliderButton";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityHero: 0,
      activeButton: 0
    };

    this.quantityButton = Math.ceil(props.team.length / 4);
    this.nextSlide = this.nextSlide.bind(this);
  }

  render() {
    let heroList = [];

    for (
      let i = +this.state.quantityHero;
      i <
      (+this.state.quantityHero + 4 <= this.props.team.length
        ? +this.state.quantityHero + 4
        : this.props.team.length);
      i++
    ) {
      heroList.push(
        <li
          className="slider__item slider__item-current"
          key={this.props.team[i].id}
        >
          <Hero data={this.props.team[i]} />
        </li>
      );
    }

    let buttons = [];

    for (let i = 0; i < this.quantityButton; i++) {
      if (i === +this.state.activeButton) {
        buttons.push(
          <li className="slider__btn-item" key={i}>
            <SliderButton data={i} nextSlide={this.nextSlide} active={true} />
          </li>
        );
      } else {
        buttons.push(
          <li className="slider__btn-item" key={i}>
            <SliderButton data={i} nextSlide={this.nextSlide} active={false} />
          </li>
        );
      }
    }

    return (
      <section className="myteam">
        <h2 className="myteam__header header">
          Моя <span className="myteam__header-super">супер команда</span>
        </h2>
        <section className="myteam__slider slider">
          <h3 className="visually-hidden">Моя команда</h3>
          <ul className="slider__list">{heroList}</ul>
        </section>
        <ul className="slider__btn-list">{buttons}</ul>
      </section>
    );
  }

  nextSlide(value) {
    this.setState({
      quantityHero: value * 4,
      activeButton: value
    });
  }
}
export default Slider;
