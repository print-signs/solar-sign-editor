import React from "react";

function SmartLoader() {
  return (
    <>
      <div id="palleon-main-loader" className="palleon-loader-wrap">
        <div className="palleon-loader-inner">
          <div className="palleon-loader"></div>
        </div>
      </div>
      <div id="palleon-top-bar">
        <div className="palleon-logo">
          <img alt="img1" className="logo-desktop" src="assets/lofo.png" />
          <img alt="img1" className="logo-mobile" src="assets/lofo.png" />
        </div>
        <div className="palleon-top-bar-menu">
          <div className="palleon-undo">
            <button
              id="palleon-undo"
              type="button"
              className="palleon-btn-simple tooltip"
              data-title="Undo"
              autocomplete="off"
              disabled
            >
              <span className="material-icons">undo</span>
            </button>
          </div>
          <div className="palleon-redo">
            <button
              id="palleon-redo"
              type="button"
              className="palleon-btn-simple tooltip"
              data-title="Redo"
              autocomplete="off"
              disabled
            >
              <span className="material-icons">redo</span>
            </button>
          </div>
          <div className="palleon-history">
            <button
              id="palleon-history"
              type="button"
              className="palleon-btn-simple palleon-modal-open tooltip"
              data-title="History"
              autocomplete="off"
              data-target="#modal-history"
              disabled
            >
              <span className="material-icons">history</span>
            </button>
          </div>
          <div className="palleon-new">
            <button
              id="palleon-new"
              type="button"
              className="palleon-btn primary palleon-modal-open"
              autocomplete="off"
              data-target="#modal-add-new"
            >
              <span className="material-icons">add_circle</span>
              <span className="palleon-btn-text">New</span>
            </button>
          </div>
          <div className="palleon-save">
            <button
              id="palleon-save"
              type="button"
              className="palleon-btn primary palleon-modal-open"
              autocomplete="off"
              data-target="#modal-save"
              disabled
            >
              <span className="material-icons">save</span>
              <span className="palleon-btn-text">Save or Download</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartLoader;
