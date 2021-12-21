// * an app similar to sketchpad and an etch a sketch

// create a div


for(i = 1; i <= 256; i++) {
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
}
