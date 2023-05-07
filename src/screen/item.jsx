import React, { useEffect, useState } from "react";
import "./css/item.css";
import axios from "axios";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    marginTop: 20,
    maxWidth: 1200,
    padding: 3,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    margin: "auto",
  },
  title: {
    marginTop: 3,
    marginBottom: 3,
  },
  description: {
    marginBottom: 3,
  },
  price: {
    marginBottom: 3,
  },
  addToCart: {
    marginLeft: 2,
  },
}));

const ProductDetailPage = (props) => {
  const { data } = props;
  const classes = useStyles();
  const images = data?.images?.split(";") || [];
  images.pop()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Carousel autoPlay>
            {images?.map((image, i) => {
              return (
                <img loading="lazy"  className={classes.image} src={image} alt={data?.name} />
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className={classes.title}>
            {data?.name}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {data?.description}
          </Typography>
          <Typography variant="h6" className={classes.price}>
            {data?.price}
            {data?.currency === "American Dollar" ? "$" : "L.L"}
          </Typography>
          <a  href={`tel: ${data?.phonenumber}`} className="message-btn">Call Now</a>
          <span/>
          <a target="_blank" href={`https://wa.me/${data?.phonenumber}`} className="message-btn ">Whatsapp Us</a>
        </Grid>
      </Grid>
    </div>
  );
};
export default function Item() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log(location);
  // if (!location.state) {
    // return <Navigate to="/404" state={{ from: location }} replace />;
  // }


  useEffect(() => {
   
      axios
      .get(`https://cardealerlebanon.com/input/webapi/viewItemById.php?id=${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.state]);

  return (
    <div className="item">
      <ProductDetailPage data={data} />
    </div>
  );
}
