const categoryBtn = document.getElementById("categoryBtn");
const categoryMenu = document.getElementById("categoryMenu");

if (categoryBtn && categoryMenu) {
  categoryBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    categoryMenu.classList.toggle("active");
  });

  const categoryLinks = categoryMenu.querySelectorAll("a");

  categoryLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      categoryMenu.classList.remove("active");
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = categoryMenu.contains(event.target);
    const isClickOnButton = categoryBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      categoryMenu.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      categoryMenu.classList.remove("active");
    }
  });
}

const playBtn = document.getElementById("playBtn");
const videoBox = document.getElementById("videoBox");
const closeVideoBtn = document.getElementById("closeVideoBtn");

if (playBtn && videoBox && closeVideoBtn) {
  playBtn.addEventListener("click", function () {
    videoBox.classList.add("active");
  });

  closeVideoBtn.addEventListener("click", function () {
    videoBox.classList.remove("active");
  });
}

const topBtn = document.getElementById("topBtn");

if (topBtn) {
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}