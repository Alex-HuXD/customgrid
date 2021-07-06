$(document).ready(function () {
  $("#init-form").on("submit", creatGrid);
  $("#add-box").on("click", addBoxIntoGrid);
  $("#reset-grid").on("click", resetCurrentGrid);
  $("#reset-size").on("click", createNewGrid);
});

let boxCounter = 1;

function creatGrid(e) {
  e.preventDefault();
  const userName = e.target[0].value;
  const gridNumber = e.target[1].value;
  const custonGridNumber = e.target[2].value;

  // create grid based on user input data
  if (custonGridNumber) {
    $("#grid").css("grid-template-columns", `repeat(${custonGridNumber},1fr)`);
  } else {
    $("#grid").css("grid-template-columns", `repeat(${gridNumber},1fr)`);
  }

  // set grid's name, reset init-form and hide it from user's view, also shows the grid with 3 function btns
  $("#grid-title").text(`${userName}'s Grid`);
  $("#init-form").trigger("reset");
  $(".grid-initiator").hide();
  $(".grid-container").show();
}

// btns actions

// create a new box and add into grid
function addBoxIntoGrid() {
  const boxContainer = $(
    '<div class="box-container" id="box-container"></div>'
  );
  const newBox = $(`<div class="box" id="box">${boxCounter}</div>`);
  boxCounter++;
  const deleteBtn = $(
    '<button class="remove-box" id="remove-box" title="click to delete">X</button>'
  );
  deleteBtn.on("click", deleteBox);

  boxContainer.append(newBox);
  boxContainer.append(deleteBtn);
  $(".grid").append(boxContainer);
  console.log("one box has been added into your grid");
}

// delete a box
function deleteBox(e) {
  e.target.parentNode.remove();
}

// clear the current grid without modify columns
function resetCurrentGrid() {
  $(".grid").empty();
  boxCounter = 1;
  console.log("Your current grid has been reset");
}

//clear current grid, reset column number, back to creat new grid section
function createNewGrid() {
  boxCounter = 1;
  $(".grid").empty();
  $(".grid").css("grid-template-columns", "");
  $(".grid-container").hide();
  $(".grid-initiator").show();
  console.log("back to grid creation view");
}
