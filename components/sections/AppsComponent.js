import { React, Component } from "react";
import FullScreenDialog from "../FullScreenDialog.js";
import AppCard from "../cards/AppCard.js";

class AppsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
    };
    this.title = "Apps";
  }

  async componentDidMount() {
    const response = await fetch("/api/storage?object=apps", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { apps } = await response.json();
    this.state.data = apps;
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
      return <AppCard title={e.fileName} url={e.fileUrl} key={e.fileName} />;
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
