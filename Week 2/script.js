// Select using getElementById
const p1 = document.getElementById("para1");
p1.textContent = "Selected using getElementById";
p1.style.color = "blue";
p1.style.fontWeight = "bold";

// Select using querySelector
const p2 = document.querySelector("#para2");
p2.textContent = "Selected using querySelector";
p2.style.color = "green";
p2.style.fontSize = "20px";

// Select using querySelectorAll
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p, index) => {
  if (index === 2) {
    p.textContent = "Selected using querySelectorAll";
    p.style.color = "red";
    p.style.backgroundColor = "lightyellow";
    p.style.padding = "8px";
  }
});
