import { React, Component } from "react";
import FullScreenDialog from "../FullScreenDialog.js";

class WallpaperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
    };
    this.title = "Wallpapers";
  }

  async componentDidMount() {
    const response = await fetch("/api/storage?object=wallpaper", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { wallpapers } = await response.json();
    console.log(wallpapers);
    this.state.data = wallpapers;
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
          href={e["imgUrl"]}
          key={e["imgName"]}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={e["imgUrl"]}
            alt={e["imgName"]}
            key={e["imgName"]}
            className="wallpaper"
          />
        </a>
      );
    });
  };

  mainContent = () => {
    return <div className="wallpaperGrid">{this.child()}</div>;
  };

  render() {
    return (
      <>
        <div className={this.props.classList} onClick={() => this.handleOpen()}>
          {this.title}
        </div>
        <FullScreenDialog
          title={this.title}
          titleColor="#ad5fe6"
          childComponent={this.mainContent()}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default WallpaperComponent;
