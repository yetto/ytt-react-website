import React from 'react';
// Cover anim dependencies
import easePack from '../lib/easePack.min.js';
import rAF from '../lib/rAF.js';
import tweenLite from '../lib/tweenLite.min.js';
import coverAnim from '../lib/coverAnim.js';

/*
    # ES6 Components
    http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
    # Componetn specs
    https://facebook.github.io/react/docs/component-specs.html
*/

class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "Hi, I'm Yenuan and this my portfolio"};
    }

    componentWillMount(){

    }

    /*
        Sounds good to alter state for animation pourposes

        Invoked when a component is receiving new props. This method is not called for the initial render.

        Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.
    */


    componentWillReceiveProps(){}

    componentWillUpdate(){}


    componentDidUpdate(){}

    render() {
        return (<div>
                <div class="coverLogo">
                    <h1>{this.state.text}</h1>
                </div>
                <div id="anim-cont">
                    <canvas id="can"></canvas>
                </div>
                    <div class="coverBg">
                </div>
            </div>);
    }

    componentDidMount(){
        coverAnim({ canvas : 'can' , element : 'anim-cont' });
    }

    /*
        Invoked immediately before a component is unmounted from the DOM.

        Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
    */
    componentWillUnmount(){

    }

}

export default Cover;