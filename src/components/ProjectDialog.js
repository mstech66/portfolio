import { React, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeBar from "./CodeBar.js"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    minWidth: 328,
  },
  media: {
    height: 140,
  },
});

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
            <Button autoFocus onClick={this.props.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectDialog);
