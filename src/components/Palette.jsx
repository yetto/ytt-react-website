import React from 'react';

class Palette extends React.Component {

    componentWillUpdate(){
        //this.waveOnce()
    }

    componentDidUpdate(){
        //this.reset()
    }

    constructor(props) {
        super(props);
        this.state = {
            class: "palette"
        };
    }

    render() {
        const wave = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        const classState = ( wave(1,3) === 1 ) ? "palette wave" : "palette";
        // const classState = this.state.class;
        // console.log("classState",this.props.uid,classState);
        return (<td class={classState} id={this.setId()}>
                    {this.props.children}
                  </td>);
    }

    setId(){
        return "palette"+this.props.uid;
    }

    waveOnce(){
        this.state.class = "palette wave"
        console.log("palette wave",this.props.uid,this.state.class)
    }

    reset(){
        this.state.class = "palette"
        console.log("palette",this.props.uid,this.state.class)
    }

}

export default Palette;
