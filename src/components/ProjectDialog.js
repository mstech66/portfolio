import { React, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeBar from "./CodeBar.js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import LaunchTwoTone from "@material-ui/icons/LaunchTwoTone.js";

const styles = (theme) => ({
  root: {
    minWidth: 328,
  },
  media: {
    height: 140,
  },
});

const openInNewTab = (url) => window.open(url, "_blank");

class ProjectDialog extends Component {
  render() {
    return (
      <Dialog
        className="project-dialog"
        open={this.props.open}
        onClose={this.props.handleClose}
        disableScrollLock
      >
        <DialogTitle>
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
          <Button
            size="small"
            variant="outlined"
            color="primary"
            disabled={this.props.giturl === undefined ? true : false}
            onClick={() => openInNewTab(this.props.giturl)}
          >
            Explore Code
          </Button>
          <Tooltip title="Launch Project" placement="top">
            <IconButton
              size="small"
              style={{ padding: "6px" }}
              disabled={this.props.url === undefined ? true : false}
              onClick={() => openInNewTab(this.props.url)}
            >
              <LaunchTwoTone />
            </IconButton>
          </Tooltip>
          <Button autoFocus onClick={this.props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectDialog);
