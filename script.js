function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
  
    if (color == "#000000") {
      for (let elm of txt) {
        elm.style.color = "white";
      }
    } else {
      for (let elm of txt) {
        elm.style.color = "black";
      }
    }
  }

  let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;

  hr = 0;
  min = 0;
  sec = 0;
  Count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("Count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let CountString = count;

    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      CountString = "0" + CountString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("Count").innerHTML = CountString;

    setTimeout("stopwatch()", 10);
  }
}


let chang = 0;

function controller(x) {
  chang = chang + x;
  slideshow(chang);
}

slideshow(chang);

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");

  if (num == slides.length) {
    chang = 0;
    num = 0;
  }

  if (num < 0) {
    chang = slides.length - 1;
    num = slides.length - 1;
  }
  console.log(slides);

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";
}


