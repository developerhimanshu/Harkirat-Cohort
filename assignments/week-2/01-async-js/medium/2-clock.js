function counter() {
  setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.clear();
    console.log(`${hour % 12} : ${minute} : ${second}`);
    console.log(
      `${hour % 12} : ${minute} : ${second} ${hour <= 12 ? "AM" : "PM"}`
    );
  }, 1000);
}
counter();
