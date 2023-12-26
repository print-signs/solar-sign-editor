import React from "react";

function ModelHistory() {
  return (
    <>
      <div id="modal-history" class="palleon-modal">
        <div class="palleon-modal-close" data-target="#modal-history">
          <span class="material-icons">close</span>
        </div>
        <div class="palleon-modal-wrap">
          <div class="palleon-modal-inner">
            <div class="palleon-modal-bg">
              <h3 class="palleon-history-title">
                History
                <button
                  id="palleon-clear-history"
                  type="button"
                  class="palleon-btn danger"
                >
                  <span class="material-icons">clear</span>Clear History
                </button>
              </h3>
              <ul
                id="palleon-history-list"
                class="palleon-template-list"
                data-max="50"
              ></ul>
              <p class="palleon-history-count">
                Showing your last
                <span id="palleon-history-count"></span> actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelHistory;
