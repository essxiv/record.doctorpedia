import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { } from '../../redux/reducers';
import axios from 'axios';

class Dashboard extends Component {

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

    handleSubmit() {
        console.log('Handling Submit;')
    }

    render() {
        return (
            <div id="Dashboard" className="no-padding-margin">

                <div id="about-videos" className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            <h4>Welcome To Doctorpedia Recording Portal</h4>
                            <p>Simply enter your details, and record your video. You can prepare the text in advance and upload it to the built-in prompt.</p>

                        </div>
                    </div>
                </div>

                <hr className="half-rule" />

                <div className="container enter-video-info">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 no-padding-margin">

                            <form onSubmit={this.handleSubmit}>

                                <div className="basic-video-input">
                                    <div className="enter-details-title" style={{paddingBottom: '30px'}}>Enter your details</div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name"
                                            ref={(input) => this.input = input} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input
                                            type="text"
                                            name="condition"
                                            placeholder="Condition/Expertise"
                                            ref={(input) => this.input = input} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            ref={(input) => this.input = input} />
                                        </div>  
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                
                                        <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple="" />

                                        <label for="file-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> <span>Profile Photo</span></label>

                                        </div>
                                    </div>
                                </div>

                                <div className="basic-short-intro">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="enter-details-title">Record a short intro about yourself</div>
                                            <div>
                                                <p>Introduce yourself, your experience and expertise</p>
                                                <span className="video-buttons"><a href="/video">Record Introduction</a></span>
                                                <span className="video-buttons" style={{marginLeft: '30px'}}>Upload</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                

                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className="basic-select-topic">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">

                            <div className="basic-select-outter">
                                <div className="enter-details-title">Select your section</div>
    
                                <div className="dropdown">
                                    <button className="dropdown-revamp btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Overview/Basics
                                    <span className="caret"></span></button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Testing and Diagnosis</a></li>
                                        <li><a href="#">Treatment</a></li>
                                        <li><a href="#">Latest Research</a></li>
                                    </ul>
                                </div>

                                <div className="basic-select-questions no-padding-margin">

                                    <div className="questions">Describe the condition </div>
                                    <hr />
                                    
                                    <div className="questions">What are the symptoms of the condition? </div>
                                    <hr />
                                    
                                    <div className="questions">What are the causes of the condition? </div>
                                    <hr />
                                    
                                    <div className="questions">What are the risk factors of the condition? </div>
                                    <hr />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="submit-video-form">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <a href="#"><div className="continue-btn">
                                <span>Submit</span></div>
                            </a>
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

export default withRouter(connect(mapState, mapDispatch)(Dashboard));
