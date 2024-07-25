import '../../assets/styles/header.bitmex.scss';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';

const HeaderBitmex = ()=>{
    const [search, setSearch] = useState<string>("");

    const handleOnChange = (e:any)=>{

        setSearch(e.target.value);

    }

    return(
        <header className="header">
            <div className='header-logo_container'>
                <img src={logo}/>
                <span>BITMEX API</span>
            </div>
            <input
                type='text'
                placeholder='search...'
                className='header-input d-none' 
                value={search}
                onChange={handleOnChange}
                name='search'
            />

        </header>
    )
}


export default HeaderBitmex;