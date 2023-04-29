import usePagination from "../components/pagination";
import React, { useEffect, useState } from "react";
import CardItem from "../components/card/itemcard";
import Category from "../components/categories/category";
import Header from "../components/header/header";
import Ads from "../components/header/ads/Ads";
import "../screen/screen.css";
import Dollar from "../components/dolar/dollar";
import Carousel from "carousel-react-rcdev";
import axios from "axios";
import ItemCarousel from "../components/MyCarousel/Carousel";

export default function All() {
  const [dollar, setDollar] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://cardealerlebanon.com/input/dolar/view.php/")
      .then(function (response) {
        setDollar(response.data);
      });
      // axios.get("").then(function (response) {
        // setData(response.data);
      // }
      // );
  }

  let [page, setPage] = useState(1);
  const PER_PAGE = 20;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="all">
      <div className="adsAll">
        <Ads />
      </div>
      <Dollar dollar={dollar} />
      <div className="our_container">
        <Category />
        <div className="products">
          <h2>Fresh Recomendations</h2>
          <hr align="left" />
          <div className="list">
            {data.length > 0 && <ItemCarousel data={_DATA.currentData()} />}
            {/* <Carousel>
         {_DATA.currentData()?.map(i=>{
          return(
           <div key={i.id} className='cnt'>
            <CardItem item={i}/>
          </div>
          )
         })
         }
          </Carousel> */}
          </div>
        </div>
      </div>
    </div>
  );
}
