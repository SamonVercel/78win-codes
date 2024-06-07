var menuBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-btn");
var menuList = document.getElementById("menu-list");

menuBtn.onclick = function () {
  menuList.classList.add("padding");
  closeBtn.style.top = "30px";
};

closeBtn.onclick = function () {
  menuList.classList.remove("padding");
  closeBtn.style.top = "-20px";
};
