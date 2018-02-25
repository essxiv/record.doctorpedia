import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
import { } from '../../redux/reducers';
import axios from 'axios';

import Header from './Header';
import Dashboard from './Dashboard';

class Initial extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        // console.log('ComponentWillMount(): Initialize');
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount();');
    }

    componentDidMount() {
        // console.log('ComponentWillMount(): Initialize');
    }

    componentWillReceiveProps() {
        // console.log('ComponentReceivedProps();');
    }

    componentWillUpdate() {
        // console.log('ComponentWillMount();');
    }


    render() {

        return (
            <div id="Initial">
                <Header />
                <Dashboard />
            </div>
        )

    }

}

function mapState(state) {
    // console.log('Redux States: ', state);
    return {
        reducer: state.reducer
    }
}
 function mapDispatch(dispatch) {
    //  console.log(dispatch);
     return {
        // putChangeStatus: (task, bool) => {dispatch(putChangeStatus(task, bool))}
     }
 }

export default withRouter(connect(mapState, mapDispatch)(Initial));
