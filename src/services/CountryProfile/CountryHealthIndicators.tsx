import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
const flatten = require("flat");

type Props = {
  data: any[];
  country: string;
  code: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  table: {
    minWidth: 650,
  },
  tableHeader: {
    fontWeight: "bold",
  },
}));

const CountryHealthIndicators = ({ data, country, code }: Props) => {
  const classes = useStyles();
  const [year, setYear] = useState<string>("2000");
  const [years, setYears] = useState<string[]>([]);
  const [indicatorData, setIndicatorData] = useState<any>();
  const [activeIndicator, setActiveIndicator] = useState<string>(
    "SOCIO-ECONOMIC_PROFILE"
  );
  const [columns, setColumns] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  const handleYearChange = (event: any) => {
    setYear(event.target.value);
  };

  const parseData = (data: any[], indicator: string) => {
    const countryData = data.filter(function (d) {
      return d.code === code;
    });

    const yearlyData = countryData[0][indicator];
    let years: string[] = [];
    yearlyData?.forEach((data: any) => {
      years.push(Object.keys(data)[0]);
    });
    setYears(years);

    const yearData = yearlyData.filter(function (d: any) {
      return Object.keys(d).includes(year);
    });

    const columns = Object.keys(yearData[0][year]);
    const rows = Object.values(yearData[0][year]);
    setColumns(columns);
    setColumns(rows);

    setIndicatorData(yearData[0][year]);
  };

  useEffect(() => {
    parseData(data, activeIndicator);
    console.log(indicatorData);
  }, [code, year]);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Social economic profile
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Health burden</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Health spending
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Pharma imports
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  onChange={handleYearChange}
                >
                  {years.map((year: string) => {
                    return (
                      <MenuItem value={year.toString()} key={year}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeader}>
                        {" "}
                        Total Number Population
                      </TableCell>
                      <TableCell className={classes.tableHeader}>
                        {" "}
                        GDP Growth %
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {indicatorData?.TotNoPopulation}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {indicatorData?.GDPGrowth}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryHealthIndicators;
