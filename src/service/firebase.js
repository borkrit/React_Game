import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBaQCwhZTDC9CkPv3cUDIWnd4dJRohEMIw",
    authDomain: "pokemon-gamevp.firebaseapp.com",
    databaseURL: "https://pokemon-gamevp-default-rtdb.firebaseio.com",
    projectId: "pokemon-gamevp",
    storageBucket: "pokemon-gamevp.appspot.com",
    messagingSenderId: "477418863582",
    appId: "1:477418863582:web:73b15c84de1d05c947fb4f"
  };


  firebase.initializeApp(firebaseConfig);
class Firebase{
  constructor(){
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb)=>{
    this.database.ref('pokemons').on('value', (snapshot)=>{
      cb(snapshot.val());
    })
  }
  offPokemonSoket = ()=>{
    this.database.ref('pokemons').off();
  }

  getPokemonsOnce = async ()=>{
    return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) =>{
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data,cb)=>{
     const newKey = this.database.ref().child('pokemons').push().key;
     this.database.ref('pokemons/'+ newKey).set(data).then(()=>cb());
  }

}



export default Firebase;