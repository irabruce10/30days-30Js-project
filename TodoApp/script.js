const form = document.getElementById("todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const element = document.querySelector(".todoInput").value;
  console.log(element);
});
