import { React, Component } from "react";
import { styled } from "@mui/system";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import logo from "../images/wallpaper.jpg";

const StyledCardContent = styled(CardContent)({
  height: 140,
  width: "auto",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
});

const openInNewTab = (url) => window.open(url, "_blank");

class WallpaperCard extends Component {
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
    return (
      <Card style={{ borderRadius: "12px", minWidth: "328px" }}>
        <CardActionArea>
          <StyledCardContent
            style={{ backgroundImage: `url(${logo})` }}
          ></StyledCardContent>
        </CardActionArea>
        <CardActions style={{ padding: "16px" }}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => openInNewTab(logo)}
          >
            Download
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default WallpaperCard;
