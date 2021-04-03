function run() {
    new Vue({
        el: '#app',
        data: {
            message: '',
            messageFromBtn: ''
        },
        methods: {
            doSomething: function () {
                if( this.message == "123" ){
                    this.messageFromBtn = "123";
                }
                else{
                    this.messageFromBtn = '';
                }

            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});