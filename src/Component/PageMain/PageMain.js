import React, { Component } from "react";
import MyTeam from "./MyTeam/MyTeam";
import AddHero from "./AddHero/AddHero";
import GetData from "../StorageComponents/GetData/GetData";
import SaveData from "../StorageComponents/SaveData/SaveData";

class PageMain extends Component {
  constructor(props) {
    super(props);

    this.allteam = GetData(this.props.data);

    this.state = {
      name: "",
      rang: "",
      file: "",
      addDate: "",
      id: "",
      image: "",
      rend: false
    };

    this.addHero = this.addHero.bind(this);
  }

  render() {
    return (
      <main className="page-main">
        {this.state.rend && <MyTeam team={this.props.data} />}
        {!this.state.rend && <MyTeam team={this.props.data} />}

        <AddHero hero={this.addHero} />
      </main>
    );
  }

  addHero(hero) {
    let newHero = {};
    this.setState(
      {
        ...hero,
        id: +this.allteam.length + 1 + "",
        addDate: new Date().toDateString(),
        image: "./img/Statham.jpg"
      },
      () => {
        newHero = { ...this.state };
        delete newHero.file;
        delete newHero.rend;
        this.allteam.push(newHero);
        SaveData("team", this.allteam);
        this.setState({
          rend: !this.state.rend
        });
      }
    );
  }
}
export default PageMain;
