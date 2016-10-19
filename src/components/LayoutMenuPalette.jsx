import React from 'react';

class Palette extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            canWave: true,
            waveState: "palette"
        }
        this.willWave = null
        this.reset = null
    }

    componentWillUpdate(props){

        const willWave = ()=>{
            this.state.waveState = "palette wave"
        }

        const reset = ()=>{
            this.state.waveState = "palette";
            this.state.canWave = true;
        }

        const wave = (mms)=>{
          if (this.state.canWave) {
            this.state.canWave = false
            this.willWave = setTimeout(willWave.bind(this), mms)
            this.reset = setTimeout(reset.bind(this),mms+ 900)
          }
        } // END Wave

        wave(200 * (this.props.uid+1))

    }

    render() {
        return (<td class={this.state.waveState} id={this.setId()}>
                    {this.props.children}
                  </td>);
    }

    setId(){
        return "palette"+this.props.uid;
    }

}

export default Palette;
