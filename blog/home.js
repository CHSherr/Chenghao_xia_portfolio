function myFunction() {
  const srcText = document.getElementById("input").innerHTML;
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = srcText;
  newParagraph.classList.add("teko-p");
  const targetElement = document.getElementById("input");
  const parentElement = targetElement.parentNode;
  parentElement.insertBefore(newParagraph, targetElement);
}
