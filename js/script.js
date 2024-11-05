// YOUR CODE HERE
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");
const output5 = document.getElementById("output5");

// btn1
btn1.addEventListener("click", () => {
  output1.style.color = "red";
});

//btn2
const sevondp = document.createElement("p");
sevondp.textContent = "Hello World";
btn2.addEventListener("click", () => {
  output2.append(sevondp);
});

//btn3
const smallText = document.querySelector(".small-text");
btn3.addEventListener("click", () => {
  smallText.style.display = "none";
});

//btn4
btn4.addEventListener("click", () => {
  output4.style.color = "red";
});

//btn5
const input = document.getElementById("message");
btn5.addEventListener("click", () => {
  console.log(input.value);
});
