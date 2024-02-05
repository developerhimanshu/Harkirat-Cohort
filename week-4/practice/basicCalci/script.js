let n1Input = document.getElementById("n1");
let n2Input = document.getElementById("n2");
let b1 = document.getElementById("b1");

b1.addEventListener("click", () => {
  let n1 = parseInt(n1Input.value);
  let n2 = parseInt(n2Input.value);

  let para = document.getElementById("para");
  para.innerHTML = n1 + n2;
});
