document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.querySelector(
    ".product-final .product-final-second .quantity .up-and-down p"
  );

  // Function to update the counter value
  function updateCounter(increase) {
    let currentValue = parseInt(counterElement.textContent);

    // Check if it's an increase or decrease and update accordingly
    if (increase) {
      currentValue += 1;
    } else {
      // Ensure the minimum value is 1
      currentValue = Math.max(currentValue - 1, 1);
    }

    counterElement.textContent = currentValue;
  }

  // Event listener for the increase button
  document
    .querySelector(
      ".product-final .product-final-second .quantity .up-and-down a .fa-caret-right"
    )
    .addEventListener("click", function (event) {
      event.preventDefault();
      updateCounter(true);
    });

  // Event listener for the decrease button
  document
    .querySelector(
      ".product-final .product-final-second .quantity .up-and-down a .fa-caret-left"
    )
    .addEventListener("click", function (event) {
      event.preventDefault();
      updateCounter(false);
    });
});

function toggleContent(showId, hideId) {
  const showElement = document.getElementById(showId);
  const hideElement = document.getElementById(hideId);

  if (showElement && hideElement) {
    showElement.style.display = "block";
    hideElement.style.display = "none";
  }
}

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
