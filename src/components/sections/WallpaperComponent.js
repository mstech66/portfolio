import { React, Component } from 'react';
import { withStyles } from '@material-ui/styles';
import FullScreenDialog from '../FullScreenDialog.js';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import config from '../../config.json';

const styles = theme => ({
    root: {
        padding: '8px'
    }
});

firebase.initializeApp(config);

const storage = firebase.storage().ref();

class WallpaperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            minData: [],
            data: [],
            imgData: {},
        }
        this.title = "Wallpapers";
        // this.getImage();
    }

    getHighResUrl(url) {
        return url.replace('%2Fmin', '');
    }

    async componentDidMount() {
        let storageRef = storage.child('Wallpapers/min').listAll();
        let temp = [];
        await storageRef.then(async (result) => {
            await result.items.forEach(async (ref) => {
                let imgObj = {};
                await ref.getMetadata().then(async (data) => {
                    imgObj['name'] = data['name'];
                    const imgPath = String(data['fullPath']);
                    await storage.child(imgPath).getDownloadURL().then((url) => {
                        imgObj['minUrl'] = url
                        imgObj['imgUrl'] = this.getHighResUrl(url);
                        temp.push(imgObj);
                    }).catch((err) => console.log(err));
                }).catch((error) => {
                    console.log(error);
                });
            });
        }).finally(() => this.state.data = temp);
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    child = () => {
        console.log(`data is ${this.state.data}`)
        return this.state.data.map((e, i) => {
            console.log(e);
            return <a href={e['imgUrl']} target='_blank' rel="noreferrer">
                <img src={e['minUrl']} alt={e['name']} className="wallpaper" />
            </a>
        })

        // return this.state.minData.map((e, i) => {
        //     console.log(e);
        //     return <a href={e} target='_blank' rel="noreferrer">
        //         <img src={e} className="wallpaper" />
        //     </a>
        // });
    }

    mainContent = () => {
        return <div className="wallpaperGrid">
            {this.child()}
        </div>
    }

    render() {
        return <>
            <div className={this.props.classList} onClick={() => this.handleOpen()}>
                {this.title}
            </div>
            <FullScreenDialog title={this.title} titleColor="#ad5fe6"
                childComponent={this.mainContent()} open={this.state.open} handleClose={this.handleClose} />
        </>;
    }
}

export default withStyles(styles)(WallpaperComponent);
