const WebSocket = require('ws');

function fetchDataFromWebSocket() {
const wsUrl = 'wss://www.bitmex.com/realtime';

    return new Promise((resolve, reject) => {
        const ws = new WebSocket(wsUrl);

        ws.on('open', () => {
            console.log('Conectado a BitMEX WebSocket');
            ws.send(JSON.stringify({ op: 'subscribe', args: ['instrument:XBTUSD'] }));
        });

        ws.on('message', (data) => {
            try {
                const message = JSON.parse(data);
                if (message.table === 'instrument' && message.action === 'update') {
                    // Resolver la promesa con los datos recibidos
                    resolve(message.data);
                    ws.close(); // Cerrar la conexión después de recibir datos
                }
            } catch (error) {
                reject(error);
            }
        });

        ws.on('error', (error) => {
            reject(error);
        });

        ws.on('close', () => {
            console.log('Conexión WebSocket cerrada');
        });
    });
}


module.exports = fetchDataFromWebSocket;