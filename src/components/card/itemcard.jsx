import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { useNavigate } from "react-router-dom";

export default function CardItem(props) {
  let item = props.item;
  let image = item?.images;
  let final_image = image?.split(";");
  final_image.pop()
  const navigate = useNavigate();
  return (
    <div className="itemCard">
      <img loading="lazy"  draggable={false} src={final_image[0]} />
      <div className="text">
        <h5>{item?.name}</h5>

        <h6>
          {item?.price}
          {item?.currency === "American Dollar" ? "$" : "L.L"}
        </h6>
        <button
          onClick={() => {
            item?.id
              ? navigate(`/${item?.type}/${item?.id}`, {
                  state: {...item , images : final_image}, // paymentId
                })
              : "";
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
