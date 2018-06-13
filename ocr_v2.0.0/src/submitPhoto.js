class SubmitPhoto extends React.Component {
    state = { currentImage: null }
    savePhoto() {
        const image = this.props.takePicture()
        this.setState({ currentImage: image })
    }