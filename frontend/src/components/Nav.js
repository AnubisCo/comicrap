import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import line from "./../img/line.png";
// import logo from "./../img/logo.png";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { AppBar, Fab, makeStyles, Toolbar, useScrollTrigger, Zoom } from '@material-ui/core/';
import './Nav.css';

const useStyles = makeStyles((theme) => ({
    stickyWrapper: {
        position: "relative"
    },
    sticky: {
        position: "fixed",
        top: "0",
        zIndex: "100",
        width: "100vw"
    },
    button: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function Sticky() {
    return (
        <Toolbar>
            <img alt="a line" style={{ position: "absolute", top: "0", padding: "0", margin: "0", width: "100vw", height: "0.5vh" }} src={line} />
                Hello world
        </Toolbar>
    );
}

export default function Nav(props) {
    const classes = useStyles();
    const [isSticky, setSticky] = React.useState(false);
    const ref = React.useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect() <= 0)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        };
    }, []);

    return (
        <AppBar className={"shadow-lg " + classes.stickyWrapper + (isSticky ? " sticky" : "")} ref={ref}>
            <Sticky />
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