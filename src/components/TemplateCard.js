import React from "react";

function TemplateCard({ index, item }) {
  // console.log(item);
  return (
    <>
      <div
        class="grid-item"
        data-keyword={`Blog Banner - 2240x1260px-${index + 1}`}
        data-category="blog-banners"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border-{index}</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json={`https://api.thesolarsign.com/uploades/${item.designImageJson.filename}`}
        >
          <div class="palleon-img-wrap">
            <div></div>
            <img
              alt="templateImages"
              // class="lazy"
              src={`https://api.thesolarsign.com/uploades/${item.designImage.filename}`}
              title="Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            {item.designName}
            {index + 1}
          </div>
        </div>
      </div>

      {/**     <div
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
            <span class="material-icons">star_border</span>
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
      <div
        class="grid-item"
        data-keyword="Youtube Video Thumbnail - 1280x720px"
        data-category="youtube-thumbnail"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/15.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/15.jpg"
              title="Youtube Video Thumbnail - 1280x720px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Youtube Video Thumbnail - 1280x720px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Black Friday Banner - Leaderboard - 728x90px"
        data-category="leaderboard"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/23.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/23.jpg"
              title="Black Friday Banner - Leaderboard - 728x90px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Black Friday Banner - Leaderboard - 728x90px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Trending Music Video - Youtube Thumbnail - 1280x720px"
        data-category="youtube-thumbnail"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/14.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/14.jpg"
              title="Trending Music Video - Youtube Thumbnail - 1280x720px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Trending Music Video - Youtube Thumbnail - 1280x720px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Kids Style Collage - 2 Photos - 2000x2000px"
        data-category="collage"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/18.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/18.jpg"
              title="Kids Style Collage - 2 Photos - 2000x2000px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Kids Style Collage - 2 Photos - 2000x2000px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Cafe Banner - Billboard - 970x250px"
        data-category="billboard"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/28.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/28.jpg"
              title="Cafe Banner - Billboard - 970x250px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Cafe Banner - Billboard - 970x250px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Beauty - Leaderboard - 728x90px"
        data-category="leaderboard"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/36.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/36.jpg"
              title="Beauty - Leaderboard - 728x90px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Beauty - Leaderboard - 728x90px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Digital Agency Banner - Leaderboard - 728x90px"
        data-category="leaderboard"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/43.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/43.jpg"
              title="Digital Agency Banner - Leaderboard - 728x90px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Digital Agency Banner - Leaderboard - 728x90px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Happy Birthday - Facebook Post - 940x788px"
        data-category="facebook-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/29.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/29.jpg"
              title="Happy Birthday - Facebook Post - 940x788px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Happy Birthday - Facebook Post - 940x788px
          </div>
        </div>
      </div>
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
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/27.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/27.jpg"
              title="Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Blog Banner - 2240x1260px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Collage - 3 Photos - 2000x2000px"
        data-category="collage"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/16.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/16.jpg"
              title="Collage - 3 Photos - 2000x2000px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Collage - 3 Photos - 2000x2000px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Banner - Twitter Post - 1600x900px"
        data-category="twitter-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/39.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/39.jpg"
              title="Banner - Twitter Post - 1600x900px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Banner - Twitter Post - 1600x900px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Christmas Sale - Instagram Post - Square - 1080x1080px"
        data-category="instagram-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/12.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/12.jpg"
              title="Christmas Sale - Instagram Post - Square - 1080x1080px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Christmas Sale - Instagram Post - Square - 1080x1080px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Quote - Instagram Post - 1080x1080px"
        data-category="instagram-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/32.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/32.jpg"
              title="Quote - Instagram Post - 1080x1080px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Quote - Instagram Post - 1080x1080px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Modern Collage - 3 Photos - 2000x2000px"
        data-category="collage"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/22.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/22.jpg"
              title="Modern Collage - 3 Photos - 2000x2000px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Modern Collage - 3 Photos - 2000x2000px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Quote - 900x600px"
        data-category="quote"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/4.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/4.jpg"
              title="Quote - 900x600px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Quote - 900x600px</div>
        </div>
      </div>
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
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/26.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/26.jpg"
              title="Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Blog Banner - 2240x1260px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Sale Banner - Instagram Post - Discount Offer - Square - 1080x1080px "
        data-category="instagram-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/1.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/1.jpg"
              title="Sale Banner - Instagram Post - Discount Offer - Square - 1080x1080px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Sale Banner - Instagram Post - Discount Offer - Square - 1080x1080px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Summer Sale - Facebook Ad - 1200x628px "
        data-category="facebook-ads"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/10.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/10.jpg"
              title="Summer Sale - Facebook Ad - 1200x628px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Summer Sale - Facebook Ad - 1200x628px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Kids Style Collage - 2 Photos - 2000x1300px "
        data-category="collage"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/17.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/17.jpg"
              title="Kids Style Collage - 2 Photos - 2000x1300px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Kids Style Collage - 2 Photos - 2000x1300px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Happy Childrens Day - Facebook Post - 940x788px"
        data-category="facebook-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/33.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/33.jpg"
              title="Happy Childrens Day - Facebook Post - 940x788px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Happy Childrens Day - Facebook Post - 940x788px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Fitness Banner - Medium Rectangle - 300x250px "
        data-category="banner-ads"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/6.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/6.jpg"
              title="Fitness Banner - Medium Rectangle - 300x250px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Fitness Banner - Medium Rectangle - 300x250px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Quote - Twitter Post - 1600x900px "
        data-category="quote"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/37.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/37.jpg"
              title="Quote - Twitter Post - 1600x900px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Quote - Twitter Post - 1600x900px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Real Estate - Facebook Post - 940x788px "
        data-category="facebook-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/41.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/41.jpg"
              title="Real Estate - Facebook Post - 940x788px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Real Estate - Facebook Post - 940x788px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Sale Banner - Facebook Ad - 1200x628px "
        data-category="facebook-ads"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/11.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/11.jpg"
              title="Sale Banner - Facebook Ad - 1200x628px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Sale Banner - Facebook Ad - 1200x628px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Collage - 5 Photos - 2000x1000px"
        data-category="collage"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/21.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/21.jpg"
              title="Collage - 5 Photos - 2000x1000px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Collage - 5 Photos - 2000x1000px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Fitness Banner - Medium Rectangle - 300x250px"
        data-category="banner-ads"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/7.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/7.jpg"
              title="Fitness Banner - Medium Rectangle - 300x250px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Fitness Banner - Medium Rectangle - 300x250px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Quote - 800x600px"
        data-category="quote"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/3.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/3.jpg"
              title="Quote - 800x600px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Quote - 800x600px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Business Banner - Instagram Post - 1080x1080px"
        data-category="instagram-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/42.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/42.jpg"
              title="Business Banner - Instagram Post - 1080x1080px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Business Banner - Instagram Post - 1080x1080px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Business Facebook Post - 940x788px "
        data-category="facebook-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/13.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/13.jpg"
              title="Business Facebook Post - 940x788px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Business Facebook Post - 940x788px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="App Banner - 2000x1300px"
        data-category="banner-ads"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/5.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/5.jpg"
              title="App Banner - 2000x1300px"
            />
          </div>
          <div class="palleon-masonry-item-desc">App Banner - 2000x1300px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Business Blog Banner - 2240x1260px"
        data-category="blog-banners"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/34.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/34.jpg"
              title="Business Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Business Blog Banner - 2240x1260px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Valentines Day - Instagram Post - Square - 1080x1080px"
        data-category="instagram-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/2.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/2.jpg"
              title="Valentines Day - Instagram Post - Square - 1080x1080px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Valentines Day - Instagram Post - Square - 1080x1080px
          </div>
        </div>
      </div>
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
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/30.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/30.jpg"
              title="Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Blog Banner - 2240x1260px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Stylish Collage - 3 Photos - 2000x2000px "
        data-category="collage"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/19.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/19.jpg"
              title="Stylish Collage - 3 Photos - 2000x2000px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Stylish Collage - 3 Photos - 2000x2000px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Pet Shop Banner - Billboard - 970x250px"
        data-category="billboard"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/9.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/9.jpg"
              title="Pet Shop Banner - Billboard - 970x250px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Pet Shop Banner - Billboard - 970x250px
          </div>
        </div>
      </div>
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
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/35.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/35.jpg"
              title="Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Blog Banner - 2240x1260px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Christmas Banner - Leaderboard - 728x90px "
        data-category="leaderboard"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/24.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/24.jpg"
              title="Christmas Banner - Leaderboard - 728x90px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Christmas Banner - Leaderboard - 728x90px
          </div>
        </div>
      </div>
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
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/38.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/38.jpg"
              title="Blog Banner - 2240x1260px"
            />
          </div>
          <div class="palleon-masonry-item-desc">Blog Banner - 2240x1260px</div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Fashion Banner - Facebook Ad - 1200x628px "
        data-category="facebook-ads"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/40.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/40.jpg"
              title="Fashion Banner - Facebook Ad - 1200x628px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Fashion Banner - Facebook Ad - 1200x628px
          </div>
        </div>
      </div>
      <div
        class="grid-item"
        data-keyword="Quote - Twitter Post - 1600x900px "
        data-category="twitter-post"
      >
        <div class="template-favorite">
          <button
            type="button"
            class="palleon-btn-simple star"
            data-templateid=""
          >
            <span class="material-icons">star_border</span>
          </button>
        </div>
        <div
          class="palleon-masonry-item-inner palleon-select-template"
          data-json="files/templates/json/31.json"
        >
          <div class="palleon-img-wrap">
            <div class="palleon-img-loader"></div>
            <img
              class="lazy"
              data-src="files/templates/img/31.jpg"
              title="Quote - Twitter Post - 1600x900px"
            />
          </div>
          <div class="palleon-masonry-item-desc">
            Quote - Twitter Post - 1600x900px
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TemplateCard;
