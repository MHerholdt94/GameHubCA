const container = document.querySelector(".product-info");
const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const key = "?key=4a1968e972224713863186ae4b4cae2a";

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id + key;

const corsUrl = "https://noroffcors.herokuapp.com/" + url;

console.log(url);

async function gameDetails() {
  try {
    const response = await fetch(corsUrl);

    const game = await response.json();

    console.log(game);

    title.innerHTML = `GAME HUB - The Universe of Games | ${game.name}`;

    container.innerHTML = `<div class="product-info__image">
                                <img src="${game.background_image}" alt="Video Game Screenshot" class="main-image">
                                <div>
                                <img src="${game.background_image}" alt="Video Game Screenshot" class="second-image">
                                <img src="${game.background_image}" alt="Video Game Screenshot" class="second-image">
                                <img src="${game.background_image}" alt="Video Game Screenshot" class="second-image">
                                <img src="${game.background_image}" alt="Video Game Screenshot" class="second-image">
                                </div>
                            </div>
                            <section class="product-info__text">
                                <h1>${game.name}</h1>
                                <div class="product-tags"><span>${game.tags[0].name}</span> <span>${game.tags[2].name}</span> <span>${game.tags[3].name}</span> <span>${game.tags[4].name}</span></div>
                                <div>
                                    <div class="stars-outer">
                                        <div style="width:${game.metacritic}%" class="stars-inner"</div>
                                    </div>
                                </div> <a href="${game.metacritic_url}">${game.ratings_count} reviews</a>
                                <ul>
                                    <li>Developer: ${game.developers[0].name}</li>
                                    <li>Publisher: ${game.publishers[0].name}</li>
                                    <li>Genre: ${game.genres[0].name}</li>
                                    <li>Release date: ${game.released}</li>
                                </ul>

                                ${game.description}
                               
                                <p>Still not sure? <a href="${game.website}">Read more...</a></p>
                                <div class="product-radio">
                                    <div class="buying-options">
                                        <h6>Buying options</h6>
                                        <input type="radio" name="buy-option" id="new" checked>
                                        <input type="radio" name="buy-option" id="used">

                                        <label for="new">Buy new<p class="opt-new">399,-</p></label>
                                        <label for="used">Buy used<p class="opt-used">199,-</p></label>
                                        <div class="product-radio__text">
                                        <p>Get in touch with a seller on our <a href="marketplace.html">Marketplace</a>!</p>
                                        </div>
                                    </div>
                                    <div class="product-radio__quick">
                                        <h6>Quick buy</h6>
                                        <input type="radio" name="copy" id="physical">
                                        <input type="radio" name="copy" id="digital" checked>

                                        <label for="physical">Physical</label>
                                        <label for="digital">Digital*</label>
                                        <p>*digital copy unavailable if purchasing used game</p>
                                    </div>
                                    <div>
                                        <h6>Platform</h6>
                                        <input type="radio" name="platform" id="plat1">
                                        <input type="radio" name="platform" id="plat2" checked>
                                        <input type="radio" name="platform" id="plat3">
                                        <input type="radio" name="platform" id="plat4">

                                        <label for="plat1">PC</label>
                                        <label for="plat2">Xbox</label>
                                        <label for="plat3">PlayStation</label>
                                        <label for="plat4">Switch</label>
                                    </div>
                                    <div class="product-radio__finish">
                                        <p>399,-</p>
                                        <a href="checkout.html" class="prod-cart cta">Add to cart</a>
                                    </div>
                                </div>
                            </section>`;
  } catch (error) {
    console.log(error);
  }
}

gameDetails();
