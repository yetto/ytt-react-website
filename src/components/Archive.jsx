import React from 'react';

class Main extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
        return (<div id="layout">
                  {this.props.children}
                </div>);
    }

}

export default Main;