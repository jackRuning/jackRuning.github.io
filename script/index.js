new Vue({
  el: "#app",
  data() {
    return {
      msg: "111",
      boxIndex: [],
    };
  },
  mounted() {
    showTextAni("userName", 1);
    showTextAni("userIntro", 0);
    this.initScroll();
  },
  methods: {
    // 初始化滚动监听
    initScroll() {
      const clientHeight = document.documentElement.clientHeight;
      let lastTop = 1;
      window.onscroll = () => {
        const currentTop = Math.floor(document.documentElement.scrollTop);
        if (Math.abs(currentTop - lastTop) < 100) return null;
        lastTop = currentTop;
        // 展示第 1 个模块
        if (
          !this.boxIndex.includes(1) &&
          currentTop > clientHeight * (1 - 0.3)
        ) {
          this.boxIndex.push(1);
          this.showOverviewBox();
        }
        // 展示第 2 个模块
        if (
          !this.boxIndex.includes(2) &&
          currentTop > clientHeight * (2 - 0.3)
        ) {
          this.boxIndex.push(2);
          this.showStructureBox();
        }
      };
    },
    // 展示第 1 个模块
    showOverviewBox() {
      showTextAni("overviewTitle", 1);
    },
    // 展示第 2 个模块
    showStructureBox() {
      showTextAni("structureTitle", 1);
    },
  },
});
