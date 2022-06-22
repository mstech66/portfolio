import { React, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent, Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const styles = (theme) => ({
  root: {
    minWidth: 328,
  },
  appCard: {
    backgroundColor: "#383B40",
    minWidth: "100px",
    position: "relative",
  },
  downloadBtn: {
    textDecoration: "none",
  },
});

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.setState({
      open: false,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.appCard}>
        <CardContent style={{ padding: "0" }}>
          <Grid container>
            <Grid item xs={8} style={{ padding: "16px 0px 16px 16px " }}>
              <Typography>{this.props.title}</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "grid",
                placeItems: "center",
                backgroundColor: "#3ddc84",
              }}
            >
              <a
                rel="noreferrer"
                id={classes.downloadBtn}
                target="_blank"
                href={this.props.url}
              >
                <FontAwesomeIcon icon={faDownload} size="lg" color="#f4f4f4" />
              </a>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppCard);
