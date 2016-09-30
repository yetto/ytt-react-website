import React from 'react';
// Cover anim dependencies
import anim from '../actions/anim.js';
// import func from '../actions/func.js';


/*
    # ES6 Components
    http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
    # Componetn specs
    https://facebook.github.io/react/docs/component-specs.html
    ### Paths
    https://medium.com/@lavrton/using-react-with-html5-canvas-871d07d8d753#.4p82ynwzw
*/

class Cover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Hi, I'm Yenuan and this my portfolio",
            posHeight : props.posHeight
        };
    }

    componentWillMount(){

    }

    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentDidMount(){}
    componentWillUnmount(){}

    render() {
        const menuStyles = {

            top: this.state.posHeight

        }
        return (<table id="info" style={menuStyles}>
              <tbody>
                <tr>
                  <td class="palette" id="what">
                    <h1>What <br/>do <br/>we <br/>do?</h1>
                    <p>and <br/>how <br/>do <br/>we <br/>do <br/>it</p>
                  </td>
                  <td class="palette" id="we">
                    <h1>Get <br/>to <br/>know <br/>us</h1>
                    <p>and <br/>our <br/>products <br/>too!</p>
                  </td>
                  <td class="palette" id="how">
                    <h1>Make <br/>it <br/>real</h1>
                    <p>start, <br/>learn, <br/>adapt, <br/>improve.</p>
                  </td>
                  <td class="palette" id="who">
                    <h1>Our <br/>story</h1>
                    <p>App <br/>and <br/>its <br/>roots</p>
                  </td>
                  <td class="palette" id="talk">
                    <h1>Let’s <br/>talk</h1>
                    <p>Contact <br/>us</p>
                  </td>
                </tr>
              </tbody>
            </table>);
    }

    // Animation hooks
    waveHook(element) {
        element.setAttribute("class", "palette wave");
    }


}

export default Cover;