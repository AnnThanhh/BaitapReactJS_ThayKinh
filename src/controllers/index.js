import React, { Component } from "react";
import data from "./dataGlasses.json";
import GlassItem from "./glassItem";
import Model from "./model";

export default class ChangeGlass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGlass: data,
      selectedGlass: null,
    };
  }

  handleSelectGlass = (selectedGlass) => {
    this.setState({ selectedGlass });
  };

  renderListGlass = () => {
    return this.state.listGlass.map((item) => {
      return (
        <GlassItem
          key={item.id}
          glass={item}
          onSelectGlass={this.handleSelectGlass}
        />
      );
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2>List Glasses</h2>
          <Model selectedGlass={this.state.selectedGlass} />
          <div className="row mb-4">{this.renderListGlass()}</div>
        </div>
      </>
    );
  }
}
