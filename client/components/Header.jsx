import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import axios from 'axios';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        // console.log('ComponentWillMount(): 404');
    }

    componentWillUnmount() {
        // console.log('ComponentWillUnmount();');
    }

    componentDidMount() {
        // console.log('ComponentWillMount(): 404');
    }

    componentWillReceiveProps() {
        // console.log('ComponentReceivedProps();');
    }

    componentWillUpdate() {
        // console.log('ComponentWillMount();');
    }

    render() {
        return (
            <div id="Header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div></div>      
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">   
                            <div className="doctorpedia-header-logo"></div>   
                            <div className="doctorpedia-header-logo-mobile"></div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">             
                            <div></div>                          
                        </div>
                    </div>
                </div>
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

export default withRouter(connect(mapState, mapDispatch)(Header));
