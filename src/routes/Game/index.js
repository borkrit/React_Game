const GamePage =({onChangeList})=>{

    const handleClick= ()=> {
        console.log('game1')
        onChangeList && onChangeList('app');
    }

    return (
        <>
            <div>
                GamePage
                <button onClick={handleClick}>
                    back home 
                </button>
            </div>
        </>
    )
}
export default GamePage;