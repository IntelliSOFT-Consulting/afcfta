import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import productInformation from "../../assets/productInformation.json";
import { Grid } from "@material-ui/core";
import { DragIndicatorSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {},
  productDetails: {
    display: "block",
  },
}));

// type Props = {
//   data: any[];
//   country: string;
//   code: string;
// };

interface productInformationType {
  ProductName: string;
  ProductInformation: {
    Brand: string;
    Presentation: string;
    Concentration: string;
    GnericsAvailable: number;
    IsProductRegistered?: string;
    IsItPartOfThePublicEML: string;
  };
}

const ProductInformation = () => {
  const classes = useStyles();
  //   const [indicatorData, setIndicatorData] = useState([]);

  //   const parseData = (subIndicator: string) => {
  //     const str = "ProductInformation";
  //     const indicators: any = Object.entries(
  //       productInformation[0].ProductInformation
  //     );
  //     return indicators;
  //   };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <Typography> {productInformation[0].ProductName} </Typography>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Product Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.productDetails}>
                {Object.entries(
                  productInformation[0]["ProductInformation"]
                ).map((data: any) => {
                  return <Typography> {data[0] + " : " + data[1]} </Typography>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Procurement Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.productDetails}>
                {Object.entries(
                  productInformation[0]["ProcurementInformation"]
                ).map((data: any) => {
                  return <Typography> {data[0] + " : " + data[1]} </Typography>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Procurement Volume and Pricing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.productDetails}>
                {Object.entries(
                  productInformation[0]["ProcurementVolumePricing"]
                ).map((data: any) => {
                  return <Typography> {data[0] + " : " + data[1]} </Typography>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Product Vendor Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.productDetails}>
                {Object.entries(
                  productInformation[0]["ProductVendorInformation"]
                ).map((data: any) => {
                  return <Typography> {data[0] + " : " + data[1]} </Typography>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Product Affordability
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.productDetails}>
                {Object.entries(
                  productInformation[0]["ProductAffordability"]
                ).map((data: any) => {
                  return <Typography> {data[0] + " : " + data[1]} </Typography>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInformation;
