import '../../assets/styles/modal.bitmex.read.database.scss';
import { useAppDispatch, useAppSelector } from '../../redux/bitmex.store';
import { handleShowDataBase } from '../../redux/bitmex.slice';
import { useEffect } from 'react';
import { handleFetchDataFromDataBase } from '../../services/bitmex.services';
import { addFromDataBase } from '../../redux/bitmex.slice';

const ModalBitmexDatabase = ()=>{
    const state = useAppSelector((state)=> state.allbitmex.dataFromDataBase);
    const show = useAppSelector((state)=> state.allbitmex.showDataBase);
    const dispatch = useAppDispatch();

    const handleCloseShowDatabase = ()=>{

        dispatch(handleShowDataBase(false));

    }


    useEffect(()=>{
        loadDataBase();
    },[])

    const loadDataBase = async ()=>{
        await handleFetchDataFromDataBase().then((db:any)=>{
            dispatch(addFromDataBase(db));
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className='moda-bitmex-database'>
            <div className='moda-bitmex-database-list-container'>
                <div className='moda-bitmex-database-list-container-closeButton_container'>
                    <i className='bx bx-x' onClick={handleCloseShowDatabase}></i>
                </div>
                <div className='moda-bitmex-database-listcontainer'>
                    {
                        state?.length > 0 ? 
                        state.map(d=>
                            <div className='moda-bitmex-database-list-container_list'>
                                <div className='moda-bitmex-database-list-container_list-title'>{d.title}</div>
                                <div><a href={d.link} target='_BLANK' className='text-success'>{d.link}</a></div>
                                <div className='text-warning'>{d.date.toString()}</div>
                            </div>
                        ):
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




export default ModalBitmexDatabase;