import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    root: {
        margin: '24px 0px 0px 0px',
        justifySelf: 'center',
        "& a": {
            textDecoration: 'none !important',
            paddingRight: '20px',
            color: '#eeeeee'
        },
        "& a:nth-last-child(1)": {
            padding: '0px !important'
        },
        "& a:hover": {
            color: '#ffffff'
        }
    }
});

function SocialBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <a rel="noreferrer" target="_blank" href="https://github.com/mstech66"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/__m_a_n_t_h_a_n__"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a rel="noreferrer" href="https://twitter.com/Manthan_Mevada" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a rel="noreferrer" href="https://www.facebook.com/manthan66" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/manthanmevada/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
        </div>
    )
}

export default SocialBar;