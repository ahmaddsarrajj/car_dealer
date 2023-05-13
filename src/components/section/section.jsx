import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCar from "../card/card";
import CardItem from "../card/itemcard";
import { useParams } from "react-router-dom";

import "./section.css";
import ItemCarousel from "../MyCarousel/Carousel";

export default function Section(props) {
  let category = props.category;
  const [items, setItem] = useState([]);
  const [status, setStatus] = useState("idle"); //loading, success, error
  const [error, setError] = useState("");
  const { categoryName } = useParams();
  
  const [url , setUrl] = useState("")
  const fetching = async (url) => {
    setStatus("loading");

   await axios
      .get(url)
      .then((item) => {
        let itemsImage = [];

        for (let i = 0; i < 5; i++) {
          if (item.data[i] !== undefined) {
            itemsImage.push(item.data[i]);
          }
        }
        setItem(itemsImage);
        setStatus("success");
      })
      .catch((err) => {
        setStatus(err+"");
      });
  }
  useEffect(() => {
    switch (categoryName) {
      case "Pets":
        setUrl(`https://cardealerlebanon.com/input/webapi/viewPets.php?categoryid=${category.id}`);
        fetching(`https://cardealerlebanon.com/input/webapi/viewPets.php?categoryid=${category.id}`);
        break;
      case "Jobs":
         setUrl(`https://cardealerlebanon.com/input/webapi/viewJobs.php?categoryid=${category.id}`)
         fetching(`https://cardealerlebanon.com/input/webapi/viewJobs.php?categoryid=${category.id}`)
        break;
      case "Phone%20Number":
        setUrl(`https://cardealerlebanon.com/input/webapi/viewPhoneNumber.php?categoryid=${category.id}`);
        fetching(`https://cardealerlebanon.com/input/webapi/viewPhoneNumber.php?categoryid=${category.id}`);
        break;
      case "Plate%20Number":
        setUrl(`https://cardealerlebanon.com/input/webapi/viewPlateNumber.php?categoryid=${category.id}`);
        fetching(`https://cardealerlebanon.com/input/webapi/viewPlateNumber.php?categoryid=${category.id}`);
        break;
      case "Real%20Estate":
        setUrl(`https://cardealerlebanon.com/input/webapi/viewRealstate.php?categoryid=${category.id}`);
        fetching(`https://cardealerlebanon.com/input/webapi/viewRealstate.php?categoryid=${category.id}`);
        break;
      case "Services":
        setUrl(`https://cardealerlebanon.com/input/webapi/viewServices.php?categoryid=${category.id}`);
        fetching(`https://cardealerlebanon.com/input/webapi/viewServices.php?categoryid=${category.id}`);
        break;
      default:
        setUrl(`https://cardealerlebanon.com/input/webapi/viewItems.php?categoryid=${category.id}`);
        fetching(`https://cardealerlebanon.com/input/webapi/viewItems.php?categoryid=${category.id}`);
        break;
    }
    
  }, [category.id]); //this should be a customized hook

  return (
    <div className="section">
      <h3>{category.name}</h3>
      <hr align="left" />
      {(status == "success" || status == "loading") && items.length > 0 && (
        <ItemCarousel data={items} url={url } loading={status == "loading"} />
      )}
      {status != "loading" && items.length == 0 && <div>No datas found</div>}
    </div>
  );
}
