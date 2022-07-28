import React from 'react';
import js from '../images/logo/js.png';
import angular from '../images/logo/angular.png';
import kotlin from '../images/logo/kotlin.png';
import git from '../images/logo/git.png';
import react from '../images/logo/React.png';
import flutter from '../images/logo/flutter1.jpg';
import mongodb from '../images/logo/mongodb.png';
import java from '../images/logo/java.png';
import figma from '../images/logo/figma.png';
import firebase from '../images/logo/firebase.png';
import node from '../images/logo/nodejs.png';
import android from '../images/logo/android.png';
import { Tooltip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    tooltip: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 12,
    },
});

function SkillsGrid() {
    const classes = useStyles();

    return <div className="skills-grid">
        <div className="skills-title">
            Skills
        </div>
        <div className="card skill-tile tile1">
            <Tooltip title="JavaScript" placement="top" classes={classes}>
                <img src={js} alt="JavaScript" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile2">
            <Tooltip title="Angular" placement="left" classes={classes}>
                <img src={angular} alt="Angular" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile3">
            <Tooltip title="Kotlin" placement="right" classes={classes}>
                <img src={kotlin} alt="Kotlin" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile4">
            <Tooltip title="Git" placement="left-end" classes={classes}>
                <img src={git} alt="Git" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile5">
            <Tooltip title="React" placement="top" classes={classes}>
                <img src={react} alt="React" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile6">
            <Tooltip title="Flutter" placement="right-end" classes={classes}>
                <img src={flutter} alt="Flutter" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile7">
            <Tooltip title="MongoDB" placement="left-start" classes={classes}>
                <img src={mongodb} alt="MongoDB" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile8">
            <Tooltip title="Java" placement="left-end" classes={classes}>
                <img src={java} alt="Java" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile9">
            <Tooltip title="Figma" placement="top" classes={classes}>
                <img src={figma} alt="Figma" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile10">
            <Tooltip title="Firebase" placement="top" classes={classes}>
                <img src={firebase} alt="Firebase" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile11">
            <Tooltip title="NodeJS" placement="top" classes={classes}>
                <img src={node} alt="NodeJS" />
            </Tooltip>
        </div>
        <div className="card skill-tile tile12">
            <Tooltip title="Android" placement="right-start" classes={classes}>
                <img src={android} alt="Android" />
            </Tooltip>
        </div>
    </div>;
}

export default SkillsGrid;