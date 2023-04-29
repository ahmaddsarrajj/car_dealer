import React from "react";
import "./splide.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardItem from "../card/itemcard";
import { Link, useNavigate } from "react-router-dom";

export function CategoryCarousel(props) {
  const navigate = useNavigate();
  const { data } = props;
  const options = {
    gap: "3vw",
    perPage: 4,
    breakpoints: {
      1050: {
        perPage: 8,
      },
      600: {
        perPage: 6,
        gap: "3vw",
      },
      400: {
        gap: "3vw",
        perPage: 5,
      },
    },
  };

  return (
    <Splide
      className="splide"
      options={options}
      aria-label="My Favorite Images"
    >
      {data?.map((cat, key) => {
        let icon = cat?.icon;
        let newIcon = icon?.replace(";", "");
        return (
          <SplideSlide key={key} style={{ padding: "1vw" }}>
            <div
              className="category"
              onClick={() => {
                navigate(`../category/${cat?.id}/${cat?.name}`);
              }}
            >
              <img
                className="category_page_images"
                width="60px"
                src={newIcon}
              />
              <div>
                <Link to={`../category/${cat?.id}/${cat?.name}`}>
                  {cat?.name}
                </Link>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default function ItemCarousel(props) {
  const { data } = props;
  const options = {
    gap: "3vw",
    perPage: 4,
    breakpoints: {
      1050: {
        perPage: 3,
      },
      600: {
        perPage: 2,
        gap: "3vw",
      },
      400: {
        gap: "3vw",
        perPage: 1,
      },
    },
  };

  return (
    <Splide
      className="splide"
      options={{ ...options }}
      aria-label="My Favorite Images"
    >
      {data?.map((i, key) => {
        return (
          <SplideSlide key={key} style={{ padding: "1vw" }}>
            <CardItem item={i} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
