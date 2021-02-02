import {useState} from 'react'

import Meny from "../Meny";
import NavBar from "../NavBar";

const MenuHeader =()=>{
    // const [isActiveMenu, setActive] = useState(true)

    // const handleClickButton = () => {
    //     setActive(!isActiveMenu)
    //     console.log(isActiveMenu)
    // }
    return (
        <>
            <Meny   />
            <NavBar  />
        </>
    )

}

export default MenuHeader;