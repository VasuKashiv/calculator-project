var buton = document.getElementsByClassName("grid-item");
var out = document.getElementById("out");

var op1 = 0;
var op2 = null;
var operator = null;

for (let index = 0; index < buton.length; index++) {
  buton[index].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+") {
      operator = "+";
      op1 = parseFloat(out.textContent);
      out.innerText = null;
    } else if (value == "-") {
      operator = "-";
      op1 = parseFloat(out.textContent);
      out.innerText = null;
    } else if (value == "*") {
      operator = "*";
      op1 = parseFloat(out.textContent);
      out.innerText = null;
    } else if (value == "/") {
      operator = "/";
      op1 = parseFloat(out.textContent);
      out.innerText = null;
    } else if (value == "%") {
      op1 = parseFloat(out.textContent);

      out.innerText = eval(op1 / 100);
    } else if (value == "+-") {
      op1 = parseFloat(out.textContent);

      if (op1 > 0) {
        out.innerText = "-" + op1;
      } else out.innerText = eval(Math.abs(op1));
    } else if (value == ".") {
      op1 += ".";
      out.innerText += ".";
    } else if (value == "Clear") {
      op1 = 0;
      op2 = null;
      operator = null;
      out.innerText = "";
    } else if (value == "=") {
      op2 = parseFloat(out.textContent);
      out.innerText = eval(op1 + " " + operator + "" + op2);
    } else {
      out.innerText += value;
    }
  });
}
