import { React, Component } from "react";
import CodeBar from "./CodeBar.js";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip, Typography } from "@material-ui/core";

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
              Technologies Used:<br />
              <CodeBar values={this.props.langUsed} />
            </Typography>
          </Typography>
        </DialogContent>
        <DialogActions>
          <div style={{ marginRight: "auto", marginLeft: "12px" }}>
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
              <Button
                size="small"
                variant="text"
                color="secondary"
                style={{ margin: "6px" }}
                disabled={this.props.url === undefined ? true : false}
                onClick={() => openInNewTab(this.props.url)}
              >
                Launch
              </Button>
            </Tooltip>
          </div>
          <Button
            autoFocus
            style={{ marginRight: "12px" }}
            onClick={this.props.handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ProjectDialog;
