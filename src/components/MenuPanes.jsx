import React from 'react';

class Cover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Hi, I'm Yenuan and this my portfolio",
            posHeight : props.posHeight
        };
        this.canWave = true;
        setTimeout(()=>{this.wave()},1000)
    }

    renderPalettes(){
        const clone = (child, i) => React.cloneElement(child, {
            uid: i
        });
        console.log(this.props.children);
        return this.props.children.map(clone);
    }

    render() {
        const menuStyles = {
            top: this.state.posHeight
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
        this.state.posHeight = px;
    }

    // Fade menu into inactive position
    innactive(px){
        this.state.posHeight = px;
    }

}

export default Cover;

/*
    # ES6 Components
    http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
    # Componetn specs
    https://facebook.github.io/react/docs/component-specs.html
    ### Paths
    https://medium.com/@lavrton/using-react-with-html5-canvas-871d07d8d753#.4p82ynwzw


    componentWillMount(){}
    componentWillReceiveProps(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    componentDidMount(){}
    componentWillUnmount(){}


*/
