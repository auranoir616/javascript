var vm = new Vue({
    el: "#watchprops",
    data: {
        kilometers: 0,
        meters: 0
    },
    watch: {
        kilometers: function(value){
            this.kilometers = value;
            this.meters = value * 1000
        },
        meters: function(value){
            this.kilometers = value / 1000;
            this.meters = value
        }
    }
})