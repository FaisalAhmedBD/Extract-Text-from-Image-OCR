import React from 'react';
import {Tesseract} from "tesseract.ts";
import './test.scss'
import FontAwesome from 'react-fontawesome';
import ReactLoading from 'react-loading';
import myImage from './1.jpg';

const styles =
    {
        container:
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            },
        inputStyle:
            {
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                cursor: 'pointer',
                display: 'flex',
                height: '200px',
                justifyContent: 'center',
                outline: '3px dashed #ccc',
                outlineOffset: '5px',
                position: 'relative',
                width: '200px',
                marginBottom: '20px',
                marginLeft: '20px',
                marginTop: '20px',


            },
        fontAwesome:
            {
                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                color:'gray',

            },
        img: {

            maxHeight: '100%',
            maxWidth: '100%',
            position: 'absolute',

        }
    };
export default class FileUploader extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            active: false,
            imageSrc: null,
            loaded: false,
            rotation: 0,
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.ocr = this.ocr.bind(this);
    }


    onFileChange(e, file) {
        var file = file || e.target.files[0],
            reader = new FileReader();
        this.setState({
            imageSrc: reader.result,
            loaded: true
        });

        this.setState({loaded: false});

        reader.onload = (e) => {
            this.setState({
                imageSrc: reader.result,
                loaded: true
            });
        };

        reader.readAsDataURL(file);
    };

    ocr = () => {

        let myImage = this.state.imageSrc;

        Tesseract.recognize(myImage)
            .then(result => {
                    return alert('Extracted text : ' + result.text)
                }
            );

    };


    render() {

        return (
            <div style={styles.container}>
                <h4> Welcome to Ocr System</h4>
                <label style={styles.inputStyle}>
                    {this.state.imageSrc ? <img src={this.state.imageSrc} alt="imageForOcr" style={styles.img}/> : null}
                    <FontAwesome
                        class="fas fa-upload"
                        name="fas fa-upload"
                        size='3x'
                        style={styles.fontAwesome}
                    />
                    <input type="file" accept="image/*" onChange={this.onFileChange} ref="input"
                           style={{display: 'none'}}/>
                </label>
                < button onClick={this.ocr}> Use Ocr</button>

            </div>


        );
    }
}


