function createGridLines(){
  const flexContainer = document.getElementById("flex-container")
  for (i=0; i<16; i++){
    let newRow = document.createElement("div")
    newRow.classList.add("flexRow")
    flexContainer.appendChild(newRow)
  }
}

function createGridBoxes(){
  const flexRow = document.getElementsByClassName("flexRow")
  for (const row of flexRow){
    for (i=0; i<16; i++){
    let newDiv = document.createElement("div")
    row.append(newDiv)
    }
  }
}

createGridLines()
createGridBoxes()



