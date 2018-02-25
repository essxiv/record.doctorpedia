import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import axios from 'axios';

import Header from './Header';

class Video extends Component {

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
            <div id="Video">
                <Header />
                
                <div className="video-back-button">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm-1">
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                             <a href="/"><span className="video-buttons">Back</span></a>
                            
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9">
                            </div>                        
                        </div>
                    </div>
                </div>

                <div className="video-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2">
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="video-description">
                                    <h4>Introduce your expertise and experience</h4>
                                </div>
                                <div className="the-video"></div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                            </div>
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

export default withRouter(connect(mapState, mapDispatch)(Video));
