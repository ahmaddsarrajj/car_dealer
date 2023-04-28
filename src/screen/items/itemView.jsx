import React from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import "../css/item.css";
import Safety from "../../components/safety/safety";
import { Button } from "react-bootstrap";

export default function ItemView() {
  const { id } = useParams();

  const images = [
    {
      original: "https://picsum.photos/id/118/1000/600/",
      thumbnail: "https://picsum.photos/id/118/250/150/",
    },
    {
      original: "https://picsum.photos/id/115/1000/600/",
      thumbnail: "https://picsum.photos/id/115/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="itemView">
      <div className="item">
        <div className="details">
          <div className="images">
            <ImageGallery autoPlay="false" items={images} />
          </div>
          <div className="description">
            description
          </div>
        </div>
        <div>
          <div className="title">
            <h2>title</h2>
            <h5>Price</h5>
            <div className="buttons">
              <a href="#" className="btn">CALL NOW</a>
              <a href="#" className="btn">MESSAGE</a>
            </div>
          </div>
          <div className="title">
            <Safety />
          </div>
        </div>
      </div>
    </div>
  );
}
