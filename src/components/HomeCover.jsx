import React from 'react';
// Cover anim dependencies
import coverAnim from '../lib/coverAnim.js';
import { connect } from "react-redux"

import * as pageActions from '../actions/pageActions';
import { bindActionCreators } from 'redux';

/*
* ## Play with hue values
* http://stackoverflow.com/questions/17433015/change-the-hue-of-a-rgb-color-in-javascript
*
*/

const mapStateToProps = (store) => {
    return {
        mousePosX : store.page.mousePos.x,
        mousePosY : store.page.mousePos.y,
        posY : store.page.posY
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(pageActions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "Hi, I'm Yenuan, Full Stack Developer"};
    }

    render() {
        const x = this.props.mousePosX * 0.05
        const y = this.props.mousePosY * 0.05
        const transparency = (posY) => {
            if (posY < window.innerHeight/8) return 0.3
            return 0
        }
        const bgStyles = {
            transform: `scale(1.1) translateX(${x}px) translateY(${y}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: transparency(this.props.posY)
        }
        return (<div id="cover">
                    <div class="coverHeading">
                        <h1>{this.state.text}</h1>
                    </div>
                    <div id="anim-cont">
                        <canvas id="can"></canvas>
                    </div>
                    <div style={bgStyles} class="coverBg">
                </div>
            </div>);
    }

    componentDidMount(){
        // Initialze cover bg Animation
        coverAnim({ canvas : 'can' , element : 'anim-cont' });
    }

}

export default Cover;


