new Vue({
    el: "#vue-app",
    data: {
        name: "Gian",
        job: "Teacher"
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}`
        }
    }
})