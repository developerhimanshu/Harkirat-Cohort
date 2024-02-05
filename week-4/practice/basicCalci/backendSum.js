async function getSum() {
  let n1Input = document.getElementById("n1");
  let n2Input = document.getElementById("n2");
  let n1 = parseInt(n1Input.value);
  let n2 = parseInt(n2Input.value);
  let para = document.getElementById("para");
  const data = await fetch(
    `https://sum-server.100xdevs.com/sum?a=${n1}&b=${n2}`
  );
  const sum = await data.text();
  para.innerHTML = sum;
}
