import {useState} from 'react'
import { Switch, Route, useRouteMatch, BrowserRouter, Redirect } from "react-router-dom";

import database from './service/firebase'

import MenuHeader from './components/MenuHeader';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import { FireBaseContext } from './context/firebaseContext';
import Firebase from './service/firebase';





database.ref('pokemons').once('value', (snapshot)=>{
    console.log(snapshot.val())
})


const App =()=>{
    const match = useRouteMatch('/');
    console.log("math",match)
    return (
       <FireBaseContext.Provider value={new Firebase ()}>
            <Switch>
                <Route path="/404" render={()=>(
                        <h1>404</h1>
                    )} />
                <Route>
                    <>
                        <MenuHeader bgActive={!match.isExact} />
                        <div>
                            <Switch>
                                <Route path='/' exact component={HomePage}/>
                                <Route path='/game' component={GamePage}/>
                                <Route path='/about' component={AboutPage}/>
                                <Route path='/contact' component={ContactPage}/>
                                <Route render={()=>(
                                    <Redirect to="/404"/>
                                )} />
                            </Switch>
                        </div>
                    </>
                </Route>
                
                
            </Switch>
        </FireBaseContext.Provider> 
    )
}
export default App;