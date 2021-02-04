import {useState} from 'react'

import Meny from "../Meny";
import NavBar from "../NavBar";

const MenuHeader =({bgActive})=>{
    const [isActiveMenu, setActive] = useState(null)

     const handleClickButton = () => {
        setActive(prevState => !prevState)
        
    }
    return (
        <>
            <Meny  isActiveMenu ={isActiveMenu} />
            <NavBar  isActiveMenu ={isActiveMenu} bgActive={bgActive} onClickHamburg={handleClickButton}/>
        </>
    )

}

export default MenuHeader;