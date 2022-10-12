import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import productInformation from "../../assets/data/product.json";
import { FormControl, Grid, NativeSelect } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {},
  productDetails: {
    display: "block",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const ProductInformation = () => {
  const classes = useStyles();

  const [activeProduct, setActiveProduct] = useState<string>("Oxytocin");
  const [productData, setProductData] = useState<any[] | null>(null);

  const names = productInformation?.map(({ Product }) => Product);

  const handleProductChange = (event: any) => {
    setActiveProduct(event.target.value);
  };

  useEffect(() => {
    const productData = productInformation?.filter(
      (product) => product.Product === activeProduct
    );
    setProductData(productData);
  }, [activeProduct]);

  console.log(productData);

  return (
    <div>
      <Grid container>
        <Grid item xs={6} sm={4}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={activeProduct}
              onChange={handleProductChange}
              defaultValue={names[0]}
              inputProps={{ "aria-label": "product" }}
            >
              {names.map((product: string) => {
                return (
                  <option value={product} key={product}>
                    {product}
                  </option>
                );
              })}
            </NativeSelect>
          </FormControl>
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
                {productData &&
                  Object.entries(productData[0]["ProductInformation"]).map(
                    (data: any, index: any) => {
                      return (
                        <Typography key={index}>
                          {" "}
                          {data[0] + " : " + data[1]}{" "}
                        </Typography>
                      );
                    }
                  )}
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
                {productData &&
                  Object.entries(
                    productData[0]["ProcurementVolumePricing"]
                  ).map((data: any, index: any) => {
                    return (
                      <Typography key={index}>
                        {" "}
                        {data[0] + " : " + data[1]}{" "}
                      </Typography>
                    );
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
                {productData &&
                  Object.entries(productData[0]["ProcurementInformation"]).map(
                    (data: any, index: any) => {
                      return (
                        <Typography key={index}>
                          {" "}
                          {data[0] + " : " + data[1]}{" "}
                        </Typography>
                      );
                    }
                  )}
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
                {productData &&
                  Object.entries(
                    productData[0]["ProductVendorInformation"]
                  ).map((data: any, index: any) => {
                    return (
                      <Typography key={index}>
                        {" "}
                        {data[0] + " : " + data[1]}{" "}
                      </Typography>
                    );
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
                {productData &&
                  Object.entries(productData[0]["ProductAffordability"]).map(
                    (data: any, index: any) => {
                      return (
                        <Typography key={index}>
                          {" "}
                          {data[0] + " : " + data[1]}{" "}
                        </Typography>
                      );
                    }
                  )}
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInformation;
