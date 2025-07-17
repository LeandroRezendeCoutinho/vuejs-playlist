new Vue({
    el: '#vue-app',
    data: {
        name: 'Leandro',
        job: 'Web Developer',
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}!`;
        }
    }
});