import React, { Component } from "react";
import DropZone from "./DropZone/DropZone";

class AddHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      rang: "",
      file: ""
    };

    this.updateValue = this.updateValue.bind(this);
    this.AddHeroData = this.AddHeroData.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.newHero = this.newHero.bind(this);
  }

  render() {
    return (
      <section className="addhero">
        <h2 className="header addhero__header">
          Добавь своего <span className="addhero__header-hero"> героя</span>
        </h2>
        <form className="addhero__form registration">
          <label
            className="registration__label registration__label-name"
            htmlFor="name"
          >
            {" "}
            Имя
            <sup className="registration__label-index">*</sup>
          </label>
          <label
            className="registration__label registration__label-rang"
            htmlFor="rang"
          >
            {" "}
            Титул
            <sup className="registration__label-index">*</sup>
          </label>
          <input
            className="registration__input"
            type="text"
            id="name"
            placeholder="Имя"
            value={this.state.name}
            onChange={this.updateValue}
            required
          />
          <input
            className="registration__input"
            type="text"
            id="rang"
            placeholder="Титул"
            value={this.state.rang}
            onChange={this.updateValue}
            required
          />
          <DropZone data={this.uploadFile} />

          <button
            className="btn__null registration__btn"
            type="button"
            onClick={this.AddHeroData}
          >
            Принять
          </button>
        </form>
      </section>
    );
  }

  updateValue(e) {
    let targetId = e.target.id;
    let target = e.target.value;

    this.setState({
      ...this.state,
      [targetId]: target
    });
  }

  uploadFile(file) {
    this.setState({
      file: file
    });
  }

  newHero() {}

  AddHeroData() {
    let url = "../../../../../public/image";

    let formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("rang", this.state.rang);
    formData.append("file", this.state.file);
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(() => {
        alert("OK");
      })
      .catch(() => {
        alert("No Ok");
      });

    let hero = {
      ...this.state
    };
    this.props.hero(hero);

    this.setState({
      name: "",
      rang: "",
      file: ""
    });
  }
}
export default AddHero;
