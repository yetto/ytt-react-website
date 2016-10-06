import React from 'react';

/*
* {About} Cover should display the lastest picture {pixels} as a BG,
* the last stuff from {code}, right below the menu, we should have
* the {contact} form, and last but no least a link to {tools},
* as a plus, if it is me show me {heroku mon} details
*/

// First section
import Cover from './Cover.jsx';

// Second section - scroll menu
import MenuPanes from './MenuPanes.jsx';
import Palette from './Palette.jsx';

// Third section
import Contact from './Contact.jsx';


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
  <div id="menuPanes">
    <MenuPanes
      posHeight={window.page.posHeight}>
      {palettesContent.map((palette, i) =>
        <Palette
          key={i}>
          {palette()}
        </Palette>
      )}

    </MenuPanes>
  </div>
); // END MENU


class Main extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
        return (<div id="main">
                  <Cover />
                  <Menu/>
                  <Contact />
                </div>);
    }

}

export default Main;