import React, {Component} from 'react';
import './App.css';
import ReactCapture from './reactCapture';
import Webcam from './webCam';
import Test from './test';
import {BrowserView, MobileView, isBrowser, isMobile, TabletView, isTablet, isChrome} from "react-device-detect";

class App extends Component {
    constructor(props) {
        super(props);

        this.state =
            {
                image: null,
            };
    }

    render() {


        if (isMobile) {
            return (<div>
                <Test/>
            </div>)

        }

            return (
                <div>

                    <ReactCapture/>


                    }
                </div>
            )

    }


}

export default App;