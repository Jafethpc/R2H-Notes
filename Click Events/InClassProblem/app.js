let mainNum = document.querySelector(".mainNum").innerHTML;

document.querySelector(".lessButton").addEventListener("click", function () {
  if (mainNum >= 1) {
    mainNum--;
    document.querySelector(".mainNum").innerHTML = mainNum;
  }
});

document.querySelector(".moreButton").addEventListener("click", function () {
  mainNum++;
  document.querySelector(".mainNum").innerHTML = mainNum;
});
