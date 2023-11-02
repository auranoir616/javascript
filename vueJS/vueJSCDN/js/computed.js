var vm = new Vue({
    el: "#computedprops",
    data: {
        message: "wahyu makan durian di kebun"
    },
    computed: {
        reversedmessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})