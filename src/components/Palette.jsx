import React from 'react';

class Palette extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            class: "palette"
        };
        // Subs to event
    }

    render() {
        const classState = this.state.class;
        return (<td class={classState} id={this.setId()}>
                    {this.props.children}
                  </td>);
    }

    setId(){
        return "palette"+this.props.uid;
    }

    waveOnce(){
        console.log("palette wave")
        this.state.class = "palette wave"
        setTimeout(() => { this.state.class = "palette" },1000)
    }

}

export default Palette;