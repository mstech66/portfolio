import { React, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeBar from './CodeBar';

const styles = theme => ({
  root: {
    minWidth: 328,
  },
  media: {
    height: 140,
  },
});

const openInNewTab = (url) => window.open(url, "_blank");

class ProjectCard extends Component {

  render() {
    const { classes } = this.props;

    return <Card className={classes.root} style={{borderRadius: '12px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.descr}
          </Typography>
          <CodeBar values={this.props.langUsed} />
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding: '16px' }}>
        <Button size="small" variant="outlined" color="primary" disabled={this.props.url === undefined ? true : false} onClick={() => openInNewTab(this.props.url)}>
          Explore Code
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>;
  }
}

export default withStyles(styles, { withTheme: true })(ProjectCard);