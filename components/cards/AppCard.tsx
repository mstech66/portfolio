import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CardContent, Grid, Typography, styled, Card } from "@material-ui/core";

const StyledAppCard = styled(Card)({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "14px",
  minWidth: "100px",
  position: "relative",
  color: "#ffffff",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
});

interface AppCardProps {
  title: string;
  url: string;
}

export default function AppCard({ title, url }: AppCardProps) {
  return (
    <StyledAppCard>
      <CardContent style={{ padding: "0" }}>
        <Grid container alignItems="center" style={{ minHeight: "68px" }}>
          <Grid item xs={9} style={{ padding: "16px 20px" }}>
            <Typography
              style={{
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "0.95rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <a
              rel="noreferrer"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                transition: "all 0.2s ease",
              }}
              target="_blank"
              href={url}
              title={`Download ${title}`}
            >
              <FontAwesomeIcon icon={faDownload} size="sm" color="#ffffff" />
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </StyledAppCard>
  );
}
