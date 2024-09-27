const keys = document.querySelector(".calc-keys");
const display = document.getElementById("display");

keys.addEventListener("click", (event) => {
  let target = event.target;

  if (!target.matches("button")) {
    return false;
  }

  if (target.classList.contains("equal")) {
    try {
      let result = eval(display.value);
      if (result !== undefined) display.value = result;
      
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("You have an error, I will remove your operation");
        display.value = "";
      }
    }
  } else if (target.classList.contains("all-clear")) {
    display.value = "";
  } else {
    display.value += target.value;
  }
});
