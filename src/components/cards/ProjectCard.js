import { React, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeBar from "../CodeBar";
import { IconButton, Tooltip } from "@material-ui/core";
import LaunchTwoTone from "@material-ui/icons/LaunchTwoTone";
import ProjectDialog from "../ProjectDialog";

const styles = (theme) => ({
  media: {
    height: 140,
  },
});

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
      <>
        <Card style={{ borderRadius: "12px" }}>
          <CardActionArea onClick={() => this.handleOpen()}>
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
        </Card>
        {this.state.open && (
          <ProjectDialog
            open={this.state.open}
            title={this.props.title}
            longDescr={this.props.longDescr}
            langUsed={this.props.langUsed}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            url={this.props.url}
            giturl={this.props.giturl}
          />
        )}
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectCard);
