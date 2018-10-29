import React, { Component } from "react";
import Slider from "./Slider/Slider";
import getData from "../../StorageComponents/GetData/GetData";

class MyTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Slider team={getData(this.props.team)} />;
  }
}
export default MyTeam;
