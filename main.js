const d = new Date();
const app = new Vue({
    el: '#app',
    data: {
        date: d.toString().replace(/GMT.*/, '')
    }
});
