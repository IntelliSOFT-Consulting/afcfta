import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import africaMap from "../../assets/images/dashboard-africa-map.png";
import indicatorsImg from "../../assets/images/dashboard-indicators.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "16px",
  },
  pageTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
  },
  paper: {
    textAlign: "center",
    padding: "16px",
  },

  intro: {
    textAlign: "left",
    fontSize: "0.9rem",
  },

  img: {
    width: "20rem",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
  partnerships: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
  },
  mapImage: {
    width: "40%",
  },
  indicatorImage: {
    width: "45%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  // const [readMore,setReadMore]=useState(false);

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.pageTitle}>Project Brief</Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper} style={{ height: "100%" }}>
              <Typography className={classes.intro}>
                As part of its mandate to deliver on Agenda 2063, the SDGs and
                operationalization of the African Continental Free Area (AfCFTA)
                by translating ideas into action and in line with its commitment
                that private sector and public sector dialogue yields tangible
                outcomes, the ECA went on to conceptualize The AfCFTA-Anchored
                Pharmaceutical Initiative. Commissioned in 10 selected pilot
                African countries which include Seychelles, Madagascar, Comoros,
                Mauritius, Djibouti, Eritrea, Rwanda, Sudan, Kenya and Ethiopia,
                the AfCFTA-anchored Pharma initiative’s key objective is to
                address socio-economic-related challenges facing African member
                countries in improving access to maternal, neonatal and child
                health (MNCH) essential medicines and commodities and the
                creation of fiscal space to the African Governments given the
                emerging trend of rising government debts.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.paper} style={{ height: "100%" }}>
              <img
                src={africaMap}
                alt={africaMap}
                className={classes.mapImage}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <img
                src={indicatorsImg}
                alt={indicatorsImg}
                className={classes.indicatorImage}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
