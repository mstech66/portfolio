import { React, Component } from 'react';
import { withStyles } from '@material-ui/styles';
import firebase from 'firebase/app';
import 'firebase/storage';

const styles = theme => ({
    root: {
        padding: '8px'
    }
});

const storage = firebase.storage().ref();

class ResumeComponent extends Component {
    constructor(props) {
        super(props);
        this.title = "Résumé";
    }

    handleOpen = () => {
        storage.child('Resume/CV.pdf').getDownloadURL().then((url) => {
            window.open(url, '_blank');
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return <>
            <div className={this.props.classList} onClick={() => this.handleOpen()}>
                {this.title}
            </div>
        </>;
    }
}

export default withStyles(styles)(ResumeComponent);
