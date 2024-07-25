import '../../assets/styles/startapp.scss';
import { useState, useEffect } from 'react';
import { fetchBitMex } from '../../services/bitmex.services';
import img from '../../assets/images/start-app-img.png';
import { useNavigate } from 'react-router-dom';



const StartApp = ()=>{
    const navigate:any = useNavigate();

    useEffect(()=>{
        setInterval(()=>{
            navigate('home');
        }, 1500);

    },[])
    return (
        <div className='start-app'>
           <div className='start-app_img-container'>
                <img src={img}/>
                <h3>Welcome</h3>

           </div>
          
        </div>
    )
}


export default StartApp;