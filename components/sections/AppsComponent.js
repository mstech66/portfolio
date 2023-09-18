import { React, Component } from "react";
import FullScreenDialog from "../FullScreenDialog.js";
import firebase from "firebase/app";
import "firebase/storage";
import AppCard from "../cards/AppCard.js";

const storage = firebase.storage().ref();

class AppsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
    };
    this.title = "Apps";
    this.getApps();
  }

  displayApp(appRef) {
    appRef
      .getDownloadURL()
      .then((url) => {
        // this.setState({ data: [...this.state.data, url] });
        this.setState({
          data: [
            { url: url, name: storage.storage.refFromURL(url).name },
            ...this.state.data,
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getApps() {
    let storageRef = storage.child("Apps").listAll();
    storageRef.then((result) => {
      result.items.forEach((ref) => {
        this.displayApp(ref);
      });
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  child = () => {
    return this.state.data.map((e, i) => {
      return <AppCard title={e.name} url={e.url} key={e.name} />;
    });
  };

  mainContent = () => {
    return this.child().length === 0 ? (
      <div className="wipDiv">
        <p id="wip" style={{}}>
          No Apps as of now
        </p>
      </div>
    ) : (
      <div className="appsGrid">{this.child()}</div>
    );
    //return <div className="appsGrid">{ ? this.child() : }</div>;
  };

  render() {
    return (
      <>
        <div className={this.props.classList} onClick={() => this.handleOpen()}>
          {this.title}
        </div>
        <FullScreenDialog
          title={this.title}
          titleColor="#3ddc84"
          childComponent={this.mainContent()}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default AppsComponent;
