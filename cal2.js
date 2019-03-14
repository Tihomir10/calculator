var x;
var y;
var operator;
var sum;

const num = document.querySelector("rez");
const div1 = document.createElement('div');
const div2 = document.createElement("div");
const div3 = document.createElement("div")
div1.classList.add('div');
div2.classList.add('div2');
div3.classList.add('div3');
rez.appendChild(div1);
rez.appendChild(div2);
rez.appendChild(div3);


var multi = document.querySelector("#multi");
multi.addEventListener("click", () => {
  if (sum == undefined || x == sum) {
    div1.textContent +=  "*"
  }
  if (y !== undefined) {
    operate();
    console.log(sum)
    div2.textContent = sum;
    x = sum
    y = undefined
  }
  operator = "*";
});


var plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  div1.textContent = x;
  if (sum == undefined || x == sum) {
    div1.textContent +=  "+"
  }
  if (y !== undefined) {
    operate();
    console.log(sum)
    div2.textContent = sum;
    x = sum
    y = undefined
  }
  operator = "+";
});

var minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
  if (sum == undefined || x == sum) {
    div1.textContent +=  "-"
  }
  if (y !== undefined) {
    operate();
    console.log(sum)
    div2.textContent = sum;
    x = sum
    y = undefined
  }
  operator = "-";
})

var slash = document.querySelector("#divide");
slash.addEventListener("click", () => {
  if (sum == undefined || x == sum) {
    div1.textContent +=  "/"
  }
  if (y !== undefined) {
    operate();
    console.log(sum)
    div2.textContent = sum;
    x = sum
    y = undefined
  }
  operator = "/";
})

var egal = document.querySelector("#egal");
egal.addEventListener("click", () => {
  operate();
  div1.textContent = "";
  div2.textContent = sum;
  x = undefined;
  y = undefined;
  operator = undefined
  console.log(x,y)
});

var c = document.querySelector("#c");
c.addEventListener("click", () => {
  div1.textContent = "";
  div2.textContent = "";
  x = undefined;
  y = undefined;
  operator = undefined
  console.log(x,y)
});

function add() {
  sum = parseInt(x) + parseInt(y);
}

function subtract() {
  sum = x - y;
}

function multiply() {
  sum = x * y;
}

function divide() {
  sum = x / y;
}

function operate() {
  if (operator == "+") {
    add();
    return sum;
  }
  if (operator == "-") {
    subtract();
    return sum
  }
  if (operator == "*") {
    multiply();
    return sum
  }
  if (operator == "/") {
    divide();
    return sum
  }
};

var zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 0;
    x = div2.textContent;
    div1.textContent += 0
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 0;
    y = div2.textContent;
    div1.textContent += 0
  }
  console.log(x,y)
});

var one = document.querySelector('#one');
one.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 1;
    x = div2.textContent;
    div1.textContent += 1
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 1;
    y = div2.textContent;
    div1.textContent += 1
  }
  console.log(x,y)
});

var two = document.querySelector('#two');
two.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 2;
    x = div2.textContent;
    div1.textContent += 2
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 2;
    y = div2.textContent;
    div1.textContent += 2
  }
  console.log(x,y)
});

var three = document.querySelector('#three');
three.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 3;
    x = div2.textContent;
    div1.textContent += 3
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 3;
    y = div2.textContent;
    div1.textContent += 3
  }
  console.log(x,y)
});

var four = document.querySelector('#four');
four.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 4;
    x = div2.textContent;
    div1.textContent += 4
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 4;
    y = div2.textContent;
    div1.textContent += 4
  }
  console.log(x,y)
});

var five = document.querySelector('#five');
five.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 5;
    x = div2.textContent;
    div1.textContent += 5
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 5;
    y = div2.textContent;
    div1.textContent += 5
  }
  console.log(x,y)
});

var six = document.querySelector('#six');
six.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 6;
    x = div2.textContent;
    div1.textContent += 6
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 6;
    y = div2.textContent;
    div1.textContent += 6
  }
  console.log(x,y)
});


var seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 7;
    x = div2.textContent;
    div1.textContent += 7
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 7;
    y = div2.textContent;
    div1.textContent += 7
  }
  console.log(x,y)
});
var eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  }*/
  if (operator == undefined) {
    div2.textContent += 8;
    x = div2.textContent;
    div1.textContent += 8
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 8;
    y = div2.textContent;
    div1.textContent += 8
  }
  console.log(x,y)
});
var nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  if (div2.textContent == sum) {
    div2.textContent = ""
    sum = undefined;
  }
  /*if (sum == undefined) {
    div1.textContent += div2.textContent
  } */
  if (operator == undefined) {
    div2.textContent += 9;
    x = div2.textContent;
    div1.textContent += 9
  } else {
    if (div2.textContent == x) {
      div2.textContent = ""
    }
    div2.textContent += 9;
    y = div2.textContent;
    div1.textContent += 9
  }
  console.log(x,y)
});
