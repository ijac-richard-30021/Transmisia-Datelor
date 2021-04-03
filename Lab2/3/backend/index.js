const io = require('socket.io');
const server = io.listen(8000);
console.log('Server socket is listening on port 8000');
let connectedClients = new Map();
var previousMessages = require('./src/previousMessages.json');


// event fired every time a new client connects
server.on('connection', socket => {
    console.info(`Client connected [id=${socket.id}]`);
    connectedClients.set(socket.id, socket);
    console.log(connectedClients.size + ' client/s connected');
    sendPreviousMessages(socket);


    // when socket disconnects, remove it from the map
    socket.on('disconnect', () => {
        connectedClients.delete(socket.id);
        console.info(`Client [id=${socket.id}] disconnected`);
        console.log(connectedClients.size + ' client/s connected');
    });

    socket.on('chat', payload => {
        sendMessageToAllOtherClients(socket, payload);
    });
});

function sendMessageToAllOtherClients(sender, message) {
    for (let [key, socket] of connectedClients) {
        socket.emit('message-from-server', { id: sender.id, message: new Date().toUTCString() + ": " + message  });
    }
    saveMessageInJSON(sender, message );
}

function sendPreviousMessages(socket) { // send previous message to new user
    for( let previousMessage of previousMessages ){
        socket.emit( 'message-from-server', previousMessage );
    }
}

function saveMessageInJSON(sender, message) { // save message in json
    previousMessages[previousMessages.length] = { id: sender.id, message: new Date().toUTCString() + ": " + message  };
}