new Vue({
  el: "#app",
  data() {
    return {
      swiper: null,
      swiperIndex: 0,
      showDataType: ''
    };
  },
  mounted() {
    this.init();
    this.initInfo_C();
  },
  methods: {
    init() {
      const _this = this;
      this.swiper = new Swiper('.swiper-container', {
        speed: 800,
        noSwiping: true,
        noSwipingClass: 'stop-swiping',
        preventClicksPropagation: false,
        height: window.screen.height,
        direction: "vertical",
        onSlideChangeStart: function(swiper){
          _this.swiperIndex = swiper.activeIndex;
        },
      });
    },
    summaryClick(type) {
      this.showDataType = type;
      this.swiper.slideNext();
      this.initInfo()
    },
    initInfo() {
      const type = this.showDataType;
      switch (type) {
        case "C": this.initInfo_C();
      }
    },
    initInfo_C() {
      const originData = DATA_C;

      const {} = format_C_Data(originData);

      const { xAxisData, seriesData } = formatCharData(DATA_C)
      const ehcartConfig = {
        title: '',
        color: '255, 116, 106',
        xAxisData: xAxisData,
        seriesData: seriesData
      }
      this.initEchart("chart_c", ehcartConfig);
    },
    /**
     * 
     * @param {*} el: dom
     * @param {*} config: object
     * config: {
     *  title: string,
     *  color: string,
     *  xAxisData: array,
     *  seriesData: array
     * }
     */
    initEchart(el, config) {
      const echart = echarts.init(document.getElementById(el));
      echart.setOption(formatEchartOption(config));
    },
    // 
  },
});
