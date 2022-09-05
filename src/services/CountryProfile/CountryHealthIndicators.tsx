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
  Select,
  Table,
  TableBody,
  TableCell,
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
}));

const CountryHealthIndicators = ({ data, country, code }: Props) => {
  const classes = useStyles();
  const [year, setYear] = useState<string>("2000");
  const [years, setYears] = useState<string[]>([]);
  const [indicatorData, setIndicatorData] = useState<any>();
  const [activeIndicator, setActiveIndicator] = useState<string>(
    "SOCIO-ECONOMIC_PROFILE"
  );

  const handleYearChange = (event: any) => {
    setYear(event.target.value);
  };

  const parseData = (data: any[], indicator: string) => {
    let indicators = Object.keys(data[0]);
    const flattenedIndicators = flatten(data);

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

    setIndicatorData(yearData[0][year]);
  };

  useEffect(() => {
    parseData(data, activeIndicator);
    console.log(year, indicatorData);
  }, [code, year]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
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
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
          >
            {indicatorData &&
              Object.entries(indicatorData)?.map((data: any) => {
                return (
                  <div>
                    <ListItem button>
                      {" "}
                      <Typography>
                        {" "}
                        {data[0] + " : " + data[1]}{" "}
                      </Typography>{" "}
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
          </List>

          {/* <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Total number of population</TableCell>
                <TableCell>GDP Growth</TableCell>
              </TableRow>
            </TableHead>
          </Table> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default CountryHealthIndicators;
