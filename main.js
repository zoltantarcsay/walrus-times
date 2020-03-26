function getDate() {
    return new Date().toString().replace(/GMT.*/, '');
}

const app = new Vue({
    el: '#app',
    data: {
        date: getDate()
    }
});

setInterval(() => app.date = getDate(), 1000);
