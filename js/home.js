const container = document.querySelector(".featured");
const productsList = document.querySelectorAll(".products-list");
const featuredList = document.querySelector(".featured-list");
const recommendedList = document.querySelector(".recommended-list");
const saleList = document.querySelector(".sale-list");

const url =
  "https://api.rawg.io/api/games?key=4a1968e972224713863186ae4b4cae2a";

async function apiCall() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;

    for (let i = 0; i < productsList.length; i++) {
      productsList[i].innerHTML = "";
    }

    for (let i = 0; i < results.length; i++) {
      if (i === 5) {
        break;
      }

      const game = results[i];

      featuredList.innerHTML += `<div class="product">
                                    <img src="${game.short_screenshots[0].image}">
                                    <h5>${game.name}</h5>
                                    <p>${game.genres[0].name}</p>
                                    <span class="price">599,-</span>
                                    <a href="product.html?id=${game.id}" class="cta">View</a>
                                  </div>`;
    }

    for (let i = 5; i < results.length; i++) {
      if (i === 10) {
        break;
      }

      const game = results[i];

      recommendedList.innerHTML += `<div class="product">
                                        <img src="${game.short_screenshots[0].image}">
                                        <h5>${game.name}</h5>
                                        <p>${game.genres[0].name}</p>
                                        <span class="price">599,-</span>
                                        <a href="product.html?id=${game.id}" class="cta">View</a>
                                      </div>`;
    }

    for (let i = 10; i < results.length; i++) {
      if (i === 15) {
        break;
      }

      const game = results[i];

      saleList.innerHTML += `<div class="product">
                                <img src="${game.short_screenshots[0].image}">
                                <h5>${game.name}</h5>
                                <p>${game.genres[0].name}</p>
                                <span class="sale__price">299,-</span><span class="price">599,-</span>
                                <a href="product.html?id=${game.id}" class="cta">View</a>
                              </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

apiCall();
