class Calculator{
  Constructor(previous, current){
    this.previous = previous;
    this.current = current;
    this.operation = "";
  }

  //takes in a string and appends it to the current selection, if it is not a duplicate "."
  appendNumber(button){
    if(button === "." && this.current.includes(".")){
      return;
    }else{
      this.current = `${this.current}${button}`;
    }
  }

  //Changes the operation to the inputted string, appends it to the previous selection, and clears the current selection.
  //if both previous and current selections have already been entered, solves the problem and readies for next problem
  selectOperation(button){
    if(this.previous === "" && this.current === "" || this.current === "."){
      return;
    }else if(this.previous !== "" && this.current === ""){
      this.operation = `${button}`;
      this.previous = `${this.previous.toString().slice(0, -1)}${this.operation}`;
      this.current = "";
      return;
    }else if(this.previous !== "" && this.current !== ""){
      this.solveProblem();
    }
      this.operation = `${button}`;
      this.previous = `${this.current}${this.operation}`;
      this.current = "";
  }

  //resets the calculator to empty strings
  clearDisplay(){
    this.previous = "";
    this.current = "";
    this.operation = "";
  }

  //deletes one character from the current selection
  backSpace(){
    this.current = this.current.toString().slice(0, -1);
  }

  //modifies the current selection based on inputted button
  calcModifier(button){
    let curr = parseFloat(this.current);
    if (isNaN(curr)) return;
    if (button === "√"){
      this.current = Math.sqrt(parseFloat(this.current));
    }else if(button === "1/X"){
      this.current = 1 / parseFloat(this.current);
    }else if(button === "+/-"){
      this.current = -this.current;
    }
  }

  //Solves the inputted problem if both selections are numbers
  solveProblem(){
    let prev = parseFloat(this.previous.slice(0, -1));
    let curr = parseFloat(this.current);
    if (isNaN(prev) || isNaN(curr)) return;
    if (this.operation === "*"){
      this.current = prev * curr;
    }else if(this.operation === "/"){
      this.current = prev / curr;
    }else if(this.operation === "+"){
      this.current = prev + curr;
    }else if(this.operation === "-"){
      this.current = prev - curr;
    }else if(this.operation === "%"){
      this.current = prev % curr;
    }else if(this.operation === "^"){
      this.current = prev ** curr;
    }else{
      return;
    }
    this.operation = "";
    this.previous = "";
  }

  //updates the display in the document
  updateDisplay(){
    document.querySelector("[data-previous]").innerText = this.previous;
    document.querySelector("[data-current]").innerText = this.current;
  }
}

const calculator = new Calculator("", "");
const anim = Array.from(document.querySelectorAll('button'));
calculator.clearDisplay();


//If the user clicks a number button - appends the number to the current and updates the display.
document.querySelectorAll("[data-num]").forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    button.classList.add('clicked');
  })
})

//If the user clicks an operation number - updates the operation and display.
document.querySelectorAll("[data-op]").forEach(button => {
  button.addEventListener("click", () => {
    calculator.selectOperation(button.innerText);
    calculator.updateDisplay();
    button.classList.add('clicked');
  })
})

//If the user clicks on an input-modifier function, calculates it and updates the display.
document.querySelectorAll("[data-modifier]").forEach(button => {
  button.addEventListener("click", () => {
    calculator.calcModifier(button.innerText);
    calculator.updateDisplay();
    button.classList.add('clicked');
  })
})

//If the user clicks equals - solves the problem and updates the display.
document.querySelector("[data-equals]").addEventListener("click", button =>{
  calculator.solveProblem();
  calculator.updateDisplay();
  document.querySelector("[data-equals]").classList.add('clicked');
})

//If the user clicks clear - resets the calculator and updates the display.
document.querySelector("[data-clear]").addEventListener("click", button =>{
  calculator.clearDisplay();
  calculator.updateDisplay();
  document.querySelector("[data-clear]").classList.add('clicked');
})

//If the user clicks delete - removes a character from the current selection and updates the display.
document.querySelector("[data-delete]").addEventListener("click", button =>{
  calculator.backSpace();
  calculator.updateDisplay();
  document.querySelector("[data-delete]").classList.add('clicked');
})

//"unpresses" the button at the end of the on-click animation.
function removeTransition(button) {
  if (button.propertyName !== 'transform') return;
  button.target.classList.remove('clicked');
}

anim.forEach(button => button.addEventListener('transitionend', removeTransition));
