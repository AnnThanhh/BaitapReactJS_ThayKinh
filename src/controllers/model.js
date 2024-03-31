import React, { Component } from "react";

export default class Model extends Component {
  render() {
    const { selectedGlass } = this.props;

    return (
      <div
        className="model"
        style={{ backgroundImage: `url('./../images/model.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
      >
        {selectedGlass && (
          <img src={selectedGlass.url} alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        )}
      </div>
    );
  }
}
