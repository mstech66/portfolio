import { React, Component } from "react";
import FullScreenDialog from "../FullScreenDialog.js";
import data from "../../data/config.js";
import AssetsCard from "../cards/AssetsCard.js";

class AppsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
      figmaFiles: {
        Parchi:
          "https://www.figma.com/file/srCLxCzmnVITGMU2kkd7Wq/Parchi?type=design&t=B1CWDUrS6Fo61kNI-6",
        "Sticker Maker":
          "https://www.figma.com/file/2fpJ6aoN0QDQo17hJ95Wqk/Sticker-Maker-App?type=design&t=B1CWDUrS6Fo61kNI-6",
      },
    };
    this.title = "Assets";
  }

  async componentDidMount() {
    const response = await fetch(
      `https://api.figma.com/v1/projects/109899386/files`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-FIGMA-TOKEN": data.figmaToken,
        },
      }
    );
    const { files } = await response.json();
    this.state.data = files;
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
      return (
        <a
          href={this.state.figmaFiles[e["name"]]}
          target="_blank"
          rel="noreferrer"
        >
          <AssetsCard name={e["name"]} image={e["thumbnail_url"]} />
        </a>
      );
    });
  };

  mainContent = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "32px",
          margin: "32px",
          flexWrap: "wrap",
        }}
      >
        {this.child()}
      </div>
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
          titleColor="#359cd7"
          childComponent={this.mainContent()}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default AppsComponent;
