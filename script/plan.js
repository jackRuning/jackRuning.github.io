(function(){
  const STIME = "2021-08-09";
  const SUSDT = 220;
  const DRATE = 0.05;
  const OFFSET = 0.4;

  const ETIME = getMonthAfter();

  window.PLANDATA = [];
  window.initPlanData = initPlanData();
  function initPlanData() {
    const et = formatTime(ETIME);
    const now = formatTime(getNowFormatDate());
    let { y, m, d } = formatTime(STIME);

    let bU = SUSDT;
    let sU = bU;
    let cU = bU;
    let eU = 0;
    let oU = 0;
    function loop() {
      let get = null;
      if (cU >= bU * 2) {
        oU += Math.floor(cU * 0.3);
        cU = cU - Math.floor(cU * 0.3);
        get = formatNum(oU);
        bU = cU;
        sU = cU;
        eU = 0;
      } else {
        if (eU >= sU * OFFSET) {
          sU = sU + eU;
          eU = 0;
        }
      }
      const u = sU * DRATE;
      cU += u;
      eU += u;

      if (
        (y == now.y && m == now.m && d >= now.d) || (y == now.y && m > now.m) || (y > now.y)
      ) {
        PLANDATA.push({
          time: `${y}-${m > 9 ? m : "0" + m}-${d > 9 ? d : "0" + d}`,
          tar: formatNum(u),
          cur: formatNum(cU),
          get: get
        })
      }

      if (y >= et.y && m >= et.m && d >= et.d) {
        return null
      };

      if (d == 28) {
        d = 1;
        if (m == 12) {
          y += 1;
          m = 1;
        } else {
          m += 1;
        }
      } else {
        d += 1;
      }
      loop();
    }
    loop();
  }

  function formatTime(str) {
    const arr = str.split("-");
    return { y: Number(arr[0]), m: Number(arr[1]), d: Number(arr[2]) };
  }

  function getMonthAfter() {
    let today = new Date(getNowFormatDate()).getTime();
    let lastDay = today + 60 * 60 * 1000 * 24 * 30;
    let lastTime =new Date(lastDay).toISOString().split('T')[0];
    return lastTime
  }
})(window)