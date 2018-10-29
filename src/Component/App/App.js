import React, { Component } from "react";
import "../../style.css";
import PageMain from "../PageMain/PageMain";
import PageFooter from "../PageFooter/PageFooter";
import data from "../../data/data.json";
import SaveData from "../StorageComponents/SaveData/SaveData.js";


const TEAM = "team";

class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem(TEAM) === null) {
      SaveData(TEAM, data);
    }
  }

  render() {


    return (
      <>
        <PageMain data={TEAM} />
        <PageFooter />
      </>
    )

  }
}

export default App;
