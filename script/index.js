new Vue({
  el: "#app",
  data() {
    return {
      swiper: null,
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
        onInit: function(){},
        // 切换开始时
        onSlideChangeStart: function(swiper){
          _this.swiperIndex = swiper.activeIndex;
        },
        // 切换结束时
        onSlideChangeEnd: function(swiper) {
          _this.hiddenIndex = swiper.activeIndex;
        }
      });
    }
  },
});
