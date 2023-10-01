import { React, Component } from "react";

class ResumeComponent extends Component {
  constructor(props) {
    super(props);
    this.title = "Résumé";
  }

  handleOpen = async () => {
    const response = await fetch("/api/storage?object=resume", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { url } = await response.json();
    window.open(url, "_blank");
  };

  render() {
    return (
      <>
        <div className={this.props.classList} onClick={() => this.handleOpen()}>
          {this.title}
        </div>
      </>
    );
  }
}

export default ResumeComponent;
