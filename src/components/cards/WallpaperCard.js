import { React, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from '../images/wallpaper.jpg';

const styles = theme => ({
  root: {
    minWidth: 328,
  },
  media: {
    height: 140,
  },
  wallpaper:{
      height: 140,
      width: 'auto',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
  }
});

const openInNewTab = (url) => window.open(url, "_blank");

class WallpaperCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const { classes } = this.props;

    return <Card className={classes.root} style={{ borderRadius: '12px' }}>
      <CardActionArea>
        <CardContent className={classes.wallpaper} style={{backgroundImage: `url(${logo})`}}>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding: '16px' }}>
        <Button size="small" variant="outlined" color="primary" onClick={() => openInNewTab(logo)}>
          Download
        </Button>
      </CardActions>
    </Card>;
  }
}

export default withStyles(styles, { withTheme: true })(WallpaperCard);