// * an app similar to sketchpad and an etch a sketch

// default size of box
let currentGridSize = 16;
changeGridTemplate();


// generate boxes
// ! put this is a function
for(i = 1; i <= (currentGridSize * currentGridSize); i++) {
  // create a div
  const div = document.createElement("div");

  // style the small box
  div.style.background = "green";
  div.style.border = "1px solid black"

  // give classes to divs
  div.classList.add(`grid-item${i}`); // different class name
  div.classList.add("grid-items");    // same class name

  // add div to grid-container 256 times (because of the loop)
  document.querySelector(".grid-container").appendChild(div);

  // add event listener to each box
  // change color of the specific box when mouse hovers
  div.addEventListener("mouseover", () => {
    div.style.background = "black";
  })
}

const clearGrid = document.querySelector(".clear");

clearGrid.addEventListener("click", () => {
  let numberOfBox = prompt("How many sides do you want?");
  if(numberOfBox != null && numberOfBox != "" && !isNaN(numberOfBox) && numberOfBox <= 100) {
    currentGridSize = numberOfBox;
    changeGridTemplate();
  } else if(numberOfBox > 100) {
    console.log("limit of 100x100");
  }
})


function changeGridTemplate() {
  // remove allboxes before this

  document.querySelector(".grid-container").style.gridTemplateColumns = `repeat(${currentGridSize}, 25px)`;
  document.querySelector(".grid-container").style.gridTemplateRows = `repeat(${currentGridSize}, 25px)`;

  // ! remove classes(boxes) that are not needed
}