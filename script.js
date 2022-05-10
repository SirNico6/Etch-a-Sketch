const cellContainer = document.querySelector("#cellsContainer");
const selectBox = document.getElementById("selectBox");

function makeRows(rows, cols) {
    cellContainer.style.setProperty('--grid-rows', rows);
    cellContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
               cell.style.backgroundColor = 'black';
          });
        cellContainer.appendChild(cell).className = "grid-item";
    };
};

function changeFunc() {
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    cellContainer.innerHTML = '';
    switch (selectedValue) {
        case "1":
            makeRows(8, 8);
            break;
        case "2":
            makeRows(16, 16);
            break;
        case "3":
            makeRows(32,32);
            break;
        case "4":
            makeRows(64, 64);
            break;
        default:
            alert("Error");
    }
   }

function reset() {
    cellContainer.innerHTML = '';
    changeFunc();
}
  
makeRows(8, 8);