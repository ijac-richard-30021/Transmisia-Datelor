function users() {
    get = function () {
        return axios.get('http://localhost:3000/users');
    };

    deleteUser = function ( index ) {
        console.log(index);
        return axios.delete('http://localhost:3000/users/' + index );
    };

    modifyUser = function ( index, body ) {
        return axios.put('http://localhost:3000/users/'+index, body, index);
    };

    addUser = function ( body ) {
        return axios.put('http://localhost:3000/users/', body );
    };

    return {
        get,
        deleteUser,
        modifyUser,
        addUser
    };
}