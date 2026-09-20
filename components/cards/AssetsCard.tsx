import { Card, CardMedia } from "@material-ui/core";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    position: "relative" as const,
    borderRadius: "12px",
    minWidth: "300px",
    transition: "all 500ms"
  },
  overlay: {
    display: "flex",
    justifyContent: "center",
    padding: "8px 0px 8px 0px",
    color: "white",
    background: "unset",
  },
};

interface AssetsCardProps {
  image: string;
  name: string;
}

export default function AssetsCard({ image, name }: AssetsCardProps) {
  return (
    <Card className="assetsCard" style={styles.card}>
      <CardMedia image={image} style={styles.media} />
      <div style={styles.overlay}>{name}</div>
    </Card>
  );
}
