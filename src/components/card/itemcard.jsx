import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";

export default function CardItem(props) {
  let item = props.data;
  let image = item.images;
  let final_image = image.replace(";", "");
  return (
    <div className="itemCard">
      <img src={final_image} />
      <div className="text">
        <h5>{item.name}</h5>

        <h6>
          {item.price}
          {item.currency === "American Dollar" ? "$" : "L.L"}
        </h6>
      <button href="#">View Details</button>
      </div>
    </div>
  );
}
