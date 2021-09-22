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

function format_S_Data(originData) {
  const s = {};
}

function format_C_Data(originData) {
  const start = 2000;

  const c = {
    trading: originData.length,
    tradingL: 0,
    tradingS: 0,
    sum: 0,
    sumL: 0,
    sumS: 0,
    rate: '',
    maxWin: 0,
    maxLose: 0,
  };
  
  originData.forEach(item => {
    c.sum += item.pro;
    if (item.pro > c.maxWin) {
      c.maxWin = item.pro;
    }
    if (item.pro < c.maxLose) {
      c.maxLose = item.pro;
    }
    if (item.type == 'l') {
      c.tradingL += 1;
      c.sumL += item.pro;
    }
    if (item.type == 's') {
      c.tradingS += 1;
      c.sumS += item.pro;
    }
  })

  c.rate = ((c.sum * 100) / start).toFixed(0) + '%';
  console.log(c)
  return c;
}

function formatCharData(originData) {
  const xAxisData = [], seriesData = [];
  let value = 0;
  originData.forEach(item => {
    value += item.pro;
    seriesData.push(value);
    xAxisData.push(item.isCont ? item.eTime : `${item.eTime}/${item.lTime}`);
  })
  return { xAxisData, seriesData };
}


function formatEchartOption(config) {
  return {
    title: { text: config.title },
    grid: { left: '0', right: '0', bottom: '0', top: '0', containLabel: true },
    xAxis: { show: false, boundaryGap: false, data: config.xAxisData},
    yAxis: { show: false, type: 'value' },
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
        markPoint: {
          data: [{ type: 'max', name: 'Max' }]
        },
        data: config.seriesData
      }
    ]
  }
}