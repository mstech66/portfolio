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
import type { TransitionProps } from "@material-ui/core/transitions";
import React from "react";

const StyledAppBar = styled(AppBar)({
  position: "relative",
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  flex: 1,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref as React.Ref<unknown>}
      {...(props as TransitionProps)}
    />
  );
});

interface FullScreenDialogProps {
  childComponent?: React.ReactNode;
  handleClose: () => void;
  open: boolean;
  title: string;
  titleColor?: string;
}

export default function FullScreenDialog({
  childComponent,
  handleClose,
  open,
  title,
  titleColor,
}: FullScreenDialogProps) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition as React.ComponentType<any>}
      PaperProps={{
        style: {
          backgroundColor: "#1c1c1e",
          color: "#ffffff",
        },
      }}
    >
      <StyledAppBar
        style={{
          background: titleColor || "#1f2025",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
        position="sticky"
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleClose}
            aria-label="close"
            style={{
              color: "#ffffff",
              backgroundColor: "rgba(255, 255, 255, 0.18)",
              padding: "8px",
              marginRight: "8px",
              transition: "all 200ms ease",
            }}
          >
            <CloseRounded
              style={{
                fill: "#ffffff",
                color: "#ffffff",
                fontSize: "1.45rem",
              }}
            />
          </IconButton>
          <StyledTitle
            variant="h6"
            style={{ color: "#ffffff", fontWeight: 700 }}
          >
            {title}
          </StyledTitle>
        </Toolbar>
      </StyledAppBar>
      <div
        style={{
          backgroundColor: "#1c1c1e",
          minHeight: "calc(100vh - 64px)",
          overflowY: "auto",
        }}
      >
        {childComponent}
      </div>
    </Dialog>
  );
}
