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
  },
  methods: {
    init() {
      const _this = this;
      this.swiper = new Swiper('.swiper-container', {
        speed: 800,
        preventClicksPropagation: false,
        height: window.screen.height,
        direction: "vertical",
        // 切换开始时
        onSlideChangeStart: function(swiper){
          _this.swiperIndex = swiper.activeIndex;
        },
      });
    },
    // 加载图表
    initEchart(el, config) {
      const echart = echarts.init(el);
      echart.setOption(formatEchartOption(config));
    }
  },
});
