import React from "react";
// import { Link } from "react-router-dom";
import line from "./../img/line.png";
// import logo from "./../img/logo.png";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { AppBar, Fab, makeStyles, Toolbar, useScrollTrigger, Zoom } from '@material-ui/core/';
import './Nav.css';

const useStyles = makeStyles((theme) => ({
    stuck: {
        position: 'fixed',
        top: "0",
        width: "100vw"
    },
    button: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function Nav(props) {
    const [pos, setPos] = React.useState(0)

    
    return (
        <AppBar position="relative" className="shadow-lg" style={{ zIndex: "1" }}>
            <Toolbar>
                <img alt="a line" style={{ position: "absolute", top: "0", padding: "0", margin: "0", width: "100vw", height: "0.5vh" }} src={line} />
                Hello world
            </Toolbar>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </AppBar>
    );
}

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector("#top");

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.button}>
                {children}
            </div>
        </Zoom>
    );
}