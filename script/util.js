(function(){
  function initFontSize() {
    const designWidth = 750;
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const width = htmlWidth > 540 ? 540 : htmlWidth;
    document.getElementsByTagName("html")[0].style.fontSize = (width / designWidth) * 100 + "px";
  }
  initFontSize();
  window.addEventListener("resize", initFontSize, false);
})()

function formatNum(n) {
  if (n < 1000) {
    return Math.floor(n);
  } else {
    const str = String(Math.floor(n)).split("").reverse();
    const res = [];
    for (let i = 0; i < str.length; i++) {
      res.push(str[i]);
      if ((i + 1) % 3 == 0 && (i + 1) != str.length) res.push(",");
    }
    return res.reverse().join("");
  }
}

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}