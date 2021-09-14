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


function formatTime(str) {
  const arr = str.split("-");
  return { y: Number(arr[0]), m: Number(arr[1]), d: Number(arr[2]) };
}


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


function formatEchartOption(config) {
  return {
    title: { text: config.text },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: [{ show: false, boundaryGap: false, data: config.xAxisData}],
    yAxis: [{ show: false }],
    series: [
      {
        type: 'line',
        lineStyle: { width: 0 },
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: 'rgba(' + config.color + ', 0)'
          }, {
            offset: 0,
            color: 'rgba(' + config.color + ')'
          }])
        },
        data: config.seriesData
      }
    ]
  }
}