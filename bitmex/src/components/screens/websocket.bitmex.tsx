import '../../assets/styles/websocket.bitmex.scss';
import { useAppDispatch, useAppSelector } from '../../redux/bitmex.store';
import { useEffect } from 'react';
import { handleWebSocket } from '../../services/bitmex.services';
import { handleInsertWebSocket } from '../../redux/bitmex.slice';
import { handleShowWebSocket } from '../../redux/bitmex.slice';


const WebSocketBitmex = ()=>{
    const state = useAppSelector((state)=> state.allbitmex.websocket);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        handleWebSocket().then(w=>{
            dispatch(handleInsertWebSocket(w));
        })
        .catch(err=>{
        })

    },[state]);


    const renderValue = (value: any) => {
        if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value, null, 2);
        }
        return value.toString();
    };


    //close the modal
    const handleShowWebSocketCloseModal = ()=>{
        dispatch(handleShowWebSocket(false));
    }

    return (
        <div className='websocket'>
            <div className='websocket-content'>
                <div className='websocket-content-button'>
                    <i className='bx bx-x' onClick={handleShowWebSocketCloseModal}></i>
                </div>
                <div className='websocket-contentlist'>
                    {
                        state.length > 0 ?
                        state.map((w, index)=>
                            <li key={index} className='websocket-content_list'>
                                {Object.entries(w).map(([key, value]) => (
                                    <div key={key}>
                                        <strong>{key}:</strong> {renderValue(value)}
                                    </div>
                                ))}
                            </li>
                        )
                        :
                        <div className='d-flex justify-content-center'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                                                        
                        </div>
                    }
                </div>
               

            </div>
        </div>
    )
}


export default WebSocketBitmex;