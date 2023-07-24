/** @format */
let screen = document.querySelector(".screen");
let btns = document.querySelectorAll(".btnValue");
let sum = document.querySelector(".sum");
let minus = document.querySelector(".minus");
let vurma = document.querySelector(".vurma");
let bolme = document.querySelector(".bolme");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");

// ! function click ----------------

let leftScreen = "";
let rightScreen = "";
let operator = "";
let clickOperator = 0;

btns.forEach((element) => {
  if (clickOperator == 0) {
    element.addEventListener("click", (e) => {
      leftScreen += element.value;
      screen.innerHTML = leftScreen;
    });
  }
});

// *----------------------------------------------------------

// ! SUM FUNCTION -----------------------------------------------------------------------------------------

function sumNumbers(e) {
  if (clickOperator == 0) {
    operator += "+";
    clickOperator += 1;
    leftScreen += "+";
    screen.innerHTML = leftScreen;
    if (clickOperator !== 0) {
      btns.forEach((element) => {
        element.addEventListener("click", (e) => {
          rightScreen += element.value;
        });
      });
    }
  } else {
    alert("siz artiq operator secmisiniz");
  }
}

function minusNumbers(e) {
  if (clickOperator == 0) {
    operator += "-";
    clickOperator += 1;
    leftScreen += "-";
    screen.innerHTML = leftScreen;
    if (clickOperator !== 0) {
      btns.forEach((element) => {
        element.addEventListener("click", (e) => {
          rightScreen += element.value;
        });
      });
    }
  } else {
    alert("siz artiq operator secmisiniz");
  }
}

function vurmaNumbers() {
  if (clickOperator == 0) {
    operator += "*";
    clickOperator += 1;
    leftScreen += "*";
    screen.innerHTML = leftScreen;
    if (clickOperator !== 0) {
      btns.forEach((element) => {
        element.addEventListener("click", (e) => {
          rightScreen += element.value;
        });
      });
    }
  } else {
    alert("siz artiq operator secmisiniz");
  }
}

function bolmeNumbers() {
  if (clickOperator == 0) {
    operator += "/";
    clickOperator += 1;
    leftScreen += "/";
    screen.innerHTML = leftScreen;
    if (clickOperator !== 0) {
      btns.forEach((element) => {
        element.addEventListener("click", (e) => {
          rightScreen += element.value;
        });
      });
    }
  } else {
    alert("siz artiq operator secmisiniz");
  }
}

function clearFunction() {
  screen.innerHTML = "";
  leftScreen = "";
  rightScreen = "";
  operator = "";
  clickOperator = 0;
}

// ! SUM FUNCTION -----------------------------------------------------------------------------------------
// ?-------------------------------------------------------------------------------------------------------
// ! RESULT FUNCTION --------------------------------------------------------------------------------------
function resultNumbers() {
  let arrayLeft = [];
  let arrayRigth = [];
  if (operator == "+") {
    for (let i = 0; i < leftScreen.length; i++) {
      if (leftScreen[i] !== "+") {
        arrayLeft.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    for (let i = leftScreen.length - 1; i > 1; i--) {
      if (leftScreen[i] !== "+") {
        arrayRigth.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    let result =
      Number(arrayLeft.join("")) + Number(arrayRigth.reverse().join(""));
    screen.innerHTML = result;
  }
  if (operator == "-") {
    for (let i = 0; i < leftScreen.length; i++) {
      if (leftScreen[i] !== "-") {
        arrayLeft.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    for (let i = leftScreen.length - 1; i > 1; i--) {
      if (leftScreen[i] !== "-") {
        arrayRigth.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    let result =
      Number(arrayLeft.join("")) - Number(arrayRigth.reverse().join(""));
    screen.innerHTML = result;
  }
  if (operator == "*") {
    for (let i = 0; i < leftScreen.length; i++) {
      if (leftScreen[i] !== "*") {
        arrayLeft.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    for (let i = leftScreen.length - 1; i > 1; i--) {
      if (leftScreen[i] !== "*") {
        arrayRigth.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    let result =
      Number(arrayLeft.join("")) * Number(arrayRigth.reverse().join(""));
    screen.innerHTML = result;
  }
  if (operator == "/") {
    for (let i = 0; i < leftScreen.length; i++) {
      if (leftScreen[i] !== "/") {
        arrayLeft.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    for (let i = leftScreen.length - 1; i > 1; i--) {
      if (leftScreen[i] !== "/") {
        arrayRigth.push(Number(leftScreen[i]));
      } else {
        break;
      }
    }

    let result =
      Number(arrayLeft.join("")) / Number(arrayRigth.reverse().join(""));
    screen.innerHTML = result;
  }
}

// ! RESULT FUNCTION --------------------------------------------------------------------------------------

sum.addEventListener("click", () => {
  sumNumbers();
});

minus.addEventListener("click", () => {
  minusNumbers();
});

vurma.addEventListener("click", () => {
  vurmaNumbers();
});

bolme.addEventListener("click", () => {
  bolmeNumbers();
});

result.addEventListener("click", () => {
  resultNumbers();
});

clear.addEventListener("click", () => {
  clearFunction();
});

// *----------------------------------------------------------
