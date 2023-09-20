import { React, Component } from "react";
import CodeBar from "../CodeBar";
import ProjectDialog from "../ProjectDialog";
import {
  Card,
  CardActionArea,
  CardContent,
  Tooltip,
  Typography,
} from "@material-ui/core";

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
        <Card style={{ borderRadius: "12px", height: 140 }}>
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

export default ProjectCard;
