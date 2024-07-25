import axios from "axios";

export const fetchBitMex = async ()=>{


    const requestOptions = {
    method: 'GET',
    url: `${process.env.REACT_APP_API_BITMEX}/bitmex`,
    };

    try {
        const response = await axios(requestOptions);
        return response;
        console.log(response.data);
    } catch (error) {
        console.error(error);
        console.log( 'An error occurred while fetching announcements.' );
        return error;

    }
}



export const insertIntoDataBase = async ({_link, _title, _content, _date}:{_link:string, _title:string, _content:string, _date:any})=>{
    const requestOption = {
        method: 'POST',
        url : `${process.env.REACT_APP_API_BITMEX}/insert_bitmex`,
        
        data:{
            link: _link, 
            title: _title, 
            content: _content, 
            date : _date
        }
    };

    try{
        const response = await axios(requestOption);
        return response.data;

    }catch(err){

        return err
    }
}


export const handleFetchDataFromDataBase = async ()=>{
    
    const requestOption = {
        method:'GET',
        url: `${process.env.REACT_APP_API_BITMEX}/read_bitmex`,
    }
    try {

        const response = await axios(requestOption);
        return response.data;
        
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const handleWebSocket = async ()=>{
    
    const requestOption = {
        method:'GET',
        url: `${process.env.REACT_APP_API_BITMEX}/websocket`,
    }
    try {

        const response = await axios(requestOption);
        return response.data;
        
    } catch (error) {
        console.log(error);
        return error;
    }

}