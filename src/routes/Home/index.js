import React from 'react';

import Header from '../../components/Header'
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import bg1 from '../../assets/bg1.jpg'

import PokemonCard from '../../components/PokemonCard';
import s from './style.module.css';




const HomePage = ()=>{
  let time = new Date().toLocaleTimeString();

  const handleClickButton =(page)=>{
      console.log('lev2');
      // onChangeList && onChangeList(page);
  }

  return (
    <React.Fragment>
        <Header 
            title='Hello'
            descr='my name'
            onClickButton={handleClickButton}
        />
        <Layout 
            title='one' 
            id= {time} 
            urlBg={bg1}  
        >
          {/* <div className={s.flex}>
              {
                 POKEMON.map(item => 
                    <PokemonCard 
                      key={item.id} 
                      type={item.type} 
                      values={item.values} 
                      name={item.name} 
                      img={item.img}
                      id={item.id}  
                    />)
              }
          </div> */}
        </Layout>
        <Layout 
            title='two' 
            id= {time} 
            colorBg='yellow' 
        >
          <p> In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
          
        </Layout>
        <Layout 
            title='third'  
            id= {time} 
            urlBg={bg1} 
        >
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
        </Layout>
        <Footer />
    </React.Fragment>
  )
}

export default HomePage