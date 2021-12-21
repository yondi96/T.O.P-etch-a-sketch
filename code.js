// * an app similar to sketchpad and an etch a sketch

// create a div


for(i = 0; i <= 256; i++) {
  const div = document.createElement("div");

  div.style.height = "40px";
  div.style.width = "40px";
  div.style.background = "red";
  div.style.border = "1px solid black"

  div.classList.add("test");

  document.querySelector(".grid-container").appendChild(div);
}
