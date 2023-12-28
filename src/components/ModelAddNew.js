import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import axios from "axios";

function ModelAddNew() {
  const [template, setTemplate] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");




  useEffect(() => {
    const fetch = async () => {
      const resp = await axios.get(
        "https://api.thesolarsign.com/api/design/getDesigns"
      );
      if (resp?.status === 200) {
        setTemplate(resp?.data?.designs);
      } else {
        alert("Error getting design");
      }
    };

    fetch();
  }, []);

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };
  console.log(selectedCategory);

  // console.log(template);

  return (
    <>
      <div id="modal-add-new" class="palleon-modal">
        <div class="palleon-modal-close" data-target="#modal-add-new">
          <span class="material-icons">close</span>
        </div>
        <div class="palleon-modal-wrap">
          <div class="palleon-modal-inner large">
            <div class="palleon-tabs">
              <ul class="palleon-tabs-menu">
                <li class="active" data-target="#modal-select-img">
                  <span class="material-icons">file_upload</span>New Image
                </li>
                <li class="active" data-target="#modal-template-library">
                  <span class="material-icons">photo_library</span>Template
                  Library
                </li>
                <li data-target="#modal-blank-canvas">
                  <span class="material-icons">crop_original</span>Blank Canvas
                </li>
              </ul>

              <div id="modal-select-img" class="palleon-tab active">
                <div class="palleon-select-btn-block">
                  <div>
                    <div class="palleon-btn-set">
                      <div class="palleon-file-field">
                        <input
                          type="file"
                          name="palleon-image-upload"
                          id="palleon-image-upload"
                          class="palleon-hidden-file"
                          accept="image/png, image/jpeg, image/webp"
                        />
                        <label
                          for="palleon-image-upload"
                          class="palleon-btn primary palleon-lg-btn"
                        >
                          <span class="material-icons">upload</span>
                          <span>Upload Image</span>
                        </label>
                      </div>
                      <button
                        id="palleon-media-library"
                        type="button"
                        class="palleon-btn primary palleon-lg-btn palleon-modal-open"
                        data-target="#modal-media-library"
                      >
                        <span class="material-icons">photo_library</span>Select
                        From Media Library
                      </button>
                    </div>
                    <div class="palleon-keep">
                      <label class="palleon-checkbox">
                        <input
                          id="keep-data"
                          type="checkbox"
                          autocomplete="off"
                        />
                        <span class="palleon-checkmark"></span>
                      </label>
                      <div>Keep current objects and filters</div>
                    </div>
                  </div>
                  <div>
                    <div class="palleon-file-field">
                      <input
                        type="file"
                        name="palleon-json-upload"
                        id="palleon-json-upload"
                        class="palleon-hidden-file"
                        accept=".json,application/JSON"
                      />
                      <label
                        for="palleon-json-upload"
                        class="palleon-btn primary palleon-lg-btn"
                      >
                        <span class="material-icons">upload</span>
                        <span>Upload Template</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div id="modal-template-library" class="palleon-tab active">
                <div class="palleon-templates-wrap">
                  <div class="palleon-tabs">
                    {/* <ul class="palleon-tabs-menu"> */}
                    {/* <li class="active" data-target="#palleon-all-templates">
                        All
                      </li> */}
                    {/**  <li data-target="#palleon-templates-favorites">
                        My Favorites
                      </li>
                      <li data-target="#palleon-mytemplates">My Templates</li> */}
                    {/* </ul> */}

                    <div id="palleon-all-templates" class="palleon-tab active">
                      <div class="palleon-templates-menu-wrap">
                        <input
                          id="palleon-template-search-keyword"
                          type="search"
                          class="palleon-form-field"
                          placeholder="Search by keyword..."
                          autocomplete="off"
                        />
                        <select
                          // id="palleon-templates-menu"
                          // class="palleon-select palleon-select2"

                          class="palleon-select "
                          autoComplete="off"
                          onChange={handleCategoryChange}
                          value={selectedCategory}
                        >
                          <option value="all">
                            All Categories
                          </option>
                          {
                            template && template.map((item, index) => {
                              return (

                                <option key={index} value={item.categoryName}>{item.categoryName}</option>
                              )
                            })
                          }
                          {/* <option value="banner-ads">Banner Ads (15)</option>
                          <option value="collage">Collage (7)</option>
                          <option value="quote">Quote (5)</option>
                          <option value="medium-rectangle">
                            Medium Rectangle Ads (2)
                          </option>
                          <option value="leaderboard">
                            Leaderboard Ads (4)
                          </option>
                          <option value="billboard">Billboard Ads (2)</option>
                          <option value="facebook-ads">Facebook Ads (3)</option>
                          <option value="instagram-post">
                            Instagram Post (5)
                          </option>
                          <option value="facebook-post">
                            Facebook Post (4)
                          </option>
                          <option value="twitter-post">Twitter Post (3)</option>
                          <option value="youtube-thumbnail">
                            Youtube Thumbnail (2)
                          </option> */}
                        </select>
                        <button
                          id="palleon-template-search"
                          type="button"
                          class="palleon-btn primary"
                        >
                          <span class="material-icons">search</span>
                        </button>
                      </div>
                      <div class="palleon-templates-content">
                        <div class="palleon-grid-wrap">
                          <div
                            id="palleon-all-templates-noimg"
                            class="notice notice-warning d-none"
                          >
                            Nothing found.
                          </div>
                          <div
                            id="palleon-templates-grid"
                            class="palleon-grid template-grid template-selection paginated"
                            // class="palleon-grid template-grid paginated"
                            data-perpage="21"
                          >
                            {template
                              .filter((item) => selectedCategory === 'all' || item.categoryName === selectedCategory)
                              .map((item, index) => {
                                return (
                                  <TemplateCard
                                    key={index}
                                    item={item}
                                    index={index}
                                  />
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/**      <div id="palleon-templates-favorites" class="palleon-tab">
                      <div
                        class="palleon-grid template-grid template-selection paginated"
                        data-perpage="21"
                      >
                        <div
                          class="grid-item"
                          data-keyword="Blog Banner - 2240x1260px"
                          data-category="blog-banners"
                        >
                          <div class="template-favorite">
                            <button
                              type="button"
                              class="palleon-btn-simple star"
                              data-templateid=""
                            >
                              <span class="material-icons">star</span>
                            </button>
                          </div>
                          <div
                            class="palleon-masonry-item-inner palleon-select-template"
                            data-json="files/templates/json/25.json"
                          >
                            <div class="palleon-img-wrap">
                              <div class="palleon-img-loader"></div>
                              <img
                                class="lazy"
                                data-src="files/templates/img/25.jpg"
                                title="Blog Banner - 2240x1260px"
                              />
                            </div>
                            <div class="palleon-masonry-item-desc">
                              Blog Banner - 2240x1260px
                            </div>
                          </div>
                        </div>
                        <div
                          class="grid-item"
                          data-keyword="Modern Collage - 2 Photos - 2000x1300px"
                          data-category="collage"
                        >
                          <div class="template-favorite">
                            <button
                              type="button"
                              class="palleon-btn-simple star"
                              data-templateid=""
                            >
                              <span class="material-icons">star</span>
                            </button>
                          </div>
                          <div
                            class="palleon-masonry-item-inner palleon-select-template"
                            data-json="files/templates/json/20.json"
                          >
                            <div class="palleon-img-wrap">
                              <div class="palleon-img-loader"></div>
                              <img
                                class="lazy"
                                data-src="files/templates/img/20.jpg"
                                title="Modern Collage - 2 Photos - 2000x1300px"
                              />
                            </div>
                            <div class="palleon-masonry-item-desc">
                              Modern Collage - 2 Photos - 2000x1300px
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="palleon-mytemplates" class="palleon-tab">
                      <div id="palleon-my-templates-menu">
                        <div></div>
                        <div class="palleon-search-box">
                          <input
                            type="search"
                            class="palleon-form-field"
                            placeholder="Search by title..."
                            autocomplete="off"
                          />
                          <button
                            id="palleon-my-templates-search"
                            type="button"
                            class="palleon-btn primary"
                          >
                            <span class="material-icons">search</span>
                          </button>
                        </div>
                      </div>
                      <ul
                        id="palleon-my-templates"
                        class="palleon-template-list template-selection paginated"
                        data-perpage="10"
                      >
                        <li data-keyword="my template 1">
                          <div>My Template 1</div>
                          <div>
                            <button
                              type="button"
                              class="palleon-btn primary palleon-select-template"
                              data-json="files/templates/json/1.json"
                            >
                              <span class="material-icons">check</span>Select
                            </button>
                            <button
                              type="button"
                              class="palleon-btn danger palleon-template-delete"
                              data-target="files/templates/json/1.json"
                            >
                              <span class="material-icons">clear</span>Delete
                            </button>
                          </div>
                        </li>
                        <li data-keyword="my template 2">
                          <div>My Template 2</div>
                          <div>
                            <button
                              type="button"
                              class="palleon-btn primary palleon-select-template"
                              data-json="files/templates/json/2.json"
                            >
                              <span class="material-icons">check</span>Select
                            </button>
                            <button
                              type="button"
                              class="palleon-btn danger palleon-template-delete"
                              data-target="files/templates/json/1.json"
                            >
                              <span class="material-icons">clear</span>Delete
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div
                        id="palleon-my-templates-noimg"
                        class="notice notice-warning d-none"
                      >
                        Nothing found.
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div id="modal-blank-canvas" class="palleon-tab">
                <div class="palleon-control-group">
                  <div>
                    <label>Size</label>
                    <select
                      id="palleon-canvas-size-select"
                      class="palleon-select"
                      autocomplete="off"
                    >
                      <option
                        selected
                        value="custom"
                        data-width="800"
                        data-height="800"
                      >
                        Custom
                      </option>
                      <option value="" data-width="2240" data-height="1260">
                        Blog Banner
                      </option>
                      <option value="" data-width="851" data-height="315">
                        Facebook Cover
                      </option>
                      <option value="" data-width="1200" data-height="628">
                        Facebook Ad
                      </option>
                      <option value="" data-width="1080" data-height="1080">
                        Instagram Post
                      </option>
                      <option value="" data-width="750" data-height="1120">
                        Pinterest Post
                      </option>
                      <option value="" data-width="940" data-height="788">
                        Facebook Post
                      </option>
                      <option value="" data-width="1600" data-height="900">
                        Twitter Post
                      </option>
                      <option value="" data-width="1280" data-height="720">
                        Youtube Thumbnail
                      </option>
                      <option value="" data-width="1920" data-height="1080">
                        Wallpaper
                      </option>
                    </select>
                  </div>
                  <div>
                    <label>Width</label>
                    <input
                      id="palleon-canvas-width"
                      class="palleon-form-field"
                      type="number"
                      value="800"
                      data-min="1"
                      data-max="10000"
                      autocomplete="off"
                    />
                  </div>
                  <div>
                    <label>Height</label>
                    <input
                      id="palleon-canvas-height"
                      class="palleon-form-field"
                      type="number"
                      value="800"
                      data-min="1"
                      data-max="10000"
                      autocomplete="off"
                    />
                  </div>
                  <div>
                    <label>Background</label>
                    <input
                      id="palleon-canvas-color"
                      type="text"
                      class="palleon-colorpicker allow-empty"
                      autocomplete="off"
                      value=""
                    />
                  </div>
                  <div>
                    <button
                      id="palleon-canvas-create"
                      type="button"
                      class="palleon-btn primary"
                    >
                      <span class="material-icons">done</span>Create
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

export default ModelAddNew;
