import MenuHeader from '../MenuHeader';
import s from'./style.module.css'

const Header = ({title, descr, onClickButton})=>{

    const handleClick = () =>{
        console.log('levl1');
        onClickButton && onClickButton('game');
        
    }

    return (
        <>
        
        <header className={s.root}>
        <MenuHeader />
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>

                <button onClick={handleClick}>
                    Game Start
                </button>
            </div>
        </header>
        </>
    )
} 

export default Header;