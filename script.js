const formSearch = document.querySelector("form");
const searchInput = document.querySelector("#searchInput");
const searchContainer = document.querySelector(".search-container");
const showMore = document.querySelector(".showmore");

let page = 1;

const accessKey = "RTYCsdH8gWV_XDZt5WfUso4OAkuXzbNExgRaRcrosbo";

async function search() {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput.value}&client_id=${accessKey}`;
  let response = await fetch(url);
  let data = await response.json();

  const results = data.results;

  results.map((el) => {
    let img = document.createElement("img");
    img.src = el.urls.small;
    let imageLink = document.createElement("a");
    imageLink.href = el.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(img)
    searchContainer.appendChild(imageLink);
  });

  console.log(data);
}

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  page=1
  search();
});

console.log(searchInput);
