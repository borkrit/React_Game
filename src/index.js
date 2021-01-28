import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Layout from './components/Layout';
import Footer from './components/Footer';
import bg1 from './assets/bg1.jpg'


const AppMain = ()=>{
  let time = new Date().toLocaleTimeString();
  return (
    <React.Fragment>
      <Header title='Hello' descr=' my name '/>
      <Layout title='one' desc='wowowowoo' id= {time} urlBg={bg1}  />
      <Layout title='two' desc='two' id= {time} colorBg='yellow' />
      <Layout title='third' desc='third' id= {time} urlBg={bg1} />
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(<AppMain />, document.getElementById('root'));

