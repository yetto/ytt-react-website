import React from 'react';
import ReactDOM from 'react-dom';
import Cover from '../components/Cover.jsx';
import MenuPanes from '../components/MenuPanes.jsx';
import Palette from '../components/Palette.jsx';
import HelloForm from '../components/HelloForm.jsx';
import style from '../scss/main.scss';
// mainWrapper
import page from '../actions/page';

const palettesContent = [
  (props) => (
    <div>
      <h1>Cover</h1>
      <p>Placeholder</p>
    </div>
    ),
  (props) => (
    <div>
      <h1>Code</h1>
      <p>Placeholder</p>
    </div>
    ),
  (props) => (
    <div>
      <h1>Pixels</h1>
      <p>Placeholder</p>
    </div>
    ),
  (props) => (
    <div>
      <h1>Contact</h1>
      <p>Placeholder</p>
    </div>
    ),
  (props) => (
    <div>
      <h1>Resume</h1>
      <p>Placeholder</p>
    </div>
    )
] // END pallete

const Menu = (props) => (
  <div>
    <MenuPanes
      posHeight={page.posHeight}>

      {palettesContent.map((palette, i) =>
        <Palette
          key={i}>
          {palette()}
        </Palette>
      )}

    </MenuPanes>
  </div>
); // END MENU


class Home {

  constructor(){
    this.setupCover()
  }

  setupMenu(){
    // Menu Component
    ReactDOM.render(<Menu/>, document.getElementById('menuPanes'), () => {
      console.log(this.props);
    });
  }

  setupCover(){
    // Cover component
    ReactDOM.render(<Cover />, document.getElementById('App'), () => {
      console.log("Page State \n",page)
      this.setupMenu()
    });

  }

} // END home

const home = new Home