import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/images/logo.png";
import UNLogo from "../assets/images/UNlogo.png";
import { PieChart, Map, LocalLibrary, Help } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    borderBottom: "8px solid #CD0808",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "2rem",
  },
  iconLink: {
    textAlign: "center",
    marginRight: "8px",
    marginLeft: "8px",
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Link to={"/"}>
            <img src={Logo} alt="afcfta" className={classes.menuButton} />
          </Link>

          <a
            href="https://uneca.org/afcfta-anchored-pharma-initiative"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={UNLogo} alt="un-logo" className={classes.menuButton} />
          </a>

          <Typography variant="h6" className={classes.title}>
            AfCFTA Portal
          </Typography>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://198.74.52.186/dhis-web-commons/security/login.action"
            className={classes.iconLink}
          >
            <PieChart />
            <Typography style={{ fontSize: "0.9rem" }}> Data Entry </Typography>
          </a>
          <Link to="/country-profile" className={classes.iconLink}>
            <Map />
            <Typography style={{ fontSize: "0.9rem" }}>
              {" "}
              Country Profile
            </Typography>
          </Link>
          <Link to="" className={classes.iconLink}>
            <LocalLibrary />
            <Typography style={{ fontSize: "0.9rem" }}>
              {" "}
              Data sources & Definitions
            </Typography>
          </Link>
          <Link to="" className={classes.iconLink}>
            <Help color="secondary" />
            <Typography style={{ fontSize: "0.9rem" }}> FAQs</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
