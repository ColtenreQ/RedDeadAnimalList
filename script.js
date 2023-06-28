
let animalForm = document.getElementById('animalForm');
let testSubmit = document.getElementById('testButton');

let animalName;
let itemName;
let amountName;
let listArray = [];

animalForm.addEventListener("submit", (animalStuff) => {
  animalStuff.preventDefault();

  animalName = document.getElementById('animalName').value;
  itemName = document.getElementById('itemName').value;
  amountName = document.getElementById('amount').value;

  listArray = [animalName, itemName, amountName];

  let htmlTable = document.getElementById("animalList");

  let tr = document.createElement("tr");
  tr.className = "tableRow";
  htmlTable.appendChild(tr);
  for (i = 0; i < listArray.length; i++) {
    let td = document.createElement("td");
    td.innerText = listArray[i];
    td.className = "items";
    htmlTable.appendChild(td);
  }

});



