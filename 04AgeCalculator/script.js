let btn = document.querySelector(".btn");

let iptValue = document.getElementById("date");

// btn.addEventListener("click", () => {
//   let bday = new Date(iptValue.value);

//   let d1 = bday.getDate();

//   console.log(d1);
//   let today = new Date();
//   console.log(bday);
// });

function calcAge() {
  let bday = new Date(iptValue.value);

  let d1 = bday.getDate();

  console.log(d1);
  let today = new Date();
  console.log(bday);
}
