const  axios  = require('axios');
const WebSocket = require('ws');
const connectionString = require('../database/bitmex.database')




class BitmexServices {

     async  handleServicesAllRequest(url){
        const requestOptions = {
            method: 'GET',
            url: `${url}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        try {
            const response = await axios(requestOptions);
            return response;
        } catch (error) {
            return error;
        }
    
    
    }
    
    
    async handleWebSocket() {
        return new Promise((resolve, reject) => {
            const ws = new WebSocket(process.env.API_WSURL);
    
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




    async handleValidateTabaleExist(){
        const tableName = "T_Bitmex";
        try {
            const response = await connectionString.query(`${process.env.VALIDATE_TABLE_EXIST}`, [tableName]);
            if(response.rowCount > 0)
            {
                return true;
            }else{
                return false;
            }
    
        } catch (error) {
            console.log(error);
            return false;
    
        }
    
    }
    

}






module.exports = new BitmexServices ();
