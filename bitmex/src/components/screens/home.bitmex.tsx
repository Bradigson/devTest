import '../../assets/styles/home.bitmex.scss';
import { fetchBitMex } from "../../services/bitmex.services";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/bitmex.store";
import { add } from "../../redux/bitmex.slice";
import HeaderBitmex from './header.bitmex';
import NavBarBitMex from './navbar.bitmex';
import BanerBitmex from './baner.bitmex';

const HomeBitmex = ()=>{
    const dispatch = useAppDispatch();

    useEffect(()=>{
        handleFetchData();
    },[]);

    const handleFetchData = ()=>{
            fetchBitMex().then((d:any)=>{
                dispatch(add(d.data));

            }).catch(err=>{
                console.log(err);
            })
    }



    return (
      <div className='home'>
        <HeaderBitmex />
        <div className='home-container_components'>
          <NavBarBitMex/>
          <BanerBitmex/>
        </div>
        
      </div>
    )
}


export default HomeBitmex;