import React from 'react';
import Camera from './camera';
export  default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.submitPhoto = this.submitPhoto.bind(this);
    }

    submitPhoto() {
        const image = this.camera.captureImage();

    }

    render() {
        return (
            <div>
                <Camera ref={(camera) => {
                    this.camera = camera
                }}/>
            </div>
        );
    }

}

