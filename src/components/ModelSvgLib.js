import React from "react";

function ModelSvgLib() {
  return (
    <>
      <div id="modal-svg-library" class="palleon-modal">
        <div class="palleon-modal-close" data-target="#modal-svg-library">
          <span class="material-icons">close</span>
        </div>
        <div class="palleon-modal-wrap">
          <div class="palleon-modal-inner">
            <div class="palleon-tabs">
              <ul class="palleon-tabs-menu">
                <li class="active" data-target="#svg-library-my-images">
                  <span class="material-icons">photo_library</span>My SVGs
                </li>
                <li data-target="#svg-library-all-images">
                  <span class="material-icons">photo_library</span>Other SVGs
                </li>
              </ul>
              <div id="svg-library-my-images" class="palleon-tab active">
                <div id="palleon-svg-library-my-menu">
                  <div>
                    <form
                      class="uploadSVGToLibrary"
                      enctype="multipart/form-data"
                    >
                      <div class="palleon-file-field">
                        <input
                          type="file"
                          name="palleon-svg-library-upload-img"
                          id="palleon-svg-library-upload-img"
                          class="palleon-hidden-file"
                          accept="image/svg+xml"
                        />
                        <label
                          for="palleon-svg-library-upload-img"
                          class="palleon-btn primary"
                        >
                          <span class="material-icons">upload</span>
                          <span>Upload Image</span>
                        </label>
                      </div>
                    </form>
                  </div>
                  <div class="palleon-search-box">
                    <input
                      type="search"
                      class="palleon-form-field"
                      placeholder="Search by title..."
                      autocomplete="off"
                    />
                    <button
                      id="palleon-svg-library-my-search"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">search</span>
                    </button>
                  </div>
                </div>
                <div
                  id="palleon-svg-library-my"
                  class="palleon-grid svg-library-grid paginated"
                  data-perpage="18"
                >
                  <div
                    class="palleon-masonry-item"
                    data-keyword="Abstract Shape"
                  >
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="files/elements/abstract-shapes/1.svg"
                          data-full="files/elements/abstract-shapes/1.svg"
                          data-filename="abstract-shape"
                          title="Abstract Shape"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">
                        Abstract Shape
                      </div>
                    </div>
                  </div>
                  <div
                    class="palleon-masonry-item"
                    data-keyword="another shape"
                  >
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="files/elements/abstract-shapes/2.svg"
                          data-full="files/elements/abstract-shapes/2.svg"
                          data-filename="another-shape"
                          title="Another Shape"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">Another Shape</div>
                    </div>
                  </div>
                </div>
                <div
                  id="palleon-svg-library-my-noimg"
                  class="notice notice-warning d-none"
                >
                  Nothing found.
                </div>
              </div>
              <div id="svg-library-all-images" class="palleon-tab">
                <div id="palleon-svg-library-all-menu">
                  <div></div>
                  <div class="palleon-search-box">
                    <input
                      type="search"
                      class="palleon-form-field"
                      placeholder="Search by title..."
                      autocomplete="off"
                    />
                    <button
                      id="palleon-svg-library-all-search"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">search</span>
                    </button>
                  </div>
                </div>
                <div
                  id="palleon-svg-library-all"
                  class="palleon-grid svg-library-grid paginated"
                  data-perpage="18"
                >
                  <div
                    class="palleon-masonry-item"
                    data-keyword="Abstract Shape"
                  >
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="files/elements/abstract-shapes/1.svg"
                          data-full="files/elements/abstract-shapes/1.svg"
                          data-filename="abstract-shape"
                          title="Abstract Shape"
                          alt="imaji"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">
                        Abstract Shape
                      </div>
                    </div>
                  </div>
                  <div
                    class="palleon-masonry-item"
                    data-keyword="another shape"
                  >
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="files/elements/abstract-shapes/2.svg"
                          data-full="files/elements/abstract-shapes/2.svg"
                          data-filename="another-shape"
                          title="Another Shape"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">Another Shape</div>
                    </div>
                  </div>
                </div>
                <div
                  id="palleon-svg-library-all-noimg"
                  class="notice notice-warning d-none"
                >
                  <strong>Nothing found.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelSvgLib;
