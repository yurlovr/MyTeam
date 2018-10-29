import React, { Component } from "react";

class SliderButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButton: false
    };

    this.activeBtn = this.activeBtn.bind(this);
  }

  render() {
    return (
      <button
        className={
          this.props.active
            ? "btn__null btn__slider btn__slider-current"
            : "btn__null btn__slider"
        }
        onClick={this.activeBtn}
        id={this.props.data}
      />
    );
  }

  activeBtn(event) {
    let target = event.target;
    this.setState(
      {
        activeButton: !this.state.activeButton
      },
      () => this.props.nextSlide(target.id)
    );
  }
}
export default SliderButton;
