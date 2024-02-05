let timeout;
function debouncedGetInterest() {
  clearInterval(timeout);
  timeout = setInterval(getInterest(), 100);
}

async function getInterest() {
  let n1Input = document.getElementById("n1");
  let n2Input = document.getElementById("n2");
  let n3Input = document.getElementById("n3");
  let n1 = parseInt(n1Input.value);
  let n2 = parseInt(n2Input.value);
  let n3 = parseInt(n3Input.value);
  let total = document.getElementById("total");
  let interest = document.getElementById("interest");

  const rawdata = await fetch(
    `https://sum-server.100xdevs.com/interest?principal=${n1}&rate=${n2}&time=${n3}`
  );
  const data = await rawdata.json();
  total.innerHTML = data.total;
  interest.innerHTML = data.interest;
}
