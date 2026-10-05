const li = document.querySelectorAll(".lilist");


li.forEach((item) => {
  const icon = item.querySelector(".icon");
  const par = item.querySelector(".par");

  item.addEventListener("click", () => {
    par.classList.toggle("active");
    icon.textContent = icon.textContent === "+" ? "-" : "+";
  });
});
