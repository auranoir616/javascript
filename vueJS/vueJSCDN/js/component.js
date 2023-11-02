Vue.component("custom", {
  template:
    '<div v-on:mouseover ="changename" v-on:mouseout="firstname"><h1>name : <span id="name">{{name}}</span></h1></div>',
  data: function () {
    return {
      name: "wawan",
    };
  },
  methods: {
    changename: function () {
      this.name = "wahyu";
    },
    firstname: function () {
      this.name = "bambang";
    },
  },
});

var custom1 = new Vue({
  el: "#component",
});

var custom2 = new Vue({
  el: "#component2",
});
