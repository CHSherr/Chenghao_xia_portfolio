document.getElementById("work").addEventListener("click", function () {
  this.classList.remove("unselected");
  this.classList.add("selected");
  document.getElementById("about").classList.remove("selected");
  document.getElementById("about").classList.add("unselected");
  document.getElementById("gallery").classList.remove("selected");
  document.getElementById("gallery").classList.add("unselected");
  console.log("work");
  moveLightbar();
  document.getElementById("work-section").style.display = "grid";

  document.getElementById("gallery-section").style.display = "none";
  document.getElementById("about-content").style.display = "none";
});

document.getElementById("about").addEventListener("click", function () {
  this.classList.remove("unselected");
  this.classList.add("selected");
  document.getElementById("work").classList.remove("selected");
  document.getElementById("work").classList.add("unselected");
  document.getElementById("gallery").classList.remove("selected");
  document.getElementById("gallery").classList.add("unselected");
  console.log("about");
  moveLightbar();

  document.getElementById("work-section").style.display = "none";
  document.getElementById("gallery-section").style.display = "none";
  document.getElementById("about-content").style.display = "block";
});

document.getElementById("gallery").addEventListener("click", function () {
  this.classList.remove("unselected");
  this.classList.add("selected");
  document.getElementById("work").classList.remove("selected");
  document.getElementById("work").classList.add("unselected");
  document.getElementById("about").classList.remove("selected");
  document.getElementById("about").classList.add("unselected");
  console.log("gallery");
  moveLightbar();
  document.getElementById("gallery-section").style.display = "grid";
  document.getElementById("work-section").style.display = "none";
  document.getElementById("about-content").style.display = "none";
});

function moveLightbar() {
  const target = document.querySelector(".selected");
  const lightbar = document.getElementById("lightbar");
  const shadow = document.getElementById("shadow");
  const rect = target.getBoundingClientRect();
  const bar = lightbar.getBoundingClientRect();
  const shadowRect = shadow.getBoundingClientRect();

  lightbar.style.left = rect.left + 0.5 * rect.width - 0.5 * bar.width + "px";

  lightbar.style.top = rect.top - 9 + "px";
  shadow.style.left =
    rect.left + 0.5 * rect.width - 0.5 * shadowRect.width + "px";
  shadow.style.top = rect.top - 9 + "px";
}
moveLightbar();

window.addEventListener("resize", moveLightbar);

// window.addEventListener("mousemove", function (e) {
//   const follower = document.getElementById("follower");
//   follower.style.left = e.clientX - 15 + "px";
//   follower.style.top = e.clientY - 15 + "px";
// });
