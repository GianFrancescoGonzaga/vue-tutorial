let app = new Vue({
    el: "#vue-app",
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function() {
        },
        logAge: function() {
            console.log('You entered your age')
        }
    }
})