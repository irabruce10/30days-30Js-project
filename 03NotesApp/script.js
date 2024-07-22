const btn = document.querySelector(".btn");
const txt = document.querySelector(".input-note");
const containerNote = document.querySelector(".container-note");

btn.addEventListener("click", () => {
  let inputNote = document.createElement("p");
  inputNote.setAttribute("contenteditable", "true");
  inputNote.className = "input-note";
  let img = document.createElement("img");
  img.src = "./images/icons8-delete-30.png";

  containerNote.appendChild(inputNote).appendChild(img);
});

containerNote.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();
  }
});

let a = prompt("enter your number");
function run(a) {
  let res = a * 60 * 24;
  console.log(`The number of minutes in ${a} days is ${res}.`);
  return res;
}

run(a);
