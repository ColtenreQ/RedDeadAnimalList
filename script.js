
let animalForm = document.getElementById('animalForm');
let gunButton = document.getElementById('gunButton');
let htmlTable = document.getElementById("animalList");

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

  console.log(listArray);

  
  if (listArray[0] == '' ||  listArray[1] == '' || listArray[2] == '') {
    alert("Please add all 3 inputs.");
  } else {
    gunShoot();

    let tr = document.createElement("tr");
    tr.className = "tableRow";
    htmlTable.appendChild(tr);
    
    for (i = 0; i < listArray.length; i++) {
      let td = document.createElement("td");
      td.innerText = listArray[i];
      td.className = "items";
      htmlTable.appendChild(td);
    }
  }
});

function gunShoot() {
  gunButton.classList.add('buttonClicked');
}

gunButton.addEventListener("animationend", (gunShootDone) => {
  gunShootDone.preventDefault();

  gunButton.classList.remove('buttonClicked');

})


//this is a test
