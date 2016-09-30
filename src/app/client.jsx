import React from 'react';
import ReactDOM from 'react-dom';
import Cover from '../components/Cover.jsx';
import MenuPanes from '../components/MenuPanes.jsx';
import HelloForm from '../components/HelloForm.jsx';
import style from '../scss/main.scss';
// mainWrapper
import page from '../actions/page';

class Home {
  constructor(){

  }
  setupMenu(){
    // Menu Component
    ReactDOM.render(<MenuPanes
      posHeight={page.posHeight}
    />, document.getElementById('menuPanes'));
  }
}

const home = new Home

// Cover component
ReactDOM.render(<Cover />, document.getElementById('App'), () => {
  console.log("Page State \n",page)
  home.setupMenu()
});