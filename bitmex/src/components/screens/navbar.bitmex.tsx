import '../../assets/styles/navbar.bitmex.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/bitmex.store';
import { handleShowDataBase } from '../../redux/bitmex.slice';
import { handleShowWebSocket } from '../../redux/bitmex.slice';

const NavBarBitMex = ()=>{
    const show = useAppSelector((state)=> state.allbitmex.showDataBase);
    const showWebSocket = useAppSelector((state)=> state.allbitmex.showWebSocket)
    const dispatch = useAppDispatch();

    const handleShowDataBaseOpen = ()=>{
        
        dispatch(handleShowDataBase(!show));

    }

    const handleShowWebSocketOpen = ()=>{
        dispatch(handleShowWebSocket(!showWebSocket));
    }
    return (
        <nav className="navbar">
            <Link to="" className='navbar_link' onClick={handleShowWebSocketOpen}>Go To WebSocket</Link>
            <Link to="" className='navbar_link' onClick={handleShowDataBaseOpen}>DataBase Stored</Link>
        </nav>
    )
}


export default NavBarBitMex;