import React from 'react';
/*
    @Connect allows you to connect your React components to your store's state, that is to pass down to them your store's state as props.
*/
import { connect } from "react-redux"

import * as pageActions from '../actions/pageActions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (store) => {
    return {
        posY: store.page.posY
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(pageActions, dispatch)
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MenuPanes extends React.Component {

    componentWillUpdate(props){
        // On update make our elementns dance
        this.wave()
    }

    componentWillMount(){
        // Update all info
    }

    renderPalettes(){
        const clone = (child, i) => React.cloneElement(child, {
            uid: i,
            wait: 1000
        });
        return this.props.children.map(clone);
    }

    render() {
        const { posY } = this.props
        const posHeight = window.page.posHeight
        const top = (posY) => {
            if (posY > posHeight/7 && posY < posHeight*1.5)
                return posY
            if (posY > posHeight*1.5+1)
                return -Math.abs(posHeight)
            if (posY < posHeight/7)
                return posHeight
            return posHeight
        }
        const menuStyles = {
            top: top(this.props.posY) + 'px'
        }
        return (<table id="info" style={menuStyles}>
              <tbody>
                <tr>
                    {this.renderPalettes()}
                </tr>
              </tbody>
            </table>);
    }

    // Makes menu wave
    wave() {
        if (this.canWave) {
            this.canWave = false
            let mms = 0
            this.props.children.forEach((child)=>{
                console.log(mms);
                setTimeout(() => {
                    // Emit event here

                }, mms );
                mms = mms + 100
            })
            setTimeout(()=>{this.canWave = true},1400)
        }
    } // END wave

    // Fades menu into place
    active(px){
        this.state.posY = px;
    }

    // Fade menu into inactive position
    innactive(px){
        this.state.posY = px;
    }

}
