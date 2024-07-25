
require('dotenv').config({path:'./.env'});
const connectionString = require('../database/bitmex.database');
const BitmexServices  = require('../services/bitmex.service');




class allBitMex{

    //get bitmex
    async getBitMex(req, res){

        try {

            const response = await BitmexServices.handleServicesAllRequest(process.env.API_BITMEX);

            if(response.data.length > 0)
            {
                return res.status(200).send(response.data);
            }
            else{
                return res.status(400).send({
                    code:400,
                    message:'Not Data Found'
                })
            }
            
        } catch (error) {
            return res.status(400).send(error);
        }
    }


    async filterBitMex(req, res){
        const {param} = req.params;
        try {
            if(param.length > 0)
            {
                let url = `${process.env.API_BITMEX}?columns=${param}`;

                const filterBitMex = await BitmexServices.handleServicesAllRequest(url);
                return res.status(200).send(filterBitMex.data);

            }else
            {
                return res.status(400).send({
                    code:400,
                    message:'You must insert a value param'
                })
            }
            
            
        } catch (error) {
            return res.status(400).send(error);
        }
        

    }




    

    async ws(req, res)
    {
        BitmexServices.handleWebSocket()
        .then(data => {
            if(data.length > 0)
            {   
                return res.status(200).send(data);
            }else
            {
                return res.status(400).send({
                    code:400,
                    message : 'not data found'
                })
            }
        })
        .catch(error => {
            return res.status(400).send(error);
        });
        
     }








     async insertIntoDataBase(req, res)
     {

        const exist = await BitmexServices.handleValidateTabaleExist();
        if(exist)
        {
            const {link, title, content, date} = req.body;

            try {
                const response = await connectionString.query(`${process.env.DB_INDERT}`, 
                [link, title, content, date]);
                if(response.rowCount > 0)
                {
                    return res.status(200).send({
                        code:200,
                        message:"Successed!"
                    })
                }else
                {
                    return res.status(400).send({
                        code:400,
                        message:'Error no data inserted'
                    })
                }
                

            } catch (error) {
                return res.status(500).send({
                    code:500,
                    message:error
                })
            }

        }else
        {
            return res.status(200).send({
                code:400,
                message:'The table is not created'
            })

        }
        
     }







     async readBitMexFormDataBase(req, res)
     {
        const exist = await BitmexServices.handleValidateTabaleExist();
        if(exist)
        {
            try {
                const response = await connectionString.query(`${process.env.DB_SELECT}`);
                if(response.rowCount > 0)
                {
                    return res.status(200).send(response.rows);
                }else{
                    return res.status(400).send({
                        code:400,
                        message:'Not Data Found'
                    })
                }
                
            } catch (error) {
                return res.status(500).send({
                    code:500,
                    message:error
                })
            }

        }else
        {
            return res.status(200).send({
                code:400,
                message:'The table is not created'
            })

        }
        
     }

}





module.exports = new allBitMex();