import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import CodeBar from './CodeBar';

const useStyles = makeStyles({
  root: {
    minWidth: 328,
    maxWidth: 328
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.descr}
          </Typography>
          <CodeBar values={props.langUsed} />
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding: '16px' }}>
        <Button size="small" variant="outlined" color="primary">
          Explore Code
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}