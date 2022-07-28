import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import react from '../images/logo/React.png';
import android from '../images/logo/android.png';
import angular from '../images/logo/angular.png';
import css from '../images/logo/css3.png';
import figma from '../images/logo/figma2.png';
import firebase from '../images/logo/firebase2.png';
import flutter from '../images/logo/flutter2.png';
import git from '../images/logo/bash.png';
import js from '../images/logo/js.png';
import java from '../images/logo/java2.png';
import kotlin from '../images/logo/kotlin2.png';
import mongo from '../images/logo/mongodb.png';
import node from '../images/logo/nodejs.png'
import pi from '../images/logo/pi.png'
import python from '../images/logo/python.png';
import uwp from '../images/logo/uwp.png';
import cs from '../images/logo/cs.png';
import { Tooltip } from '@material-ui/core';

const languages = {
    android: android,
    angular: angular,
    css: css,
    'c#': cs,
    figma: figma,
    firebase: firebase,
    flutter: flutter,
    git: git,
    java: java,
    js: js,
    kotlin: kotlin,
    mongo: mongo,
    node: node,
    python: python,
    react: react,
    raspberrypi: pi,
    UWP: uwp
};

const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const useStyles = makeStyles({
    root: {
        margin: '24px 0px 0px 0px'
    },
    codeLogo: {
        display: 'inline-block',
        marginRight: '12px',
        width: 'auto',
        height: '24px'
    }
});

function CodeLogo(props) {
    const classes = useStyles();
    return (
        <Tooltip title={capitalize(props.title)} placement="top">
            <img src={props.name} className={classes.codeLogo} alt={capitalize(props.title)} />
        </Tooltip>
    )
}

function CodeBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                props.values.map((value) => {
                    return <CodeLogo key={value} name={languages[value]} title={value} />
                })
            }
        </div>
    )
}

export default CodeBar;