import React from "react";

export default function GlassItem ({ glass, onSelectGlass }) {
  return (
    <div className="col-md-3 m-auto">
      <div className="card">
        <img className="card-img-top" src={glass.url} alt="" />
        <div className="card-body">
          <button
            className="btn btn-success"
            onClick={() => onSelectGlass(glass)}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
