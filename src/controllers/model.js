import React, { Component } from "react";

export default class Model extends Component {
  render() {
    const { selectedGlass } = this.props;

    return (
      <div className="col-md-3">
        <div
          className="card"
          style={{
            backgroundImage: `url('./../images/model.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {selectedGlass && <img src={selectedGlass.url} alt="" />}
          <div className="card-body">
            <h4 className="card-title">{selectedGlass.name}</h4>
            <p className="card-text">{selectedGlass.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
