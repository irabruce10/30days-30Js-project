const formSearch = document.querySelector("form");
const searchInput = document.querySelector("#searchInput");
const searchContainer = document.querySelector(".search-container");
const showMore = document.querySelector("#showmore");

let page = 1;

const accessKey = "RTYCsdH8gWV_XDZt5WfUso4OAkuXzbNExgRaRcrosbo";

async function search() {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput.value}&client_id=${accessKey}&per_page=12`;
  let response = await fetch(url);
  let data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchContainer.innerHTML = "";
    showMore.style.display = "none";
  }

  results.map((el) => {
    let img = document.createElement("img");
    img.src = el.urls.small;
    let imageLink = document.createElement("a");
    imageLink.href = el.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(img);
    searchContainer.appendChild(imageLink);
  });

  showMore.style.display = "block";
}

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  search();
});

showMore.addEventListener("click", () => {
  page++;

  search();
});
