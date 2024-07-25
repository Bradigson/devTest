import { useState } from 'react';
import '.././assets/styles/modal.bitmex.scss';
import { useAppSelector, useAppDispatch } from '../redux/bitmex.store';
import { IBitmex } from '../services/interfaces/bitmex.interfaces';
import { handleModal } from '../redux/bitmex.slice';
import { insertIntoDataBase } from '../services/bitmex.services';
import { handleInsertIntoDataBaseAlertSuccess } from './alerts/alert.bitmex';
import { handleInsertIntoDataBaseAlertError } from './alerts/alert.bitmex';
import { handleFetchDataFromDataBase } from '../services/bitmex.services';
import { addFromDataBase } from '../redux/bitmex.slice';

const ModalBitMex = ({id}:{id:number}) =>{
    const state = useAppSelector((state)=> state.allbitmex.data);
    const [filterData, setFilterData] = useState<IBitmex>();
    const dispatch = useAppDispatch();

    const res = state.filter(f=>
        f.id === id
    );

        console.log(res);
    const handleCloseModal = ()=>{
        dispatch(handleModal(false));
    }


    //send data to the data base
    const handleInsert = async ({link, title, content, date}:{link:string, title:string, content:string, date:any})=>{
        await insertIntoDataBase({
            _link:link,
            _title:title,
            _content:content,
            _date:date
        }).then(async (res)=>{
                if(res.code == 200)
                {

                    handleInsertIntoDataBaseAlertSuccess();
                }else
                {
                    handleInsertIntoDataBaseAlertError();
                }
        })
        .catch(err=>{
            handleInsertIntoDataBaseAlertError();

        })
    }
    
    return (
        <div className='modal'>
            <div className='modal-container'>
                <div className='modal-container_close-button'>
                    <i className='bx bx-x' onClick={handleCloseModal }></i>
                </div>
                {
                    res ? 
                    res.map(r=>
                        <div key={r.id}>
                            <h3 className='modal-container_title'>{r.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: r.content }} /> {/*here we setup the content variable and render*/}
                            <a href={r.link} target='_BLANK' className='modal-container_link text-primary'>{r.link}</a><br/>
                            <span className='modal-container_date'>{r.date.toString()}</span>

                            <div className='modal_contairner-button'>
                                <button onClick={()=> handleInsert({link:r.link, title:r.title, content:r.content, date:r.date})}>
                                    Submit to database
                                </button>
                            </div>
                        </div>
                        )
                    :
                    <>
                        <span>Not Data Found</span>
                    </>
                }
                
            </div>
        </div>
    )
}


export default ModalBitMex;