import React from "react";

function MenuIconStart() {
  return (
    <>
      <div id="palleon-icon-menu">
        <button
          id="palleon-btn-adjust"
          type="button"
          class="palleon-icon-menu-btn active"
          data-target="#palleon-adjust"
        >
          <span class="material-icons">tune</span>
          <span class="palleon-icon-menu-title">Adjust</span>
        </button>
        <button
          id="palleon-btn-frames"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-frames"
        >
          <span class="material-icons">wallpaper</span>
          <span class="palleon-icon-menu-title">Frames</span>
        </button>
        <button
          id="palleon-btn-text"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-text"
        >
          <span class="material-icons">title</span>
          <span class="palleon-icon-menu-title">Text</span>
        </button>
        <button
          id="palleon-btn-image"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-image"
        >
          <span class="material-icons">add_photo_alternate</span>
          <span class="palleon-icon-menu-title">Image</span>
        </button>
        <button
          id="palleon-btn-shapes"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-shapes"
        >
          <span class="material-icons">category</span>
          <span class="palleon-icon-menu-title">Shapes</span>
        </button>
        <button
          id="palleon-btn-elements"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-elements"
        >
          <span class="material-icons">star</span>
          <span class="palleon-icon-menu-title">Elements</span>
        </button>
        <button
          id="palleon-btn-icons"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-icons"
        >
          <span class="material-icons">emoji_emotions</span>
          <span class="palleon-icon-menu-title">Icons</span>
        </button>
        <button
          id="palleon-btn-qrcode"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-qrcode"
        >
          <span class="material-icons">qr_code</span>
          <span class="palleon-icon-menu-title">QR Code</span>
        </button>
        <button
          id="palleon-btn-draw"
          type="button"
          class="palleon-icon-menu-btn"
          data-target="#palleon-draw"
        >
          <span class="material-icons">brush</span>
          <span class="palleon-icon-menu-title">Brushes</span>
        </button>
        <button
          id="palleon-btn-settings"
          type="button"
          class="palleon-icon-menu-btn stick-to-bottom"
          data-target="#palleon-settings"
        >
          <span class="material-icons">settings</span>
          <span class="palleon-icon-menu-title">Settings</span>
        </button>
      </div>
    </>
  );
}

export default MenuIconStart;
