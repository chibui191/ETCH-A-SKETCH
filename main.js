const sketchpad = document.querySelector('#sketchpad');
const DEFAULT_SIZE = 16;

const btnReset = document.getElementById('btn-reset');
btnReset.addEventListener('click', reset);

const btnColor = document.getElementById('colorPicker');

function reset() {
  desiredSize = prompt("How many squares per side?");
  deleteSquare();
  createSketchpad(desiredSize);
}

function deleteSquare() {
  var child = sketchpad.lastElementChild;  
  while (child) { 
    sketchpad.removeChild(child); 
    child = sketchpad.lastElementChild; 
  }
}

function createSketchpad(size) {
  const squareSize = 576 / size;

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style['width'] = `${squareSize}px`;
      square.style['height'] = `${squareSize}px`;
      square.style['border'] = `${squareSize / 100}px solid white`;
      sketchpad.appendChild(square);

      square.addEventListener('mouseover', () => {
        square.classList.add("colored"); 
        square.style.backgroundColor = btnColor.style.backgroundColor; 
      });
    }
  }
}

function uncolor() {
  let squares = sketchpad.children;
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i];
    if (square.classList.contains("colored")) {
      square.classList.remove("colored");
    }
  }
}

window.addEventListener("load", () => {
  createSketchpad(DEFAULT_SIZE);
});


