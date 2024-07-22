let btn = document.querySelector(".btn");

let iptValue = document.getElementById("date");

console.log(iptValue);

let g = document.getElementById("g");

btn.addEventListener("click", () => {
  console.log(iptValue.value);
  console.log(g.value);
});

console.log(g.value);

// btn.addEventListener("click", () => {
//   let bday = new Date(iptValue.value);

//   let d1 = bday.getDate();

//   console.log(d1);
//   let today = new Date();
//   console.log(bday);
// });

// function calcAge() {
//   let bday = new Date(iptValue.value);
//   console.log(bday);

//   let d1 = bday.getDate();
//   let m1 = bday.getMonth() + 1;
//   let y1 = bday.getFullYear();

//   let today = new Date();

//   let d2 = today.getDate();
//   let m2 = today.getMonth() + 1;
//   let y2 = today.getFullYear();

//   let y3 = y2 - y1;

//   console.log(y3);

//   console.log(today);
// }

// btn.addEventListener("click", calcAge);
