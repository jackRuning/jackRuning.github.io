new Vue({
  el: "#app",
  data() {
    return {
      plan_end_time: '',
      num: 0,
      num2: 40,
    };
  },
  mounted() {
    anime({
      targets: "#plan_item_box > div",
      delay: function(el, i) { return i * 100 },
      duration: 1000,
      easing: "easeOutSine",
      translateY: ["80px", "0"],
      opacity: [ 0, 1 ]
    });
  },
  methods: {

  },
});
