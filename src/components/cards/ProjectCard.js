import { React, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeBar from "../CodeBar";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    minWidth: 328,
  },
  media: {
    height: 140,
  },
});

const openInNewTab = (url) => window.open(url, "_blank");

class ProjectCard extends Component {
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
    const { classes } = this.props;

    return (
      <Card className={classes.root} style={{ borderRadius: "12px" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ flexDirection: "row" }}
            >
              {this.props.title}{" "}
              <Tooltip
                title="Project is live on the internet"
                placement="right"
              >
                <div
                  className="dot"
                  style={{
                    display:
                      this.props.url === undefined ? "none" : "inline-flex",
                  }}
                />
              </Tooltip>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.descr}
            </Typography>
            <CodeBar values={this.props.langUsed} />
          </CardContent>
        </CardActionArea>
        <CardActions style={{ padding: "16px" }}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            disabled={this.props.giturl === undefined ? true : false}
            onClick={() => openInNewTab(this.props.giturl)}
          >
            Explore Code
          </Button>
          <Button size="small" color="primary" onClick={this.handleOpen}>
            Learn More
          </Button>
          <Dialog
            className="project-dialog"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle onClose={this.handleClose}>
              <Typography variant="h5" component="h2">
                {this.props.title}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="body1" color="textSecondary" component="p">
                {this.props.longDescr}
                <Typography variant="body2" component="p" color="textSecondary">
                  <br />
                  Technologies Used:
                  <CodeBar values={this.props.langUsed} />
                </Typography>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectCard);
