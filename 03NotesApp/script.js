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
