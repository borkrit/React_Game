import s from './style.module.css'
import cn from 'classnames'
const NavBar =({isActiveMenu, bgActive =false, onClickHamburg})=>{
// todo
    

    return (
        <>
            <nav id={s.navbar}  className={cn({
                [s.bgActive]: bgActive
                })} >
                <div className={s.navWrapper}>
                    <p className={s.brand}>
                        LOGO
                    </p>
                    <a 
                        className={cn(s.menuButton,{
                            [s.active]: isActiveMenu
                        })} 
                        onClick={onClickHamburg}
                    >
                    <span />
                    </a>
                </div>
            </nav>
        </>
    )
}
export default NavBar;