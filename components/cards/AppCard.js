import { React, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppCard = styled(Card)({
  backgroundColor: "#383B40",
  minWidth: "100px",
  position: "relative",
  cursor: "pointer",
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
      <StyledAppCard>
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
                style={{ textDecoration: "none" }}
                target="_blank"
                href={this.props.url}
              >
                <FontAwesomeIcon icon={faDownload} size="lg" color="#f4f4f4" />
              </a>
            </Grid>
          </Grid>
        </CardContent>
      </StyledAppCard>
    );
  }
}

export default AppCard;
