new Vue({
    el: '#vue-app',
    data: {
        name: 'Leandro',
        job: 'Web Developer',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com">Google</a>'
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}!`;
        }
    }
});