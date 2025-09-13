function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function createGridLines(num){
  for (i=0; i<num; i++){
    let newRow = document.createElement("div")
    newRow.classList.add("flexRow")
    flexContainer.appendChild(newRow)
  }
}

function createGridBoxes(num){
  for (const row of flexRow){
    for (i=0; i<num; i++){
    let newDiv = document.createElement("div")
    newDiv.classList.add("gridbox")
    row.append(newDiv)
    }
  }
}

function fillColour(){
  for (const box of GridBox){
    box.addEventListener("mouseover", function(){
    box.style.backgroundColor = getRandomRgb()
  })
  }
}

function createNewGrid() {
  createGrid.addEventListener("click", function(){
  let inputValue = promptCreate.value
  if (inputValue <= 100){
    flexContainer.innerHTML = ""
    createGridLines(inputValue)
    createGridBoxes(inputValue)
    fillColour()
  } else {
    alert ("Number must be less than 100!")
  }
  })
}

const flexContainer = document.getElementById("flex-container")
const flexRow = document.getElementsByClassName("flexRow")
const GridBox = document.getElementsByClassName("gridbox")
const promptCreate = document.getElementById("prompt-create")
const createGrid = document.getElementById("create-grid")

createGridLines(16)
createGridBoxes(16)
fillColour()
createNewGrid()





