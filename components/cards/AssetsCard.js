import { Card, CardMedia } from "@material-ui/core";
import { Component } from "react";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    position: "relative",
    borderRadius: "12px",
    minWidth: "300px",
    transition: "all 500ms"
  },
  overlay: {
    display: "flex",
    justifyContent: "center",
    padding: "8px 0px 8px 0px",
    color: "white",
    background: "unset",
  },
};

class AssetsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="assetsCard" style={styles.card}>
        <CardMedia image={this.props.image} style={styles.media} />
        <div style={styles.overlay}>{this.props.name}</div>
      </Card>
    );
  }
}

export default AssetsCard;
