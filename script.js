"use strict";
let mustang = document.querySelector(".mustangwindow");
let showMustang = document.querySelector(".showmustang");
const mustangOpen = function () {
  mustang.classList.remove("hidden");
};
showMustang.addEventListener("click", mustangOpen);
console.log(mustangOpen);
