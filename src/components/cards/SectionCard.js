import { React, Component } from 'react';
import { withStyles } from '@material-ui/styles';
import FullScreenDialog from '../FullScreenDialog';

const styles = theme => ({
    root: {
        padding: '8px'
    }
});

class SectionCard extends Component {
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
        return <>
            <div className={this.props.classList} onClick={() => this.handleOpen()}>
                {this.props.title}
            </div>
            <FullScreenDialog title={this.props.title} open={this.state.open} handleClose={this.handleClose} />
        </>;
    }
}

export default withStyles(styles)(SectionCard);