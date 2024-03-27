
const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("#addButton");

function addToList() {
    newItem = input.value;

    if (newItem !== "") {
      const newList = document.createElement("li");
      const newSpan = document.createElement("span");
      const newButton = document.createElement("button");

      newList.appendChild(newSpan);
      newList.appendChild(newButton);

      newSpan.textContent = newItem;
      newButton.textContent = "Delete";

      list.appendChild(newList);

      newButton.addEventListener("click", function(e) {
        list.removeChild(newList); 
      });
    }

    input.value = ""; // Clear the input field
    input.focus(); // Focus the input field for entering the next item
  }

addButton.addEventListener("click", addToList);