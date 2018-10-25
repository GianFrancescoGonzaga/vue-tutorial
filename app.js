new Vue({
    el: "#vue-app",
    data: {
        name: "Gian",
        job: "Teacher",
        website: "https://www.twitter.com",
        websiteTag: "<a href='https://www.twitter.com'>Website</a>"
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}`
        }
    }
})