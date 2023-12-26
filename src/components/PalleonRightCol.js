import React from "react";

function PalleonRightCol() {
  return (
    <>
      <div id="palleon-right-col">
        <h6 className="palleon-layers-title">
          <span className="material-icons">layers</span>Layers
        </h6>
        <div id="palleon-no-layer">
          No layers found. You can add text, element, image etc. to the canvas
          to create a layer.{" "}
          <a href="#" className="palleon-toggle-right">
            Close Panel
          </a>
        </div>
        <ul id="palleon-layers"></ul>
        <div id="palleon-layer-delete-wrap">
          <select
            id="palleon-layer-select"
            className="palleon-select"
            autocomplete="off"
          >
            <option value="all" selected>
              All Layers
            </option>
            <option value="textbox">Texts</option>
            <option value="image">Images</option>
            <option value="frame">Frames</option>
            <option value="element">Elements</option>
            <option value="circle">Circles</option>
            <option value="ellipse">Ellipses</option>
            <option value="square">Squares</option>
            <option value="rectangle">Rectangles</option>
            <option value="triangle">Triangles</option>
            <option value="trapezoid">Trapezoids</option>
            <option value="pentagon">Pentagons</option>
            <option value="octagon">Octagons</option>
            <option value="emerald">Emeralds</option>
            <option value="star">Stars</option>
          </select>
          <button id="palleon-layer-delete" className="palleon-btn primary">
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PalleonRightCol;
