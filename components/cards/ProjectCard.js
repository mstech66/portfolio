import { React, Component } from "react";
import CodeBar from "../CodeBar";
import ProjectDialog from "../ProjectDialog";
import {
  Card,
  CardActionArea,
  CardActions,
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
        <Card className="flex-col h-[140] !rounded-[12px] p-[16px] cursor-pointer" onClick={() => this.handleOpen()}>
            <CardContent className="!p-[0]">
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{
                  flexDirection: "row",
                  fontFamily: "var(--font-manrope)",
                }}
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
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {this.props.descr}
              </Typography>
            </CardContent>
            <CardActions className="!p-[0]">
              <CodeBar values={this.props.langUsed} />
            </CardActions>
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
