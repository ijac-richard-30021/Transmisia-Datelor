function run() {
    new Vue({
        el: '#app',
        data: {
            users: [],
            usersService: null,
            add: '',
            NameAdd: '',
            CityAdd: '',
            NameModify: '',
            CityModify: '',
            acceptAddData: '0',
            acceptModifyData: '0',
            index: 0
        },
        created: function () {
            this.usersService = users();
            this.usersService.get().then(response => (this.users = response.data));
        },
        methods: {

            deleteUser: function (index) {
                this.usersService.deleteUser(index).then(response => console.log(response.data));
                location.reload()
            },

            modifyUser: function (index) {
                this.acceptModifyData = '1';
                this.index = index;
                this.acceptAddData = '0';
            },

            addUser: function () {
                this.acceptAddData = '1';
                this.acceptModifyData = '0';
            },

            enterAddUser: function () {
                var body = { "name": this.NameAdd, "city": this.CityAdd };
                this.usersService.addUser( body ).then(response => console.log(response.data));
                this.acceptAddData = '0';
                location.reload()
            },

            enterModifyUser: function () {
                var body = { "name": this.NameModify, "city": this.CityModify };
                this.usersService.modifyUser( this.index, body ).then(response => console.log(response.data));
                this.acceptModifyData = '0';
                location.reload()
            }
        }

    });
}

document.addEventListener('DOMContentLoaded', () => {
    run();
});