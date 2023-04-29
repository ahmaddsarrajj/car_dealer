import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import CardCar from "../card/card";
import CardItem from "../card/itemcard";
import { useParams } from "react-router-dom";

import "./section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ItemCarousel from "../MyCarousel/Carousel";

export default function Section(props) {
  let category = props.category;
  let [items, setItem] = useState([]);
  const { categoryName } = useParams();
  let url = "";

  useEffect(() => {
    switch (categoryName) {
      case "Pets":
        url = `https://cardealerlebanon.com/input/webapi/viewPets.php?categoryid=${category.id}`;
        break;
      case "Jobs":
        url = `https://cardealerlebanon.com/input/webapi/viewJobs.php?categoryid=${category.id}`;
        break;
      case "Phone Number":
        url = `https://cardealerlebanon.com/input/webapi/viewPhoneNumber.php?categoryid=${category.id}`;
        break;
      case "Plate Number":
        url = `https://cardealerlebanon.com/input/webapi/viewPlateNumber.php?categoryid=${category.id}`;
        break;
      case "Real Estate":
        url = `https://cardealerlebanon.com/input/webapi/viewRealstate.php?categoryid=${category.id}`;
        break;
      case "Services":
        url = `https://cardealerlebanon.com/input/webapi/viewServices.php?categoryid=${category.id}`;
        break;
      default:
        url = `https://cardealerlebanon.com/input/webapi/viewItems.php?categoryid=${category.id}`;
        break;
    }

    axios.get(url).then((item) => {
      let itemsImage = [];

      for (let i = 0; i < 5; i++) {
        if (item.data[i] !== undefined) {
          itemsImage.push(item.data[i]);
        }
      }
      setItem(itemsImage);
    });
  }, [category.id]);

  return (
    <div className="section">
      <h3>{category.name}</h3>
      <hr align="left" />
      {items.length > 0 && <ItemCarousel data={items} />}
      {items.length == 0 && <div>No data found</div>}

      
    </div>
  );
}
