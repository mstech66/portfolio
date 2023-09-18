import { React, Component } from "react";
import FullScreenDialog from "../FullScreenDialog";

class SectionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
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

  render() {
    return (
      <>
        <div className={this.props.classList} onClick={() => this.handleOpen()}>
          {this.props.title}
        </div>
        <FullScreenDialog
          title={this.props.title}
          open={this.state.open}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default SectionCard;
