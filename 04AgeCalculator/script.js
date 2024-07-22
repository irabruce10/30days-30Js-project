let btn = document.querySelector(".btn");

let iptValue = document.getElementById("date");
iptValue.max = new Date().toISOString().split("T")[0];

let para = document.querySelector(".para");

function calcAge() {
  let bday = new Date(iptValue.value);

  let d1 = bday.getDate();
  let m1 = bday.getMonth() + 1;
  let y1 = bday.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getMonthDay(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  para.innerHTML = `You are <span>${y3}</span>   years, <span>${m3}</span> months,and <span>${d3}</span> days old`;
}

function getMonthDay(year, month) {
  return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", calcAge);
