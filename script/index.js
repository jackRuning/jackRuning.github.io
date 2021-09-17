new Vue({
  el: "#app",
  data() {
    return {
      swiper: null,
      swiperIndex: 0,
      plan_end_time: '',
    };
  },
  mounted() {
    this.init();
    formatContData(DATA_C)
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
      this.swiper.slideNext()
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
      const echart = echarts.init(el);
      echart.setOption(formatEchartOption(config));
    },
    // 
  },
});
