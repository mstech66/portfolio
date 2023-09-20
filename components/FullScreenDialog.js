import { CloseRounded } from "@material-ui/icons";
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core";
import React from "react";

const StyledAppBar = styled(AppBar)({
  position: "relative",
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  flex: 1,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <StyledAppBar
        style={{ background: `${props.titleColor}` }}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseRounded />
          </IconButton>
          <StyledTitle variant="h6">{props.title}</StyledTitle>
        </Toolbar>
      </StyledAppBar>
      <div>{props.childComponent}</div>
    </Dialog>
  );
}
