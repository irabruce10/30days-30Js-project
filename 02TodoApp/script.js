const form = document.getElementById("todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const element = document.querySelector(".todoInput");
  console.log(element);

  if (element.value === " ") {
    alert("Please add something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = element.value;
    document.querySelector(".todoList").appendChild(li);
  }
});
