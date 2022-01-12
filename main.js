let link = document.querySelectorAll("a");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", function () {
    link[i].classList.add("links");
  });

  link[i].addEventListener("mouseout", function () {
    link[i].classList.remove("links");
  });
}
