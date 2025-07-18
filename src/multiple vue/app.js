var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {

    },
    computed: {
        greet: function () {
            return 'Hello ' + this.title;
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle: function () {
            one.title = 'Changed';
        }

    },
    computed: {
        greet: function () {
            return 'Hello ' + this.title;
        }
    }
});