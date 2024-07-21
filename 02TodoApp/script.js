const form = document.getElementById("todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const element = document.querySelector(".todoInput");

  if (element.value === "") {
    console.log("Please add New Task  ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = element.value;
    document.querySelector(".todoList").appendChild(li);
    element.value = "";
  }
});
