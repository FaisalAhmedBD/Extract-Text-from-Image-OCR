import React from 'react';
import Webcam from 'react-webcam';
import {Tesseract} from "tesseract.ts";
const divStyle =
    {
        container:
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',

            },
        imageContainer:
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height:'100%',
                backgroundColor: '#ffffb3',

            },
        buttonStyle:
            {
                backgroundColor: '#99ffcc',
                borderRadius: '30px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingRight: '20px',
                paddingLeft: '20px',
                fontSize: '22px',
                marginBottom: '20px',
            }

    };

class reactCapture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {screenShot: null};
        this.setRef = this.setRef.bind(this);
        this.capture = this.capture.bind(this);
        this.ocr = this.ocr.bind(this);
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({screenShot: imageSrc});
    };
    ocr = () => {

        let myImage = this.state.screenShot;
        Tesseract.recognize(myImage)
            .then(result => alert('Extracted text : '+ result.text)
            )

    };

    render() {
        return (
            <div style={divStyle.container}>

                <h1>Welcome to Text Extractor from Image</h1>

                <div style={divStyle.imageContainer}>
                    <Webcam
                        audio={false}
                        height={500}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={500}
                    />
                    <button onClick={this.capture} style={divStyle.buttonStyle}>Capture photo</button>
                    {this.state.screenShot ? <img src={this.state.screenShot} alt="imageForOcr" style={{marginBottom: '20px'}}/> : null}

                    <button onClick={this.ocr} style={divStyle.buttonStyle}>Use Ocr</button>
                </div>
            </div>
        );
    }
}

export default reactCapture;