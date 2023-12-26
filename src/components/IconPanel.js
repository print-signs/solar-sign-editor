import React from "react";

function IconPanel() {
  return (
    <>
      <div id="palleon-icon-panel">
        <div id="palleon-icon-panel-inner">
          <div id="palleon-adjust" className="palleon-icon-panel-content">
            <ul className="palleon-accordion">
              <li className="accordion-crop hide-on-canvas-mode">
                <a href="#">
                  <span className="material-icons accordion-icon">crop</span>
                  Crop
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap label-block">
                    <div className="palleon-control">
                      <select
                        id="palleon-crop-style"
                        className="palleon-select palleon-select2"
                        autocomplete="off"
                      >
                        <option value="">Please select</option>
                        <option value="freeform" data-icon="crop_free">
                          Freeform
                        </option>
                        <option value="custom" data-icon="crop">
                          Custom
                        </option>
                        <option value="square" data-icon="crop_square">
                          Square
                        </option>
                        <option value="original" data-icon="crop_original">
                          Original Ratio
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="palleon-control-wrap palleon-resize-wrap crop-custom">
                    <input
                      id="palleon-crop-width"
                      className="palleon-form-field"
                      type="number"
                      value=""
                      data-max=""
                      autocomplete="off"
                    />
                    <span className="material-icons">clear</span>
                    <input
                      id="palleon-crop-height"
                      className="palleon-form-field"
                      type="number"
                      value=""
                      data-max=""
                      autocomplete="off"
                    />
                    <button
                      id="palleon-crop-lock"
                      type="button"
                      className="palleon-btn palleon-lock-unlock hide-on-canvas-mode active"
                    >
                      <span className="material-icons">lock</span>
                    </button>
                  </div>
                  <div
                    id="palleon-crop-btns"
                    className="palleon-control-wrap palleon-submit-btns disabled"
                  >
                    <button
                      id="palleon-crop-apply"
                      type="button"
                      className="palleon-btn primary"
                    >
                      Apply
                    </button>
                    <button
                      id="palleon-crop-cancel"
                      type="button"
                      className="palleon-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">refresh</span>
                  Rotate
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap label-block">
                    <div className="palleon-control">
                      <div className="palleon-btn-group icon-group">
                        <button
                          id="palleon-rotate-right"
                          type="button"
                          className="palleon-btn tooltip"
                          data-title="Rotate Right"
                        >
                          <span className="material-icons">rotate_right</span>
                        </button>
                        <button
                          id="palleon-rotate-left"
                          type="button"
                          className="palleon-btn tooltip"
                          data-title="Rotate Left"
                        >
                          <span className="material-icons">rotate_left</span>
                        </button>
                        <button
                          id="palleon-flip-horizontal"
                          type="button"
                          className="palleon-btn tooltip"
                          data-title="Flip X"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          id="palleon-flip-vertical"
                          type="button"
                          className="palleon-btn tooltip"
                          data-title="Flip Y"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">
                    aspect_ratio
                  </span>
                  Resize
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-resize-wrap">
                    <input
                      id="palleon-resize-width"
                      className="palleon-form-field"
                      type="number"
                      value=""
                      data-size=""
                      autocomplete="off"
                    />
                    <span className="material-icons">clear</span>
                    <input
                      id="palleon-resize-height"
                      className="palleon-form-field"
                      type="number"
                      value=""
                      data-size=""
                      autocomplete="off"
                    />
                    <button
                      id="palleon-resize-lock"
                      type="button"
                      className="palleon-btn palleon-lock-unlock active"
                    >
                      <span className="material-icons">lock</span>
                    </button>
                  </div>
                  <button
                    id="palleon-resize-apply"
                    type="button"
                    className="palleon-btn btn-full primary"
                  >
                    Apply
                  </button>
                </div>
              </li>
            </ul>
            <hr className="hide-on-canvas-mode" />
            <ul className="palleon-accordion hide-on-canvas-mode">
              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">
                    auto_fix_high
                  </span>
                  Quick Filters
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div id="palleon-filters" className="palleon-grid two-column">
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="grayscale"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="grayscale">
                        <img
                          className="lazy"
                          data-src="assets/filters/grayscale.png"
                        />
                        <span>Grayscale</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="sepia"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="sepia">
                        <img
                          className="lazy"
                          data-src="assets/filters/sepia.png"
                        />
                        <span>Sepia</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="blackwhite"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="blackwhite">
                        <img
                          className="lazy"
                          data-src="assets/filters/blackwhite.png"
                        />
                        <span>Black/White</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="brownie"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="brownie">
                        <img
                          className="lazy"
                          data-src="assets/filters/brownie.png"
                        />
                        <span>Brownie</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="vintage"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="vintage">
                        <img
                          className="lazy"
                          data-src="assets/filters/vintage.png"
                        />
                        <span>Vintage</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="kodachrome"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="kodachrome">
                        <img
                          className="lazy"
                          data-src="assets/filters/kodachrome.png"
                        />
                        <span>Kodachrome</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="technicolor"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="technicolor">
                        <img
                          className="lazy"
                          data-src="assets/filters/technicolor.png"
                        />
                        <span>Technicolor</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="polaroid"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="polaroid">
                        <img
                          className="lazy"
                          data-src="assets/filters/polaroid.png"
                        />
                        <span>Polaroid</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="shift"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="shift">
                        <img
                          className="lazy"
                          data-src="assets/filters/shift.png"
                        />
                        <span>Shift</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="invert"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="invert">
                        <img
                          className="lazy"
                          data-src="assets/filters/invert.png"
                        />
                        <span>Invert</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="sharpen"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="sharpen">
                        <img
                          className="lazy"
                          data-src="assets/filters/sharpen.png"
                        />
                        <span>Sharpen</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="emboss"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="emboss">
                        <img
                          className="lazy"
                          data-src="assets/filters/emboss.png"
                        />
                        <span>Emboss</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="sobelX"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="sobelX">
                        <img
                          className="lazy"
                          data-src="assets/filters/sobelX.png"
                        />
                        <span>SobelX</span>
                      </label>
                    </div>
                    <div
                      className="grid-item"
                      data-keyword="Blog Banner - 2240x1260px"
                      data-category="blog-banners"
                    >
                      <input
                        type="checkbox"
                        name="palleon-filter"
                        id="sobelY"
                        autocomplete="off"
                        className="input-hidden"
                      />
                      <label for="sobelY">
                        <img
                          className="lazy"
                          data-src="assets/filters/sobelY.png"
                        />
                        <span>SobelY</span>
                      </label>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">tune</span>
                  Basic Adjust
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Brightness
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-brightness"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-brightness-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-brightness-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Brightness<span>0</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="brightness"
                          type="range"
                          min="-1"
                          max="1"
                          value="0"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Contrast
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-contrast"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-contrast-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-contrast-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Contrast<span>0</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="contrast"
                          type="range"
                          min="-1"
                          max="1"
                          value="0"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Saturation
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-saturation"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-saturation-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-saturation-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Saturation<span>0</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="saturation"
                          type="range"
                          min="-1"
                          max="1"
                          value="0"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">Adjust Hue</label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-hue"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-hue-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-hue-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Hue<span>0</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="hue"
                          type="range"
                          min="-2"
                          max="2"
                          value="0"
                          step="0.02"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">
                    wb_sunny
                  </span>
                  Gamma
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Gamma
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-gamma"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-gamma-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-gamma-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Red<span>1</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="gamma-red"
                          type="range"
                          min="0.2"
                          max="2.2"
                          value="1"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Green<span>1</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="gamma-green"
                          type="range"
                          min="0.2"
                          max="2.2"
                          value="1"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Blue<span>1</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="gamma-blue"
                          type="range"
                          min="0.2"
                          max="2.2"
                          value="1"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">palette</span>
                  Blend Color
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">Blend Color</label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-blend-color"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-blend-color-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-blend-color-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">Mode</label>
                      <div className="palleon-control">
                        <select
                          id="blend-color-mode"
                          className="palleon-select"
                          autocomplete="off"
                        >
                          <option selected value="add">
                            Add
                          </option>
                          <option value="diff">Diff</option>
                          <option value="subtract">Subtract</option>
                          <option value="multiply">Multiply</option>
                          <option value="screen">Screen</option>
                          <option value="lighten">Lighten</option>
                          <option value="darken">Darken</option>
                          <option value="overlay">Overlay</option>
                          <option value="exclusion">Exclusion</option>
                          <option value="tint">Tint</option>
                        </select>
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">Color</label>
                      <div className="palleon-control">
                        <input
                          id="blend-color-color"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#ffffff"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Alpha<span>0.5</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="blend-color-alpha"
                          type="range"
                          min="0"
                          max="1"
                          value="0.5"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">
                    swap_horiz
                  </span>
                  Duotone Effect
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Duotone
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-duotone-color"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-duotone-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-duotone-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">
                        Light Color
                      </label>
                      <div className="palleon-control">
                        <input
                          id="duotone-light-color"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="green"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">
                        Dark Color
                      </label>
                      <div className="palleon-control">
                        <input
                          id="duotone-dark-color"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="blue"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">
                    swap_horiz
                  </span>
                  Swap Colors
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">Swap Colors</label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-swap-colors"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-swap-colors-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-swap-colors-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap control-text-color">
                      <label className="palleon-control-label">Source</label>
                      <div className="palleon-control">
                        <input
                          id="color-source"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#ffffff"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap control-text-color">
                      <label className="palleon-control-label">
                        Destination
                      </label>
                      <div className="palleon-control">
                        <input
                          id="color-destination"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#000000"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap label-block">
                      <div className="palleon-control">
                        <div className="palleon-btn-set">
                          <button
                            id="palleon-swap-apply"
                            type="button"
                            className="palleon-btn primary"
                          >
                            Apply
                          </button>
                          <button
                            id="palleon-swap-remove"
                            type="button"
                            className="palleon-btn"
                            autocomplete="off"
                            disabled
                          >
                            <span className="material-icons">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#">
                  <span className="material-icons accordion-icon">tune</span>
                  Advanced Edits
                  <span className="material-icons arrow">
                    keyboard_arrow_down
                  </span>
                </a>
                <div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">Adjust Blur</label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-blur"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-blur-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-blur-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Blur<span>0</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="blur"
                          type="range"
                          min="0"
                          max="1"
                          value="0"
                          step="0.01"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Noise
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-noise"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-noise-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-noise-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Noise<span>0</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="noise"
                          type="range"
                          min="0"
                          max="1000"
                          value="0"
                          step="1"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">
                      Adjust Pixelate
                    </label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-pixelate"
                          className="palleon-toggle-checkbox"
                          data-conditional="#palleon-pixelate-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="palleon-pixelate-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap label-block">
                      <label className="palleon-control-label slider-label">
                        Pixelate<span>1</span>
                      </label>
                      <div className="palleon-control">
                        <input
                          id="pixelate"
                          type="range"
                          min="1"
                          max="20"
                          value="1"
                          step="1"
                          className="palleon-slider"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            id="palleon-frames"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-tabs">
              <ul className="palleon-tabs-menu">
                <li className="active" data-target="#palleon-all-frames">
                  All
                </li>
                <li data-target="#palleon-frame-favorites">My Favorites</li>
                <li data-target="#palleon-frame-options">Settings</li>
              </ul>

              <div id="palleon-all-frames" className="palleon-tab active">
                <div className="palleon-search-wrap">
                  <input
                    id="palleon-frame-search"
                    type="search"
                    className="palleon-form-field"
                    placeholder="Search Category..."
                    autocomplete="off"
                  />
                  <span
                    id="palleon-frame-search-icon"
                    className="material-icons"
                  >
                    search
                  </span>
                </div>
                <ul id="palleon-frames-wrap" className="palleon-accordion">
                  <li data-keyword="grunge">
                    <a href="#">
                      Grunge<span className="data-count">12</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-grunge"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star favorited"
                              data-frameid="grunge/2"
                            >
                              <span className="material-icons">star</span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/6.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/6.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/7.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/7.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/8.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/8.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/9.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/9.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/10.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/10.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/11.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/11.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge/12.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge/12.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="grunge-square">
                    <a href="#">
                      Grunge - Square<span className="data-count">6</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-grunge-square"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge-square/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge-square/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge-square/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge-square/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge-square/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge-square/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge-square/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge-square/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge-square/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge-square/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge-square/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge-square/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge-square/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge-square/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge-square/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/grunge-square/6.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/grunge-square/6.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="grunge-square/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="business">
                    <a href="#">
                      Business<span className="data-count">8</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-business"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/6.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/6.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/7.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/7.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/business/8.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/business/8.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="business/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="bohemian">
                    <a href="#">
                      Bohemian<span className="data-count">10</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-bohemian"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star favorited"
                              data-frameid="bohemian/1"
                            >
                              <span className="material-icons">star</span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/6.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/6.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/7.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/7.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/8.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/8.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/9.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/9.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/bohemian/10.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/bohemian/10.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="bohemian/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="abstract">
                    <a href="#">
                      Abstract<span className="data-count">6</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-abstract"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/abstract/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/abstract/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star favorited"
                              data-frameid="abstract/1"
                            >
                              <span className="material-icons">star</span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/abstract/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/abstract/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="abstract/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/abstract/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/abstract/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="abstract/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/abstract/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/abstract/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="abstract/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/abstract/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/abstract/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="abstract/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/abstract/6.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/abstract/6.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="abstract/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="floral">
                    <a href="#">
                      Floral<span className="data-count">5</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-floral"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/floral/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/floral/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="floral/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/floral/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/floral/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="floral/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/floral/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/floral/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="floral/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/floral/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/floral/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="floral/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/floral/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/floral/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="floral/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="neon">
                    <a href="#">
                      Neon<span className="data-count">4</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-neon"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/neon/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/neon/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="neon/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/neon/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/neon/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="neon/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/neon/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/neon/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="neon/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/neon/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/neon/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="neon/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="winter">
                    <a href="#">
                      Winter<span className="data-count">3</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-winter"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/winter/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/winter/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="winter/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/winter/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/winter/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="winter/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/winter/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/winter/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="winter/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="halloween">
                    <a href="#">
                      Halloween<span className="data-count">2</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-halloween"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/halloween/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/halloween/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="halloween/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/halloween/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/halloween/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="halloween/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="cute">
                    <a href="#">
                      Cute<span className="data-count">7</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-cute"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/4.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/4.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/5.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/5.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/6.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/6.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/cute/7.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/cute/7.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="cute/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="watercolor">
                    <a href="#">
                      Watercolor<span className="data-count">3</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-watercolor"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/watercolor/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/watercolor/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="watercolor/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/watercolor/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/watercolor/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="watercolor/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/watercolor/3.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/watercolor/3.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="watercolor/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="love">
                    <a href="#">
                      Love<span className="data-count">2</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-love"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/love/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/love/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="love/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/love/2.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/love/2.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="love/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="others">
                    <a href="#">
                      Others<span className="data-count">1</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-frames-grid-others"
                        className="palleon-frames-grid paginated"
                        data-perpage="4"
                      >
                        <div
                          className="palleon-frame"
                          data-elsource="files/frames/others/1.svg"
                        >
                          <div className="palleon-img-wrap">
                            <div className="palleon-img-loader"></div>
                            <img
                              className="lazy"
                              data-src="files/frames/others/1.jpg"
                            />
                          </div>
                          <div className="frame-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-frameid="others/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div id="palleon-frame-favorites" className="palleon-tab">
                <div className="palleon-frames-grid">
                  <div
                    className="palleon-frame"
                    data-elsource="files/frames/abstract/1.svg"
                  >
                    <div className="palleon-img-wrap">
                      <div className="palleon-img-loader"></div>
                      <img
                        className="lazy"
                        data-src="files/frames/abstract/1.jpg"
                      />
                    </div>
                    <div className="frame-favorite">
                      <button
                        type="button"
                        className="palleon-btn-simple star favorited"
                        data-frameid="abstract/1"
                      >
                        <span className="material-icons">star</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="palleon-frame"
                    data-elsource="files/frames/bohemian/1.svg"
                  >
                    <div className="palleon-img-wrap">
                      <div className="palleon-img-loader"></div>
                      <img
                        className="lazy"
                        data-src="files/frames/bohemian/1.jpg"
                      />
                    </div>
                    <div className="frame-favorite">
                      <button
                        type="button"
                        className="palleon-btn-simple star favorited"
                        data-frameid="bohemian/1"
                      >
                        <span className="material-icons">star</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="palleon-frame"
                    data-elsource="files/frames/grunge/2.svg"
                  >
                    <div className="palleon-img-wrap">
                      <div className="palleon-img-loader"></div>
                      <img
                        className="lazy"
                        data-src="files/frames/grunge/2.jpg"
                      />
                    </div>
                    <div className="frame-favorite">
                      <button
                        type="button"
                        className="palleon-btn-simple star favorited"
                        data-frameid="grunge/2"
                      >
                        <span className="material-icons">star</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="palleon-frame-options" className="palleon-tab">
                <div className="palleon-control-wrap label-block">
                  <div className="palleon-control">
                    <div className="palleon-btn-group icon-group">
                      <button
                        id="palleon-rotate-right-frame"
                        type="button"
                        className="palleon-btn tooltip"
                        data-title="Rotate Right"
                      >
                        <span className="material-icons">rotate_right</span>
                      </button>
                      <button
                        id="palleon-rotate-left-frame"
                        type="button"
                        className="palleon-btn tooltip"
                        data-title="Rotate Left"
                      >
                        <span className="material-icons">rotate_left</span>
                      </button>
                      <button
                        id="palleon-flip-horizontal-frame"
                        type="button"
                        className="palleon-btn tooltip"
                        data-title="Flip X"
                      >
                        <span className="material-icons">flip</span>
                      </button>
                      <button
                        id="palleon-flip-vertical-frame"
                        type="button"
                        className="palleon-btn tooltip"
                        data-title="Flip Y"
                      >
                        <span className="material-icons">flip</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label">Fill Color</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-frame-color"
                      type="text"
                      className="palleon-colorpicker allow-empty"
                      autocomplete="off"
                      value=""
                    />
                    <div className="palleon-control-desc">
                      May not work properly on multi-color frames.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="palleon-noframes" className="notice notice-warning">
              Nothing found.
            </div>
          </div>

          <div
            id="palleon-text"
            className="palleon-icon-panel-content panel-hide"
          >
            <button
              id="palleon-add-text"
              type="button"
              className="palleon-btn primary palleon-lg-btn btn-full"
            >
              <span className="material-icons">add_circle</span>Add Text
            </button>

            <div id="palleon-text-settings" className="palleon-sub-settings">
              <div className="palleon-text-wrap">
                <div className="palleon-control-wrap label-block">
                  <div className="palleon-control">
                    <div
                      id="palleon-text-format-btns"
                      className="palleon-btn-group icon-group"
                    >
                      <button
                        id="format-uppercase"
                        type="button"
                        className="palleon-btn"
                      >
                        <span className="material-icons">text_fields</span>
                      </button>
                      <button
                        id="format-bold"
                        type="button"
                        className="palleon-btn"
                      >
                        <span className="material-icons">format_bold</span>
                      </button>
                      <button
                        id="format-italic"
                        type="button"
                        className="palleon-btn"
                      >
                        <span className="material-icons">format_italic</span>
                      </button>
                      <button
                        id="format-underlined"
                        type="button"
                        className="palleon-btn"
                      >
                        <span className="material-icons">
                          format_underlined
                        </span>
                      </button>
                      <button
                        id="format-align-left"
                        type="button"
                        className="palleon-btn format-align"
                      >
                        <span className="material-icons">
                          format_align_left
                        </span>
                      </button>
                      <button
                        id="format-align-center"
                        type="button"
                        className="palleon-btn format-align"
                      >
                        <span className="material-icons">
                          format_align_center
                        </span>
                      </button>
                      <button
                        id="format-align-right"
                        type="button"
                        className="palleon-btn format-align"
                      >
                        <span className="material-icons">
                          format_align_right
                        </span>
                      </button>
                      <button
                        id="format-align-justify"
                        type="button"
                        className="palleon-btn format-align"
                      >
                        <span className="material-icons">
                          format_align_justify
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <div className="palleon-control">
                    <textarea
                      id="palleon-text-input"
                      className="palleon-form-field"
                      rows="2"
                      autocomplete="off"
                    >
                      Enter Your Text Here
                    </textarea>
                  </div>
                </div>
                <hr />
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label">Font Family</label>
                  <div className="palleon-control">
                    <select
                      id="palleon-font-family"
                      className="palleon-select palleon-select2"
                      autocomplete="off"
                      data-loadFont="yes"
                    >
                      <optgroup
                        id="websafe-fonts"
                        label="Default Fonts"
                      ></optgroup>
                      <optgroup
                        id="google-fonts"
                        label="Google Fonts"
                      ></optgroup>
                    </select>
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Font Size</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-font-size"
                      className="palleon-form-field"
                      type="number"
                      value="60"
                      data-min="1"
                      data-max="1000"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Line Height</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-line-height"
                      className="palleon-form-field"
                      type="number"
                      value="1.2"
                      data-min="0.1"
                      data-max="10"
                      step="0.1"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">
                    Letter Spacing
                  </label>
                  <div className="palleon-control">
                    <input
                      id="palleon-letter-spacing"
                      className="palleon-form-field"
                      type="number"
                      value="0"
                      data-max="1000"
                      step="100"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Fill Style</label>
                  <div className="palleon-control">
                    <select
                      id="palleon-text-gradient"
                      className="palleon-select"
                      autocomplete="off"
                    >
                      <option value="none" selected>
                        Solid Color
                      </option>
                      <option value="vertical">Vertical Gradient</option>
                      <option value="horizontal">Horizontal Gradient</option>
                    </select>
                  </div>
                </div>
                <div id="text-gradient-settings">
                  <div className="palleon-control-wrap control-text-color">
                    <label className="palleon-control-label">Color 1</label>
                    <div className="palleon-control">
                      <input
                        id="text-gradient-color-1"
                        type="text"
                        className="palleon-colorpicker disallow-empty"
                        autocomplete="off"
                        value="#9C27B0"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap control-text-color">
                    <label className="palleon-control-label">Color 2</label>
                    <div className="palleon-control">
                      <input
                        id="text-gradient-color-2"
                        type="text"
                        className="palleon-colorpicker disallow-empty"
                        autocomplete="off"
                        value="#000000"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap control-text-color">
                    <label className="palleon-control-label">Color 3</label>
                    <div className="palleon-control">
                      <input
                        id="text-gradient-color-3"
                        type="text"
                        className="palleon-colorpicker allow-empty"
                        autocomplete="off"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap control-text-color">
                    <label className="palleon-control-label">Color 4</label>
                    <div className="palleon-control">
                      <input
                        id="text-gradient-color-4"
                        type="text"
                        className="palleon-colorpicker allow-empty"
                        autocomplete="off"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div id="text-fill-color" className="palleon-control-wrap">
                  <label className="palleon-control-label">Color</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-text-color"
                      type="text"
                      className="palleon-colorpicker disallow-empty"
                      autocomplete="off"
                      value="#000"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Outline Size</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-outline-size"
                      className="palleon-form-field"
                      type="number"
                      value="0"
                      data-min="0"
                      data-max="100"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Outline Color</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-outline-color"
                      type="text"
                      className="palleon-colorpicker disallow-empty"
                      autocomplete="off"
                      value="#fff"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Background</label>
                  <div className="palleon-control">
                    <input
                      id="palleon-text-background"
                      type="text"
                      className="palleon-colorpicker allow-empty"
                      autocomplete="off"
                      value=""
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap conditional">
                  <label className="palleon-control-label">Text Shadow</label>
                  <div className="palleon-control palleon-toggle-control">
                    <label className="palleon-toggle">
                      <input
                        id="palleon-text-shadow"
                        className="palleon-toggle-checkbox"
                        data-conditional="#text-shadow-settings"
                        type="checkbox"
                        autocomplete="off"
                      />
                      <div className="palleon-toggle-switch"></div>
                    </label>
                  </div>
                </div>
                <div
                  id="text-shadow-settings"
                  className="d-none conditional-settings"
                >
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">
                      Shadow Color
                    </label>
                    <div className="palleon-control">
                      <input
                        id="text-shadow-color"
                        type="text"
                        className="palleon-colorpicker disallow-empty"
                        autocomplete="off"
                        value="#000"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Shadow Blur</label>
                    <div className="palleon-control">
                      <input
                        id="text-shadow-blur"
                        className="palleon-form-field"
                        type="number"
                        value="5"
                        data-min="0"
                        data-max="1000"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Offset X</label>
                    <div className="palleon-control">
                      <input
                        id="text-shadow-offset-x"
                        className="palleon-form-field"
                        type="number"
                        value="5"
                        data-min="0"
                        data-max="1000"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Offset Y</label>
                    <div className="palleon-control">
                      <input
                        id="text-shadow-offset-y"
                        className="palleon-form-field"
                        type="number"
                        value="5"
                        data-min="0"
                        data-max="1000"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="palleon-control-wrap label-block">
                  <div className="palleon-control">
                    <div
                      id="palleon-text-flip-btns"
                      className="palleon-btn-group icon-group"
                    >
                      <button
                        id="text-flip-x"
                        type="button"
                        className="palleon-btn tooltip tooltip-top"
                        data-title="Flip X"
                      >
                        <span className="material-icons">flip</span>
                      </button>
                      <button
                        id="text-flip-y"
                        type="button"
                        className="palleon-btn tooltip tooltip-top"
                        data-title="Flip Y"
                      >
                        <span className="material-icons">flip</span>
                      </button>
                      <button
                        type="button"
                        className="palleon-horizontal-center palleon-btn tooltip tooltip-top"
                        data-title="H-Align Center"
                      >
                        <span className="material-icons">
                          align_horizontal_center
                        </span>
                      </button>
                      <button
                        type="button"
                        className="palleon-vertical-center palleon-btn tooltip tooltip-top"
                        data-title="V-Align Center"
                      >
                        <span className="material-icons">
                          vertical_align_center
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label slider-label">
                    Opacity<span>1</span>
                  </label>
                  <div className="palleon-control">
                    <input
                      id="text-opacity"
                      type="range"
                      min="0"
                      max="1"
                      value="1"
                      step="0.1"
                      className="palleon-slider"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label slider-label">
                    Skew X<span>0</span>
                  </label>
                  <div className="palleon-control">
                    <input
                      id="text-skew-x"
                      type="range"
                      min="0"
                      max="180"
                      value="0"
                      step="1"
                      className="palleon-slider"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label slider-label">
                    Skew Y<span>0</span>
                  </label>
                  <div className="palleon-control">
                    <input
                      id="text-skew-y"
                      type="range"
                      min="0"
                      max="180"
                      value="0"
                      step="1"
                      className="palleon-slider"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label slider-label">
                    Rotate<span>0</span>
                  </label>
                  <div className="palleon-control">
                    <input
                      id="text-rotate"
                      type="range"
                      min="0"
                      max="360"
                      value="0"
                      step="1"
                      className="palleon-slider"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="palleon-image"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-tabs">
              <ul className="palleon-tabs-menu">
                <li
                  id="palleon-img-mode"
                  className="active"
                  data-target="#palleon-image-mode"
                >
                  Image
                </li>
                <li data-target="#palleon-overlay-image-mode">Overlay Image</li>
              </ul>
              <div id="palleon-image-mode" className="palleon-tab active">
                <div className="palleon-file-field">
                  <input
                    type="file"
                    name="palleon-file"
                    id="palleon-img-upload"
                    className="palleon-hidden-file"
                    accept="image/png, image/jpeg, image/webp"
                  />
                  <label
                    for="palleon-img-upload"
                    className="palleon-btn primary palleon-lg-btn btn-full"
                  >
                    <span className="material-icons">upload</span>
                    <span>Upload from computer</span>
                  </label>
                </div>

                <button
                  id="palleon-img-media-library"
                  type="button"
                  className="palleon-btn primary palleon-lg-btn btn-full palleon-modal-open"
                  data-target="#modal-media-library"
                >
                  <span className="material-icons">photo_library</span>Select
                  From Media Library
                </button>

                <div
                  id="palleon-image-settings"
                  className="palleon-sub-settings"
                >
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">
                      Border Width
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-border-width"
                        className="palleon-form-field"
                        type="number"
                        value="0"
                        data-min="0"
                        data-max="1000"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">
                      Border Color
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-border-color"
                        type="text"
                        className="palleon-colorpicker disallow-empty"
                        autocomplete="off"
                        value="#ffffff"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Rounded Corners<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-border-radius"
                        type="range"
                        min="0"
                        max="1000"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">Shadow</label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-image-shadow"
                          className="palleon-toggle-checkbox"
                          data-conditional="#image-shadow-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="image-shadow-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">
                        Shadow Color
                      </label>
                      <div className="palleon-control">
                        <input
                          id="image-shadow-color"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#000"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">
                        Shadow Blur
                      </label>
                      <div className="palleon-control">
                        <input
                          id="image-shadow-blur"
                          className="palleon-form-field"
                          type="number"
                          value="5"
                          step="1"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">Offset X</label>
                      <div className="palleon-control">
                        <input
                          id="image-shadow-offset-x"
                          className="palleon-form-field"
                          type="number"
                          value="5"
                          step="1"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">Offset Y</label>
                      <div className="palleon-control">
                        <input
                          id="image-shadow-offset-y"
                          className="palleon-form-field"
                          type="number"
                          value="5"
                          step="1"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="palleon-control-wrap label-block">
                    <div className="palleon-control">
                      <div className="palleon-btn-group icon-group">
                        <button
                          id="img-flip-horizontal"
                          type="button"
                          className="palleon-btn tooltip tooltip-top"
                          data-title="Flip X"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          id="img-flip-vertical"
                          type="button"
                          className="palleon-btn tooltip tooltip-top"
                          data-title="Flip Y"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          type="button"
                          className="palleon-horizontal-center palleon-btn tooltip tooltip-top"
                          data-title="H-Align Center"
                        >
                          <span className="material-icons">
                            align_horizontal_center
                          </span>
                        </button>
                        <button
                          type="button"
                          className="palleon-vertical-center palleon-btn tooltip tooltip-top"
                          data-title="V-Align Center"
                        >
                          <span className="material-icons">
                            vertical_align_center
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Opacity<span>1</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-opacity"
                        type="range"
                        min="0"
                        max="1"
                        value="1"
                        step="0.1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Skew X<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-skew-x"
                        type="range"
                        min="0"
                        max="180"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Skew Y<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-skew-y"
                        type="range"
                        min="0"
                        max="180"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Rotate<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="img-rotate"
                        type="range"
                        min="0"
                        max="360"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <hr />
                  <button
                    id="palleon-img-replace-media-library"
                    type="button"
                    className="palleon-btn palleon-lg-btn btn-full palleon-modal-open"
                    data-target="#modal-media-library"
                  >
                    <span className="material-icons">photo_library</span>Replace
                    Image
                  </button>
                </div>
              </div>
              <div id="palleon-overlay-image-mode" className="palleon-tab">
                <div className="palleon-file-field">
                  <input
                    type="file"
                    name="palleon-file"
                    id="palleon-overlay-img-upload"
                    className="palleon-hidden-file"
                    accept="image/png, image/jpeg, image/webp"
                  />
                  <label
                    for="palleon-overlay-img-upload"
                    className="palleon-btn primary palleon-lg-btn btn-full"
                  >
                    <span className="material-icons">upload</span>
                    <span>Upload from computer</span>
                  </label>
                </div>
                <button
                  id="palleon-overlay-img-media-library"
                  type="button"
                  className="palleon-btn primary palleon-lg-btn btn-full palleon-modal-open"
                  data-target="#modal-media-library"
                >
                  <span className="material-icons">photo_library</span>Select
                  From Media Library
                </button>
                <div className="notice notice-warning">
                  It is useful only if your PNG image has transparent parts and
                  the size of the image (or the aspect ratio) is equal to the
                  canvas. The overlay image will over all objects on the canvas
                  and will be stretched to fit the canvas.
                </div>
                <div id="palleon-overlay-wrap">
                  <img id="palleon-overlay-preview" src="" />
                  <button
                    id="palleon-overlay-delete"
                    type="button"
                    className="palleon-btn palleon-lg-btn btn-full"
                  >
                    <span className="material-icons">delete</span>Remove Overlay
                    Image
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="palleon-shapes"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-select-btn-set">
              <select
                id="palleon-shape-select"
                className="palleon-select"
                autocomplete="off"
              >
                <option value="none" selected>
                  Select Shape
                </option>
                <option value="circle">Circle</option>
                <option value="ellipse">Ellipse</option>
                <option value="square">Square</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
                <option value="trapezoid">Trapezoid</option>
                <option value="pentagon">Pentagon</option>
                <option value="octagon">Octagon</option>
                <option value="emerald">Emerald</option>
                <option value="star">Star</option>
              </select>
              <button
                id="palleon-shape-add"
                className="palleon-btn primary"
                autocomplete="off"
                disabled
              >
                <span className="material-icons">add_circle</span>
              </button>
            </div>

            <div id="palleon-shape-settings" className="palleon-sub-settings">
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Fill Style</label>
                <div className="palleon-control">
                  <select
                    id="palleon-shape-gradient"
                    className="palleon-select"
                    autocomplete="off"
                  >
                    <option value="none" selected>
                      Solid Color
                    </option>
                    <option value="vertical">Vertical Gradient</option>
                    <option value="horizontal">Horizontal Gradient</option>
                  </select>
                </div>
              </div>
              <div id="shape-gradient-settings">
                <div className="palleon-control-wrap control-text-color">
                  <label className="palleon-control-label">Color 1</label>
                  <div className="palleon-control">
                    <input
                      id="shape-gradient-color-1"
                      type="text"
                      className="palleon-colorpicker disallow-empty"
                      autocomplete="off"
                      value="#9C27B0"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap control-text-color">
                  <label className="palleon-control-label">Color 2</label>
                  <div className="palleon-control">
                    <input
                      id="shape-gradient-color-2"
                      type="text"
                      className="palleon-colorpicker disallow-empty"
                      autocomplete="off"
                      value="#000000"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap control-text-color">
                  <label className="palleon-control-label">Color 3</label>
                  <div className="palleon-control">
                    <input
                      id="shape-gradient-color-3"
                      type="text"
                      className="palleon-colorpicker allow-empty"
                      autocomplete="off"
                      value=""
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap control-text-color">
                  <label className="palleon-control-label">Color 4</label>
                  <div className="palleon-control">
                    <input
                      id="shape-gradient-color-4"
                      type="text"
                      className="palleon-colorpicker allow-empty"
                      autocomplete="off"
                      value=""
                    />
                  </div>
                </div>
              </div>
              <div id="shape-fill-color" className="palleon-control-wrap">
                <label className="palleon-control-label">Fill Color</label>
                <div className="palleon-control">
                  <input
                    id="palleon-shape-color"
                    type="text"
                    className="palleon-colorpicker allow-empty"
                    autocomplete="off"
                    value="#fff"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Outline Size</label>
                <div className="palleon-control">
                  <input
                    id="shape-outline-width"
                    className="palleon-form-field"
                    type="number"
                    value="0"
                    data-min="0"
                    data-max="1000"
                    step="1"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Outline Color</label>
                <div className="palleon-control">
                  <input
                    id="shape-outline-color"
                    type="text"
                    className="palleon-colorpicker disallow-empty"
                    autocomplete="off"
                    value="#000000"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap conditional">
                <label className="palleon-control-label">Shadow</label>
                <div className="palleon-control palleon-toggle-control">
                  <label className="palleon-toggle">
                    <input
                      id="palleon-shape-shadow"
                      className="palleon-toggle-checkbox"
                      data-conditional="#shape-shadow-settings"
                      type="checkbox"
                      autocomplete="off"
                    />
                    <div className="palleon-toggle-switch"></div>
                  </label>
                </div>
              </div>
              <div
                id="shape-shadow-settings"
                className="d-none conditional-settings"
              >
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Shadow Color</label>
                  <div className="palleon-control">
                    <input
                      id="shape-shadow-color"
                      type="text"
                      className="palleon-colorpicker disallow-empty"
                      autocomplete="off"
                      value="#000"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Shadow Blur</label>
                  <div className="palleon-control">
                    <input
                      id="shape-shadow-blur"
                      className="palleon-form-field"
                      type="number"
                      value="5"
                      step="1"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Offset X</label>
                  <div className="palleon-control">
                    <input
                      id="shape-shadow-offset-x"
                      className="palleon-form-field"
                      type="number"
                      value="5"
                      step="1"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Offset Y</label>
                  <div className="palleon-control">
                    <input
                      id="shape-shadow-offset-y"
                      className="palleon-form-field"
                      type="number"
                      value="5"
                      step="1"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="palleon-control-wrap label-block">
                <div className="palleon-control">
                  <div className="palleon-btn-group icon-group">
                    <button
                      type="button"
                      className="palleon-horizontal-center palleon-btn tooltip tooltip-top"
                      data-title="Horizontal Align Center"
                    >
                      <span className="material-icons">
                        align_horizontal_center
                      </span>
                    </button>
                    <button
                      type="button"
                      className="palleon-vertical-center palleon-btn tooltip tooltip-top"
                      data-title="Vertical Align Center"
                    >
                      <span className="material-icons">
                        vertical_align_center
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Opacity<span>1</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="shape-opacity"
                    type="range"
                    min="0"
                    max="1"
                    value="1"
                    step="0.1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Skew X<span>0</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="shape-skew-x"
                    type="range"
                    min="0"
                    max="180"
                    value="0"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Skew Y<span>0</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="shape-skew-y"
                    type="range"
                    min="0"
                    max="180"
                    value="0"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Rotate<span>0</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="shape-rotate"
                    type="range"
                    min="0"
                    max="360"
                    value="0"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div id="shape-custom-width-wrap">
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Custom Width</label>
                  <div className="palleon-control">
                    <input
                      id="shape-custom-width"
                      className="palleon-form-field"
                      type="number"
                      value=""
                      data-min="0"
                      data-max="10000"
                      step="1"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap">
                  <label className="palleon-control-label">Custom Height</label>
                  <div className="palleon-control">
                    <input
                      id="shape-custom-height"
                      className="palleon-form-field"
                      type="number"
                      value=""
                      data-min="0"
                      data-max="10000"
                      step="1"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap label-block">
                  <label className="palleon-control-label">Aspect Ratio</label>
                  <div className="palleon-control">
                    <div className="palleon-aspect-ratio">
                      <input
                        id="palleon-shape-ratio-w"
                        className="palleon-form-field"
                        type="number"
                        value="12"
                        autocomplete="off"
                      />
                      <span className="material-icons">clear</span>
                      <input
                        id="palleon-shape-ratio-h"
                        className="palleon-form-field"
                        type="number"
                        value="16"
                        autocomplete="off"
                      />
                      <button
                        id="palleon-shape-ratio-lock"
                        type="button"
                        className="palleon-btn palleon-lock-unlock"
                      >
                        <span className="material-icons">lock_open</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="palleon-elements"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-tabs">
              <ul className="palleon-tabs-menu">
                <li
                  id="palleon-all-elements-open"
                  className="active"
                  data-target="#palleon-all-elements"
                >
                  All
                </li>
                <li data-target="#palleon-my-favorites">My Favorites</li>
                <li
                  id="palleon-custom-element-open"
                  data-target="#palleon-custom-element"
                >
                  Settings
                </li>
              </ul>

              <div id="palleon-all-elements" className="palleon-tab active">
                <div className="palleon-search-wrap">
                  <input
                    id="palleon-element-search"
                    type="search"
                    className="palleon-form-field"
                    placeholder="Search Category..."
                    autocomplete="off"
                  />
                  <span
                    id="palleon-element-search-icon"
                    className="material-icons"
                  >
                    search
                  </span>
                </div>
                <ul id="palleon-elements-wrap" className="palleon-accordion">
                  <li data-keyword="ink-brush-strokes">
                    <a>
                      Ink Brush Strokes<span className="data-count">21</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-ink-brush-strokes"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/ink-brush-strokes/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/ink-brush-strokes/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="ink-brush-strokes/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="abstract-shapes">
                    <a>
                      Abstract Shapes<span className="data-count">52</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-abstract-shapes"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/42.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/43.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/44.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/44.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/44"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/45.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/45.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/45"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/46.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/46.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/46"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/47.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/47.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/47"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/48.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/48.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/48"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/49.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/49.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/49"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/50.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/50.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/50"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/51.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/51.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/51"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/abstract-shapes/52.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/abstract-shapes/52.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="abstract-shapes/52"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="geometric-shapes">
                    <a>
                      Geometric Shapes<span className="data-count">21</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-geometric-shapes"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/geometric-shapes/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/geometric-shapes/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="geometric-shapes/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="shape-badges">
                    <a>
                      Shapes &amp; Badges<span className="data-count">36</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-shape-badges"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/shape-badges/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/shape-badges/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="shape-badges/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="hand-drawn-dividers">
                    <a>
                      Hand Drawn Dividers<span className="data-count">30</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-hand-drawn-dividers"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/hand-drawn-dividers/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/hand-drawn-dividers/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="hand-drawn-dividers/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="arrows">
                    <a>
                      Arrows<span className="data-count">31</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-arrows"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/arrows/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/arrows/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="arrows/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="speech-bubbles">
                    <a>
                      Speech Bubbles<span className="data-count">41</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-speech-bubbles"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/speech-bubbles/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/speech-bubbles/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="speech-bubbles/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="clouds">
                    <a>
                      Clouds<span className="data-count">41</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-clouds"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/clouds/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/clouds/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="clouds/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="social-media">
                    <a>
                      Social Media<span className="data-count">55</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-social-media"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/42.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/43.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/44.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/44.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/44"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/45.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/45.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/45"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/46.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/46.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/46"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/47.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/47.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/47"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/48.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/48.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/48"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/49.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/49.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/49"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/50.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/50.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/50"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/51.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/51.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/51"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/52.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/52.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/52"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/53.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/53.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/53"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/54.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/54.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/54"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/social-media/55.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/social-media/55.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="social-media/55"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="payment">
                    <a>
                      Payment<span className="data-count">80</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-payment"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/42.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/43.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/44.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/44.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/44"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/45.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/45.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/45"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/46.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/46.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/46"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/47.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/47.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/47"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/48.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/48.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/48"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/49.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/49.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/49"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/50.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/50.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/50"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/51.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/51.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/51"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/52.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/52.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/52"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/53.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/53.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/53"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/54.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/54.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/54"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/55.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/55.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/55"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/56.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/56.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/56"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/57.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/57.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/57"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/58.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/58.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/58"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/59.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/59.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/59"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/60.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/60.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/60"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/61.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/61.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/61"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/62.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/62.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/62"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/63.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/63.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/63"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/64.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/64.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/64"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/65.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/65.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/65"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/66.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/66.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/66"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/67.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/67.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/67"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/68.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/68.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/68"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/69.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/69.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/69"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/70.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/70.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/70"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/71.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/71.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/71"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/72.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/72.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/72"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/73.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/73.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/73"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/74.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/74.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/74"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/75.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/75.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/75"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/76.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/76.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/76"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/77.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/77.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/77"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/78.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/78.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/78"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/79.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/79.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/79"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/payment/80.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/payment/80.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="payment/80"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="crypto">
                    <a>
                      Crypto Currency<span className="data-count">56</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-crypto"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/42.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/43.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/44.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/44.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/44"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/45.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/45.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/45"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/46.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/46.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/46"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/47.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/47.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/47"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/48.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/48.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/48"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/49.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/49.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/49"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/50.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/50.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/50"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/51.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/51.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/51"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/52.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/52.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/52"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/53.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/53.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/53"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/54.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/54.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/54"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/55.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/55.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/55"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/crypto/56.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/crypto/56.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="crypto/56"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="avatars">
                    <a>
                      Avatars<span className="data-count">25</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-avatars"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/avatars/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/avatars/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="avatars/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="people">
                    <a>
                      People<span className="data-count">43</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-people"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/42.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/people/43.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/people/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="people/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="dividers">
                    <a>
                      Dividers<span className="data-count">25</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-dividers"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/dividers/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/dividers/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="dividers/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="trees">
                    <a>
                      Trees<span className="data-count">23</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-trees"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/1.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/2.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/3.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/4.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/5.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/6.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/7.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/8.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/9.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/10.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/11.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/12.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/13.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/14.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/15.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/16.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/17.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/18.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/19.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/20.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/21.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/22.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/trees/23.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/trees/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="trees/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="animals">
                    <a>
                      Animals<span className="data-count">48</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-animals"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/1.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/2.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/3.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/4.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/5.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/6.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/7.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/8.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/9.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/10.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/11.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/12.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/13.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/14.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/15.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/16.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/17.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/18.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/19.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/20.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/21.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/22.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/23.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/24.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/25.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/26.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/27.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/28.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/29.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/30.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/31.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/32.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/33.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/34.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/35.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/36.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/37.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/38.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/39.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/40.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/41.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/42.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/43.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/44.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/44.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/44"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/45.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/45.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/45"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/46.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/46.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/46"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/47.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/47.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/47"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/animals/48.svg"
                          data-loader="yes"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/animals/48.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="animals/48"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="vehicles">
                    <a>
                      Vehicles<span className="data-count">9</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-vehicles"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/vehicles/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/vehicles/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="vehicles/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="quote">
                    <a>
                      Quote<span className="data-count">12</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-quote"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/quote/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/quote/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="quote/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="weather">
                    <a>
                      Weather<span className="data-count">71</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-weather"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/26.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/26.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/26"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/27.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/27.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/27"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/28.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/28.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/28"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/29.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/29.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/29"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/30.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/30.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/30"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/31.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/31.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/31"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/32.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/32.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/32"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/33.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/33.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/33"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/34.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/34.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/34"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/35.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/35.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/35"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/36.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/36.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/36"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/37.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/37.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/37"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/38.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/38.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/38"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/39.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/39.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/39"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/40.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/40.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/40"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/41.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/41.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/41"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/42.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/42.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/42"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/43.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/43.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/43"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/44.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/44.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/44"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/45.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/45.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/45"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/46.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/46.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/46"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/47.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/47.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/47"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/48.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/48.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/48"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/49.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/49.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/49"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/50.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/50.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/50"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/51.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/51.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/51"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/52.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/52.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/52"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/53.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/53.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/53"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/54.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/54.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/54"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/55.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/55.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/55"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/56.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/56.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/56"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/57.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/57.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/57"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/58.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/58.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/58"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/59.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/59.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/59"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/60.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/60.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/60"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/61.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/61.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/61"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/62.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/62.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/62"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/63.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/63.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/63"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/64.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/64.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/64"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/65.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/65.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/65"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/66.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/66.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/66"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/67.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/67.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/67"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/68.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/68.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/68"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/69.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/69.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/69"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/70.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/70.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/70"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weather/71.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weather/71.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weather/71"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="weapons">
                    <a>
                      Weapons<span className="data-count">25</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-weapons"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/17.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/17.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/17"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/18.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/18.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/18"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/19.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/19.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/19"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/20.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/20.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/20"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/21.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/21.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/21"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/22.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/22.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/22"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/23.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/23.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/23"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/24.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/24.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/24"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element light"
                          data-elsource="files/elements/weapons/25.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/weapons/25.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="weapons/25"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-keyword="gifts">
                    <a>
                      Gifts<span className="data-count">16</span>
                      <span className="material-icons arrow">
                        keyboard_arrow_down
                      </span>
                    </a>
                    <div>
                      <div
                        id="palleon-elements-grid-gifts"
                        className="palleon-grid palleon-elements-grid four-column paginated"
                        data-perpage="12"
                      >
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/1.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/1.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/1"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/2.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/2.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/2"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/3.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/3.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/3"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/4.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/4.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/4"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/5.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/5.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/5"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/6.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/6.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/6"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/7.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/7.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/7"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/8.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/8.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/8"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/9.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/9.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/9"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/10.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/10.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/10"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/11.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/11.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/11"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/12.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/12.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/12"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/13.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/13.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/13"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/14.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/14.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/14"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/15.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/15.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/15"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          className="palleon-element dark"
                          data-elsource="files/elements/gifts/16.svg"
                          data-loader="no"
                        >
                          <img
                            className="lazy"
                            data-src="files/elements/gifts/16.svg"
                          />
                          <div className="element-favorite">
                            <button
                              type="button"
                              className="palleon-btn-simple star"
                              data-elementid="gifts/16"
                            >
                              <span className="material-icons">
                                star_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div id="palleon-my-favorites" className="palleon-tab">
                <div className="palleon-grid palleon-elements-grid five-column">
                  <div className="notice notice-info">
                    <h6>No favorites yet</h6>
                    Click the star icon on any element, and you will see it here
                    next time you visit.
                  </div>
                </div>
              </div>

              <div id="palleon-custom-element" className="palleon-tab">
                <div
                  id="palleon-custom-element-options-info"
                  className="notice notice-info"
                >
                  <h6>No element is selected</h6>
                  Select an element to adjust the settings.
                </div>
                <div id="palleon-custom-element-options">
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Fill Style</label>
                    <div className="palleon-control">
                      <select
                        id="palleon-element-gradient"
                        className="palleon-select"
                        autocomplete="off"
                      >
                        <option value="none" selected>
                          Solid Color
                        </option>
                        <option value="vertical">Vertical Gradient</option>
                        <option value="horizontal">Horizontal Gradient</option>
                      </select>
                    </div>
                  </div>
                  <div id="element-gradient-settings">
                    <div className="palleon-control-wrap control-text-color">
                      <label className="palleon-control-label">Color 1</label>
                      <div className="palleon-control">
                        <input
                          id="element-gradient-color-1"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#9C27B0"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap control-text-color">
                      <label className="palleon-control-label">Color 2</label>
                      <div className="palleon-control">
                        <input
                          id="element-gradient-color-2"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#000000"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap control-text-color">
                      <label className="palleon-control-label">Color 3</label>
                      <div className="palleon-control">
                        <input
                          id="element-gradient-color-3"
                          type="text"
                          className="palleon-colorpicker allow-empty"
                          autocomplete="off"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap control-text-color">
                      <label className="palleon-control-label">Color 4</label>
                      <div className="palleon-control">
                        <input
                          id="element-gradient-color-4"
                          type="text"
                          className="palleon-colorpicker allow-empty"
                          autocomplete="off"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <div id="element-fill-color" className="palleon-control-wrap">
                    <label className="palleon-control-label">Fill Color</label>
                    <div className="palleon-control">
                      <input
                        id="palleon-element-color"
                        type="text"
                        className="palleon-colorpicker disallow-empty"
                        autocomplete="off"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap conditional">
                    <label className="palleon-control-label">Shadow</label>
                    <div className="palleon-control palleon-toggle-control">
                      <label className="palleon-toggle">
                        <input
                          id="palleon-element-shadow"
                          className="palleon-toggle-checkbox"
                          data-conditional="#element-shadow-settings"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <div className="palleon-toggle-switch"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    id="element-shadow-settings"
                    className="d-none conditional-settings"
                  >
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">
                        Shadow Color
                      </label>
                      <div className="palleon-control">
                        <input
                          id="element-shadow-color"
                          type="text"
                          className="palleon-colorpicker disallow-empty"
                          autocomplete="off"
                          value="#000"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">
                        Shadow Blur
                      </label>
                      <div className="palleon-control">
                        <input
                          id="element-shadow-blur"
                          className="palleon-form-field"
                          type="number"
                          value="5"
                          step="1"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">Offset X</label>
                      <div className="palleon-control">
                        <input
                          id="element-shadow-offset-x"
                          className="palleon-form-field"
                          type="number"
                          value="5"
                          step="1"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="palleon-control-wrap">
                      <label className="palleon-control-label">Offset Y</label>
                      <div className="palleon-control">
                        <input
                          id="element-shadow-offset-y"
                          className="palleon-form-field"
                          type="number"
                          value="5"
                          step="1"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="palleon-control-wrap label-block">
                    <div className="palleon-control">
                      <div className="palleon-btn-group icon-group">
                        <button
                          id="element-flip-horizontal"
                          type="button"
                          className="palleon-btn tooltip tooltip-top"
                          data-title="Flip X"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          id="element-flip-vertical"
                          type="button"
                          className="palleon-btn tooltip tooltip-top"
                          data-title="Flip Y"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          type="button"
                          className="palleon-horizontal-center palleon-btn tooltip tooltip-top"
                          data-title="H-Align Center"
                        >
                          <span className="material-icons">
                            align_horizontal_center
                          </span>
                        </button>
                        <button
                          type="button"
                          className="palleon-vertical-center palleon-btn tooltip tooltip-top"
                          data-title="V-Align Center"
                        >
                          <span className="material-icons">
                            vertical_align_center
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Opacity<span>1</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="element-opacity"
                        type="range"
                        min="0"
                        max="1"
                        value="1"
                        step="0.1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Skew X<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="element-skew-x"
                        type="range"
                        min="0"
                        max="180"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Skew Y<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="element-skew-y"
                        type="range"
                        min="0"
                        max="180"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Rotate<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="element-rotate"
                        type="range"
                        min="0"
                        max="360"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="palleon-noelements" className="notice notice-warning">
              Nothing found.
            </div>
          </div>

          <div
            id="palleon-icons"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-tabs">
              <ul className="palleon-tabs-menu">
                <li className="active" data-target="#palleon-all-icons">
                  Icons
                </li>
                <li
                  id="palleon-custom-svg-open"
                  data-target="#palleon-customsvg-upload"
                >
                  Custom SVG
                </li>
              </ul>

              <div id="palleon-all-icons" className="palleon-tab active">
                <div className="palleon-control-wrap" style={{ margin: "0px" }}>
                  <label className="palleon-control-label">Icon Style</label>
                  <div className="palleon-control">
                    <select
                      id="palleon-icon-style"
                      className="palleon-select"
                      autocomplete="off"
                    >
                      <option selected value="materialicons">
                        Filled
                      </option>
                      <option value="materialiconsoutlined">Outlined</option>
                      <option value="materialiconsround">Round</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="palleon-search-wrap">
                  <input
                    id="palleon-icon-search"
                    type="search"
                    className="palleon-form-field"
                    placeholder="Enter a keyword..."
                    autocomplete="off"
                  />
                  <span
                    id="palleon-icon-search-icon"
                    className="material-icons"
                  >
                    search
                  </span>
                </div>
                <div
                  id="palleon-icons-grid"
                  className="palleon-grid palleon-elements-grid four-column"
                ></div>
                <div id="palleon-noicons" className="notice notice-warning">
                  Nothing found.
                </div>
              </div>

              <div id="palleon-customsvg-upload" className="palleon-tab">
                <div className="palleon-file-field">
                  <input
                    type="file"
                    name="palleon-element-upload"
                    id="palleon-element-upload"
                    className="palleon-hidden-file"
                    accept="image/svg+xml"
                  />
                  <label
                    for="palleon-element-upload"
                    className="palleon-btn primary palleon-lg-btn btn-full"
                  >
                    <span className="material-icons">upload</span>
                    <span>Upload SVG from computer</span>
                  </label>
                </div>
                <button
                  id="palleon-svg-media-library"
                  type="button"
                  className="palleon-btn primary palleon-lg-btn btn-full palleon-modal-open"
                  data-target="#modal-svg-library"
                >
                  <span className="material-icons">photo_library</span>Select
                  From Media Library
                </button>

                <div id="palleon-custom-svg-options">
                  <hr />
                  <div className="palleon-control-wrap label-block">
                    <div className="palleon-control">
                      <div className="palleon-btn-group icon-group">
                        <button
                          id="customsvg-flip-horizontal"
                          type="button"
                          className="palleon-btn tooltip tooltip-top"
                          data-title="Flip X"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          id="customsvg-flip-vertical"
                          type="button"
                          className="palleon-btn tooltip tooltip-top"
                          data-title="Flip Y"
                        >
                          <span className="material-icons">flip</span>
                        </button>
                        <button
                          type="button"
                          className="palleon-horizontal-center palleon-btn tooltip tooltip-top"
                          data-title="H-Align Center"
                        >
                          <span className="material-icons">
                            align_horizontal_center
                          </span>
                        </button>
                        <button
                          type="button"
                          className="palleon-vertical-center palleon-btn tooltip tooltip-top"
                          data-title="V-Align Center"
                        >
                          <span className="material-icons">
                            vertical_align_center
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Opacity<span>1</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="customsvg-opacity"
                        type="range"
                        min="0"
                        max="1"
                        value="1"
                        step="0.1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Skew X<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="customsvg-skew-x"
                        type="range"
                        min="0"
                        max="180"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Skew Y<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="customsvg-skew-y"
                        type="range"
                        min="0"
                        max="180"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap label-block">
                    <label className="palleon-control-label slider-label">
                      Rotate<span>0</span>
                    </label>
                    <div className="palleon-control">
                      <input
                        id="customsvg-rotate"
                        type="range"
                        min="0"
                        max="360"
                        value="0"
                        step="1"
                        className="palleon-slider"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="palleon-qrcode"
            className="palleon-icon-panel-content panel-hide"
          >
            <div id="palleon-qrcode-settings">
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Preview</label>
                <div className="palleon-control">
                  <div id="qrcode-preview"></div>
                </div>
              </div>
              <hr />
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Text</label>
                <div className="palleon-control">
                  <input
                    type="text"
                    id="palleon-qrcode-text"
                    className="palleon-form-field"
                    autocomplete="off"
                    value="https://mysite.com"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap control-text-color">
                <label className="palleon-control-label">Fill Color</label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-fill"
                    type="text"
                    className="palleon-colorpicker disallow-empty"
                    autocomplete="off"
                    value="#333333"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap control-text-color">
                <label className="palleon-control-label">
                  Background Color
                </label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-back"
                    type="text"
                    className="palleon-colorpicker disallow-empty"
                    autocomplete="off"
                    value="#FFFFFF"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Rounded Corners<span>0</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-rounded"
                    type="range"
                    min="0"
                    max="100"
                    value="0"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <hr />
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Label</label>
                <div className="palleon-control">
                  <input
                    type="text"
                    id="palleon-qrcode-label"
                    className="palleon-form-field"
                    autocomplete="off"
                    value=""
                  />
                </div>
              </div>
              <div className="palleon-control-wrap control-text-color">
                <label className="palleon-control-label">Label Color</label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-label-color"
                    type="text"
                    className="palleon-colorpicker disallow-empty"
                    autocomplete="off"
                    value="#333333"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Label Size<span>30</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-label-size"
                    type="range"
                    min="0"
                    max="100"
                    value="30"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Label Position X<span>50</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-label-position-x"
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Label Position Y<span>50</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="palleon-qrcode-label-position-y"
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    step="1"
                    className="palleon-slider"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <hr />
            <button
              id="palleon-generate-qr-code"
              type="button"
              className="palleon-btn primary palleon-lg-btn btn-full"
            >
              <span className="material-icons">qr_code</span>Generate QR Code
            </button>
          </div>

          <div
            id="palleon-draw"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-btn-set">
              <button
                id="palleon-draw-btn"
                type="button"
                className="palleon-btn primary palleon-lg-btn"
              >
                <span className="material-icons">edit</span>Start Drawing
              </button>
              <button
                id="palleon-draw-undo"
                type="button"
                className="palleon-btn palleon-lg-btn"
                autocomplete="off"
                title="Undo"
                disabled
              >
                <span className="material-icons">undo</span>
              </button>
            </div>

            <div id="palleon-draw-settings" className="palleon-sub-settings">
              <div id="palleon-brush-tip" className="notice notice-info">
                You can draw a straight line by pressing the shift key.
              </div>
              <div id="palleon-eraser-tip" className="notice notice-info">
                You can click undo button to activate invert erasing mode.
              </div>
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Brush Type</label>
                <div className="palleon-control">
                  <select
                    id="palleon-brush-select"
                    className="palleon-select"
                    autocomplete="off"
                  >
                    <option value="pencil" selected>
                      Pencil
                    </option>
                    <option value="circle">Circle</option>
                    <option value="spray">Spray</option>
                    <option value="hline">H-line Pattern</option>
                    <option value="vline">V-line Pattern</option>
                    <option value="square">Square Pattern</option>
                    <option value="erase">Erase BG Image</option>
                  </select>
                </div>
              </div>
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Brush Width</label>
                <div className="palleon-control">
                  <input
                    id="brush-width"
                    className="palleon-form-field numeric-field"
                    type="number"
                    value="50"
                    autocomplete="off"
                    data-min="1"
                    data-max="1000"
                    data-step="1"
                  />
                </div>
              </div>
              <div
                id="palleon-brush-pattern-width"
                className="palleon-control-wrap"
              >
                <label className="palleon-control-label">Pattern Width</label>
                <div className="palleon-control">
                  <input
                    id="brush-pattern-width"
                    className="palleon-form-field numeric-field"
                    type="number"
                    value="10"
                    autocomplete="off"
                    data-min="1"
                    data-max="1000"
                    data-step="1"
                  />
                </div>
              </div>
              <div
                id="palleon-brush-pattern-distance"
                className="palleon-control-wrap"
              >
                <label className="palleon-control-label">
                  Pattern Distance
                </label>
                <div className="palleon-control">
                  <input
                    id="brush-pattern-distance"
                    className="palleon-form-field numeric-field"
                    type="number"
                    value="5"
                    autocomplete="off"
                    data-min="1"
                    data-max="1000"
                    data-step="1"
                  />
                </div>
              </div>
              <div id="not-erase-brush">
                <div className="palleon-control-wrap control-text-color">
                  <label className="palleon-control-label">Brush Color</label>
                  <div className="palleon-control">
                    <input
                      id="brush-color"
                      type="text"
                      className="palleon-colorpicker allow-empty"
                      autocomplete="off"
                      value="#ffffff"
                    />
                  </div>
                </div>
                <div className="palleon-control-wrap conditional">
                  <label className="palleon-control-label">Brush Shadow</label>
                  <div className="palleon-control palleon-toggle-control">
                    <label className="palleon-toggle">
                      <input
                        id="palleon-brush-shadow"
                        className="palleon-toggle-checkbox"
                        data-conditional="#line-shadow-settings"
                        type="checkbox"
                        autocomplete="off"
                      />
                      <div className="palleon-toggle-switch"></div>
                    </label>
                  </div>
                </div>
                <div
                  id="line-shadow-settings"
                  className="d-none conditional-settings"
                >
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Blur</label>
                    <div className="palleon-control">
                      <input
                        id="brush-shadow-width"
                        className="palleon-form-field"
                        type="number"
                        value="5"
                        data-min="0"
                        data-max="1000"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Offset X</label>
                    <div className="palleon-control">
                      <input
                        id="brush-shadow-shadow-offset-x"
                        className="palleon-form-field"
                        type="number"
                        value="5"
                        data-min="0"
                        data-max="100"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap">
                    <label className="palleon-control-label">Offset Y</label>
                    <div className="palleon-control">
                      <input
                        id="brush-shadow-shadow-offset-y"
                        className="palleon-form-field"
                        type="number"
                        value="5"
                        data-min="0"
                        data-max="100"
                        step="1"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="palleon-control-wrap control-text-color">
                    <label className="palleon-control-label">Color</label>
                    <div className="palleon-control">
                      <input
                        id="brush-shadow-color"
                        type="text"
                        className="palleon-colorpicker allow-empty"
                        autocomplete="off"
                        value="#000000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="palleon-settings"
            className="palleon-icon-panel-content panel-hide"
          >
            <div className="palleon-control-wrap control-text-color">
              <label className="palleon-control-label">Canvas Background</label>
              <div className="palleon-control">
                <input
                  id="custom-image-background"
                  type="text"
                  className="palleon-colorpicker allow-empty"
                  autocomplete="off"
                  value=""
                />
              </div>
            </div>
            <hr />
            <h5>Preferences</h5>
            <div id="palleon-preferences">
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Font Size<span>14</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="custom-font-size"
                    type="range"
                    min="10"
                    max="18"
                    value="14"
                    step="1"
                    className="palleon-slider preference"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap">
                <label className="palleon-control-label">Theme</label>
                <div className="palleon-control">
                  <select
                    id="custom-theme"
                    className="palleon-select preference"
                    autocomplete="off"
                  >
                    <option value="dark" selected>
                      Dark
                    </option>
                    <option value="light">Light</option>
                  </select>
                </div>
              </div>
              <div className="palleon-control-wrap control-text-color">
                <label className="palleon-control-label">Background</label>
                <div className="palleon-control">
                  <input
                    id="custom-background"
                    type="text"
                    className="palleon-colorpicker allow-empty preference"
                    autocomplete="off"
                    value=""
                  />
                </div>
              </div>
              <div className="palleon-control-wrap control-text-color">
                <label className="palleon-control-label">
                  Ruler Guide Color
                </label>
                <div className="palleon-control">
                  <input
                    id="ruler-guide-color"
                    type="text"
                    className="palleon-colorpicker allow-empty preference"
                    autocomplete="off"
                    value="#6658ea"
                  />
                </div>
              </div>
              <div className="palleon-control-wrap label-block">
                <label className="palleon-control-label slider-label">
                  Ruler Guide Size<span>1</span>
                </label>
                <div className="palleon-control">
                  <input
                    id="ruler-guide-size"
                    type="range"
                    min="1"
                    max="10"
                    value="1"
                    step="1"
                    className="palleon-slider preference"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="palleon-control-wrap label-block">
              <div className="palleon-control">
                <button
                  id="palleon-preferences-save"
                  type="button"
                  className="palleon-btn palleon-lg-btn btn-full primary"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconPanel;
