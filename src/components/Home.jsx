import React from 'react';

/*
* {About} Cover should display the lastest picture {pixels} as a BG,
* the last stuff from {code}, right below the menu, we should have
* the {contact} form, and last but no least a link to {tools},
* as a plus, if it is me show me {heroku mon} details
*/

// First section
import Cover from './HomeCover.jsx';

// Third section
import Contact from './Contact.jsx';


class Home extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
        return (<div id="Home">
                  <Cover />
                  <Contact />
                </div>);
    }

}

export default Home;