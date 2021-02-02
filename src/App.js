import {useState} from 'react'
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App =()=>{
    const [page, setPage] = useState('app');

    const handleChangePage = (page) =>{
        console.log('3');
        setPage(page)
    }

    switch(page){

    
        case "app":
            return <HomePage onChangeList ={handleChangePage} />
        case "game":
            return <GamePage onChangeList ={handleChangePage} />
        default:
            return <HomePage/>

    }

}
export default App;