import '../../assets/styles/baner.bitmex.scss';
import { useAppSelector, useAppDispatch } from '../../redux/bitmex.store';
import ModalBitMex from '../modal.bitmex';
import { handleModal } from '../../redux/bitmex.slice';
import { useState } from 'react';
import { IBitmex } from '../../services/interfaces/bitmex.interfaces';
import ModalBitmexDatabase from './modal.bitmex.read.database';
import WebSocketBitmex from './websocket.bitmex';



const BanerBitmex = ()=>{

    const state = useAppSelector((state)=> state.allbitmex.data);
    const show = useAppSelector((state)=> state.allbitmex.show);
    const showDataBase = useAppSelector((state)=> state.allbitmex.showDataBase);
    const showWebSocket = useAppSelector((state)=> state.allbitmex.showWebSocket);
    const [param, setParam] = useState<number>(0);
    const dispatch = useAppDispatch();


    //open the modal componet updating the state
    const handleopenModal = (id:any)=>{
        dispatch(handleModal(!show));
        setParam(id);
    }



    //filter bitmex by title
    const [filter, setFilter] = useState<string>('');
    const [filteredBitMex, setFilteredBitmex] = useState<IBitmex[]>(state);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilter(e.target.value);
        setFilteredBitmex(state.filter(item=> item.title.toLowerCase().includes(value.toLowerCase())));
    };




    return(
        <div className='baner'>
            <div className='baner_container'>
                <input 
                    type="text" 
                    value={filter} 
                    onChange={handleFilterChange} 
                    placeholder="search..."
                    className='baner_container-input' 
                    />
                    
            </div>
            {
                state?.length > 0 ?
                filteredBitMex?.length > 0 ? 

                filteredBitMex.map(b=>
                    <div className='baner_box' key={b.id}>
                        <div>
                            <div className='baner_box-title'>
                                <span>{b.title}</span>
                            </div>

                            <div className='baner_box-link'>
                                <a href={b.link} target='_BLANK' className='text-success'>
                                    {b.link}
                                </a>
                            
                            </div>

                            <div className='baner_box-date'>
                                <span className='text-primary'>
                                    {b.date.toString()}
                                </span>
                            </div>

                        </div>
                        <div>
                            <i className='bx bx-chevron-right' onClick={()=> handleopenModal(b.id)}></i>
                        </div>
                       
                        
                    </div>
                )
                :

                state.map(b=>
                    <div className='baner_box' key={b.id}>
                        <div>
                            
                            <div className='baner_box-title'>
                                <span>{b.title}</span>
                            </div>

                            <div className='baner_box-link'>
                                <a href={b.link} target='_BLANK' className='text-success'>
                                    {b.link}
                                </a>
                            
                            </div>

                            <div className='baner_box-date'>
                                <span className='text-primary'>
                                    {b.date.toString()}
                                </span>
                            </div>

                        </div>
                        <div>
                            <i className='bx bx-chevron-right' onClick={()=> handleopenModal(b.id)}></i>
                        </div>
                       
                        
                    </div>
                )
                :
                <div className='baner-loading'>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            {show ? <ModalBitMex id={param}/> : null }
            { showDataBase ? <ModalBitmexDatabase/> : null}
            {showWebSocket ? <WebSocketBitmex/> : null}
        </div>
    )
}


export default BanerBitmex;