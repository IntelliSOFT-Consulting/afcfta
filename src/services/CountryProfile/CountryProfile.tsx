import { Grid, Typography, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import africaMapData from "@highcharts/map-collection/custom/africa.geo.json";
import countryProfileData from "../../assets/data/countryProfile.json";
import countryHealthIndicatorData from "../../assets/data/countryHealthIndicators.json";
import ProductInformation from "./ProductInformation";
import CountryHealthIndicators from "./CountryHealthIndicators";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "16px",
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  paper: {
    padding: "16px",
  },
}));

const CountryProfile = () => {
  const classes = useStyles();
  const [selectedCountry, setSelectedCountry] = useState("Kenya");
  const [selectedCode, setSelectedCode] = useState("KE");

  highchartsMap(Highcharts);

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country.Country);
    setSelectedCode(country.code);
  };

  let code = "hc-a2";
  const mapOptions = {
    chart: {
      map: "custom/africa",
      backgroundColor: "transparent",
      height: 550,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      formatter: function (this: any) {
        return (
          "<b>" +
          this.point.name +
          "</b>" +
          "<br>" +
          "<b>" +
          "Total Pharma Import (US Million):" +
          "</b>" +
          this.point["Total Pharma Import (US Million)"] +
          "<br>" +
          "<b>" +
          "Annual Volume Procured in USD in the Public Sector: " +
          "</b>" +
          this.point["Annual Volume Procured in USD in the Public Sector"] +
          "<br>" +
          "<b>" +
          "Annual Public Cost of Procurement in USD" +
          "</b>" +
          this.point["Annual Public Cost of Procurement in USD"]
        );
      },
    },
    exporting: {
      enabled: false,
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              handleCountryClick(this);
            },
          },
        },
      },
    },

    mapNavigation: {},

    colorAxis: {
      min: 0,
      minColor: "rgb(249, 219, 142)",
      maxColor: "rgb(249, 219, 142)",
    },

    series: [
      {
        data: countryProfileData,
        mapData: africaMapData,
        joinBy: ["iso-a2", "code"],
        name: "",
        cursor: "pointer",
        borderColor: "black", //changes color of the country borders
        borderWidth: 0.5,
        states: {
          hover: {
            color: "#B22222",
          },
        },
        dataLabels: {
          // enabled: true,
          // format: '{point.name}'
        },
      },
    ],
  };

  const [options, setOptions] = useState(mapOptions);

  const parseCountryProfileData = (data: any) => {
    const mapData = [];
    data.forEach(function (d: any) {
      mapData.push({
        ...d,
        code: d.code.toUpperCase(),
        value: d.id,
      });
    });
  };

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <HighchartsReact
              constructorType={"mapChart"}
              highcharts={Highcharts}
              options={options}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography className={classes.pageTitle}>
              {`Product Information - ` + selectedCountry}
            </Typography>
            <Paper className={classes.paper}>
              <ProductInformation />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.pageTitle}>
                Country health indicators
              </Typography>
              <CountryHealthIndicators
                data={countryHealthIndicatorData}
                country={selectedCountry}
                code={selectedCode}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CountryProfile;
