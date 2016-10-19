import React from 'react'
import Menu from './LayoutMenu.jsx'
import Palette from './LayoutMenuPalette.jsx';
import Header from './LayoutHeader.jsx'
import Footer from './LayoutFooter.jsx'


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

class Layout extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
        return (<div id="layout">
                  <div id="Menu">
                    <Menu posHeight={window.page.posHeight}>
                      {palettesContent.map((palette, i) =>
                        <Palette
                          key={i}>
                          {palette()}
                        </Palette>
                      )}
                    </Menu>
                  </div>
                  {this.props.children}
                </div>);
    }

}


export default Layout