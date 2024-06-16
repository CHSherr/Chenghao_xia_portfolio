function add() {
  const newDiv = document.createElement("div");
  newDiv.className = "teko-test";
  const newParagraph = document.createElement("p");
  const srcText = document.getElementById("input").innerHTML;
  newParagraph.innerHTML = srcText;
  newParagraph.classList.add("teko-p");
  const newButton = document.createElement("button");
  newButton.innerHTML = "-";
  newButton.classList.add("teko-button-delete");
  newButton.setAttribute("onclick", "deletion(this)");

  newDiv.appendChild(newParagraph);
  newDiv.appendChild(newButton);

  const targetElement = document.getElementById("input");
  const parentElement = targetElement.parentNode;
  parentElement.insertBefore(newDiv, targetElement);
}

function deletion(button) {
  const targetElement = button.parentElement;
  if (targetElement) {
    targetElement.remove();
  }
}
