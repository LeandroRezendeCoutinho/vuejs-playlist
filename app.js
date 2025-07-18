new Vue({
    el: '#vue-app',
    data: {
        name: 'Leandro',
        job: 'Web Developer',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com">Google</a>',
        age: 25,
        canvas: {
            x: 0,
            y: 0
        },
        computed: {
            a: 0,
            b: 0
        },
        available: false,
        nearby: false
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
        updateXY: function (event) {
            this.canvas.x = event.offsetX;
            this.canvas.y = event.offsetY;
        },
        preventAlert: function (event) {
            alert('You can\'t get out!');
        },
        logName: function (event) {
            console.log('You entered your name: ' + event.target.value);
            this.name = event.target.value;
        },
    },
    computed: {
        addToA: function () {
            console.log('You clicked on A');

            return this.computed.a + this.age;
        },
        addToB: function () {
            console.log('You clicked on B');
            return this.computed.b + this.age;
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});