const slides = document.querySelectorAll("#slider .slide");
let curSlide = 0;

let marksList = document.querySelector("#marksList");
for (let i = 0; i < slides.length; i++) {
  let mark = document.createElement("li");
  marksList.appendChild(mark);
}
document.querySelectorAll("#marksList li")[0].className = "active";

let interval = setInterval(Slide, 3000);

function Slide() {
  let prevSlide = (curSlide - 1) % slides.length;
  if (prevSlide < 0) {
    prevSlide = slides.length - 1;
    slides[prevSlide].className = "slide";
  } else {
    slides[prevSlide].className = "slide";
  }
  slides[curSlide].className = "slide out";
  document.querySelectorAll("#marksList li")[curSlide].className = "";
  curSlide = (curSlide + 1) % slides.length;
  slides[curSlide].className = "slide show";
  document.querySelectorAll("#marksList li")[curSlide].className = "active";
}

const next = document.querySelector("#next");
next.addEventListener("click", () => {
  Slide();
  clearInterval(interval);
});

const prev = document.querySelector("#prev");
prev.addEventListener("click", () => {
  slides[curSlide].className = "slide";
  let prevSlide = (curSlide - 2) % slides.length;
  if (prevSlide < 0) {
    prevSlide === -1
      ? (prevSlide = slides.length - 1)
      : (prevSlide = slides.length - 2);
    slides[prevSlide].className = "slide out";
  } else {
    slides[prevSlide].className = "slide out";
  }
  document.querySelectorAll("#marksList li")[curSlide].className = "";
  if (curSlide - 1 < 0) {
    curSlide = slides.length - 1;
    slides[curSlide].className = "slide show";
  } else {
    curSlide = (curSlide - 1) % slides.length;
    slides[curSlide].className = "slide show";
  }
  document.querySelectorAll("#marksList li")[curSlide].className = "active";
  clearInterval(interval);
});

const controls = document.querySelector("#controls");
controls.addEventListener("mouseover", () => {
  document.querySelector("#controls ul").classList.add("tabsActive");
});

controls.addEventListener("mouseout", () => {
  document.querySelector("#controls ul").classList.remove("tabsActive");
});

// cart
$(document).ready(function () {
  // Ẩn ban đầu phần carts
  $(".carts").hide();

  // Xử lý sự kiện khi nhấp vào liên kết "Cart"
  $(".cart-action").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    $(".carts").toggle(); // Hiển thị hoặc ẩn phần carts
  });

  // Xử lý sự kiện khi nhấp vào liên kết "Close" hoặc "Continue shopping" bên trong carts
  $(".carts .close, .carts a[href='/']").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    $(".carts").hide(); // Ẩn phần carts
  });
});

// Sign In
// document.addEventListener("DOMContentLoaded", function() {
//   var signInButton = document.querySelector('.btnLogin_popup');
//   var container = document.getElementById('loginContainer');

//   // Hiển thị hoặc ẩn container khi click vào nút Sign In
//   signInButton.addEventListener('click', function() {
//     container.style.display = (container.style.display === 'block') ? 'none' : 'block';
//   });

//   // Ẩn container khi click bên ngoài vùng đó
//   document.addEventListener('click', function(event) {
//     var isClickInsideContainer = container.contains(event.target) || signInButton.contains(event.target);
//     if (!isClickInsideContainer) {
//       container.style.display = 'none';
//     }
//   });
// });

