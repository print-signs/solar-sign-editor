import React from "react";

function ModelMediaLib() {
  return (
    <>
      <div id="modal-media-library" class="palleon-modal">
        <div class="palleon-modal-close" data-target="#modal-media-library">
          <span class="material-icons">close</span>
        </div>
        <div class="palleon-modal-wrap">
          <div class="palleon-modal-inner">
            <div class="palleon-tabs">
              <ul class="palleon-tabs-menu">
                <li class="active" data-target="#library-my-images">
                  <span class="material-icons">photo_library</span>My Images
                </li>
                <li data-target="#library-all-images">
                  <span class="material-icons">photo_library</span>Other Images
                </li>
              </ul>

              <div id="library-my-images" class="palleon-tab active">
                <div id="palleon-library-my-menu">
                  <div>
                    <form
                      class="uploadImgToLibrary"
                      enctype="multipart/form-data"
                    >
                      <div class="palleon-file-field">
                        <input
                          type="file"
                          name="palleon-library-upload-img"
                          id="palleon-library-upload-img"
                          class="palleon-hidden-file"
                          accept="image/png, image/jpeg, image/webp"
                        />
                        <label
                          for="palleon-library-upload-img"
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
                      id="palleon-library-my-search"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">search</span>
                    </button>
                  </div>
                </div>
                <div
                  id="palleon-library-my"
                  class="palleon-grid media-library-grid paginated"
                  data-perpage="18"
                >
                  <div class="palleon-masonry-item" data-keyword="lorem kotem">
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="assets/placeholder.jpg"
                          data-full="assets/placeholder-big.jpg"
                          data-filename="Lorem"
                          title="Lorem ipsum dolor"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">
                        Lorem ipsum dolor
                      </div>
                    </div>
                  </div>
                  <div class="palleon-masonry-item" data-keyword="ipsum">
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="assets/placeholder.jpg"
                          data-full="assets/placeholder-big.jpg"
                          data-filename="Lorem"
                          title="Lorem ipsum dolor"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">
                        Lorem ipsum dolor
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="palleon-library-my-noimg"
                  class="notice notice-warning d-none"
                >
                  Nothing found.
                </div>
              </div>

              <div id="library-all-images" class="palleon-tab">
                <div id="palleon-library-all-menu">
                  <div></div>
                  <div class="palleon-search-box">
                    <input
                      type="search"
                      class="palleon-form-field"
                      placeholder="Search by title..."
                      autocomplete="off"
                    />
                    <button
                      id="palleon-library-all-search"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">search</span>
                    </button>
                  </div>
                </div>
                <div
                  id="palleon-library-all"
                  class="palleon-grid media-library-grid paginated"
                  data-perpage="18"
                >
                  <div class="palleon-masonry-item" data-keyword="lorem">
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="assets/placeholder.jpg"
                          data-full="assets/placeholder-big.jpg"
                          data-filename="Lorem"
                          title="Lorem"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">
                        Lorem ipsum dolor
                      </div>
                    </div>
                  </div>
                  <div class="palleon-masonry-item" data-keyword="ipsum">
                    <div class="palleon-library-delete" data-target="">
                      <span class="material-icons">remove</span>
                    </div>
                    <div class="palleon-masonry-item-inner">
                      <div class="palleon-img-wrap">
                        <div class="palleon-img-loader"></div>
                        <img
                          class="lazy"
                          data-src="assets/placeholder.jpg"
                          data-full="assets/placeholder-big.jpg"
                          data-filename="Lorem"
                          title="Lorem"
                        />
                      </div>
                      <div class="palleon-masonry-item-desc">
                        Lorem ipsum dolor
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="palleon-library-all-noimg"
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

export default ModelMediaLib;
