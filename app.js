new Vue({
    el: '#vue-app',
    data: {
        name: 'Leandro',
        job: 'Web Developer',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com">Google</a>',
        age: 25,
    },
    methods: {
        greet: function (time) {
            return `Good ${time}, ${this.name}!`;
        },
        add: function (increment) {
            this.age += increment;
        },
        subtract: function (decrement) {
            this.age -= decrement;
        },
    }
});