import React from "react";

function ModelSaveStart() {
  return (
    <>
      <div id="modal-save" class="palleon-modal">
        <div class="palleon-modal-close" data-target="#modal-save">
          <span class="material-icons">close</span>
        </div>
        <div class="palleon-modal-wrap">
          <div class="palleon-modal-inner">
            <div class="palleon-tabs">
              <ul class="palleon-tabs-menu">
                {/**    <li class="active" data-target="#modal-tab-save">
                  <span class="material-icons">save</span>Save
                </li> */}
                <li data-target="#modal-tab-download" class="active">
                  <span class="material-icons">download</span>Download
                </li>
              </ul>

              {/**      <div id="modal-tab-save" class="palleon-tab active">
                <div id="palleon-save-as-img">
                  <div class="palleon-block-50">
                    <div>
                      <label>File Name</label>
                      <input
                        id="palleon-save-img-name"
                        class="palleon-form-field palleon-file-name"
                        type="text"
                        value=""
                        autocomplete="off"
                        data-default=""
                      />
                    </div>
                    <button
                      id="palleon-save-img"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">save</span>Save As Image
                    </button>
                  </div>
                  <div class="palleon-block-33">
                    <div>
                      <label>DPI</label>
                      <select
                        id="palleon-save-img-dpi"
                        class="palleon-select"
                        autocomplete="off"
                      >
                        <option selected value="72">
                          72 DPI - Monitor Resolution
                        </option>
                        <option value="96">96 DPI</option>
                        <option value="144">144 DPI</option>
                        <option value="300">
                          300 DPI - Printer Resolution
                        </option>
                      </select>
                    </div>
                    <div>
                      <label>Image Quality</label>
                      <select
                        id="palleon-save-img-quality"
                        class="palleon-select"
                        autocomplete="off"
                      >
                        <option selected value="1">
                          100%
                        </option>
                        <option value="0.9">90%</option>
                        <option value="0.8">80%</option>
                        <option value="0.7">70%</option>
                        <option value="0.6">60%</option>
                        <option value="0.5">50%</option>
                        <option value="0.4">40%</option>
                        <option value="0.3">30%</option>
                        <option value="0.2">20%</option>
                        <option value="0.1">10%</option>
                      </select>
                    </div>
                    <div>
                      <label>File Format</label>
                      <select
                        id="palleon-save-img-format"
                        class="palleon-select"
                        autocomplete="off"
                      >
                        <option selected value="jpeg">
                          JPEG
                        </option>
                        <option value="png">PNG</option>
                        <option value="svg">SVG</option>
                        <option value="webp">WEBP</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div id="palleon-save-as-json">
                  <div class="palleon-block-50">
                    <div>
                      <label>File Name</label>
                      <input
                        id="palleon-json-save-name"
                        class="palleon-form-field palleon-file-name"
                        type="text"
                        value=""
                        autocomplete="off"
                        data-default=""
                      />
                    </div>
                    <button
                      id="palleon-json-save"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">save</span>Save As Template
                    </button>
                  </div>
                </div>
              </div> */}

              <div id="modal-tab-download" class="active palleon-tab">
                <div id="palleon-download-as-img">
                  <div class="palleon-block-50">
                    <div>
                      <label>File Name</label>
                      <input
                        id="palleon-download-name"
                        class="palleon-form-field palleon-file-name"
                        type="text"
                        value=""
                        autocomplete="off"
                        data-default=""
                      />
                    </div>
                    <button
                      id="palleon-download"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">download</span>Download As
                      Image
                    </button>
                  </div>
                  <div class="palleon-block-33">
                    <div>
                      <label>DPI</label>
                      <select
                        id="palleon-download-img-dpi"
                        class="palleon-select"
                        autocomplete="off"
                      >
                        <option selected value="72">
                          72 DPI - Monitor Resolution
                        </option>
                        <option value="96">96 DPI</option>
                        <option value="144">144 DPI</option>
                        <option value="300">
                          300 DPI - Printer Resolution
                        </option>
                      </select>
                    </div>
                    <div>
                      <label>Image Quality</label>
                      <select
                        id="palleon-download-quality"
                        class="palleon-select"
                        autocomplete="off"
                      >
                        <option selected value="1">
                          100%
                        </option>
                        <option value="0.9">90%</option>
                        <option value="0.8">80%</option>
                        <option value="0.7">70%</option>
                        <option value="0.6">60%</option>
                        <option value="0.5">50%</option>
                        <option value="0.4">40%</option>
                        <option value="0.3">30%</option>
                        <option value="0.2">20%</option>
                        <option value="0.1">10%</option>
                      </select>
                    </div>
                    <div>
                      <label>File Format</label>
                      <select
                        id="palleon-download-format"
                        class="palleon-select"
                        autocomplete="off"
                      >
                        <option selected value="jpeg">
                          JPEG
                        </option>
                        <option value="png">PNG</option>
                        <option value="svg">SVG</option>
                        <option value="webp">WEBP</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div id="palleon-download-as-json">
                  <div class="palleon-block-50">
                    <div>
                      <label>File Name</label>
                      <input
                        id="palleon-json-download-name"
                        class="palleon-form-field palleon-file-name"
                        type="text"
                        value=""
                        autocomplete="off"
                        data-default=""
                      />
                    </div>
                    <button
                      id="palleon-json-download"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">download</span>Download As
                      Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelSaveStart;
