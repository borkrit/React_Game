import s from './style.module.css'


const Layout =({title, children, id, urlBg=false, colorBg=false})=>{
    
    const styleUrlBg = urlBg ? { backgroundImage: `url(${urlBg})` } : {background: colorBg};
    
    return (
        <>
            <section className={s.root} id={id+title} >
                <div className={s.wrapper} style={styleUrlBg }>
                    <article>
                        <div className={s.title}>
                           {
                                title && (<h3>{title}</h3>) 
                            }
                            <span className={s.separator}></span>
                        </div>
                        <div className={s.desc, s.full}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
        </>

    )
}

export default Layout;