import React from "react";
import "./splide.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardItem from "../card/itemcard";
import { Link, useNavigate } from "react-router-dom";
import LoadingCart, { LoadingCategory } from "../card/loadingCart";

export function CategoryCarousel(props) {
  const navigate = useNavigate();
  const { data , loading } = props;
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
      {!loading ? data?.map((cat, key) => {
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
                loading="lazy"
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
      }) : [1,2,3,4,5,6,7,8].map((cat, key) => {
        return (
          <SplideSlide key={key} style={{ padding: "1vw" }}>
            <LoadingCategory />
          </SplideSlide>
        );
      }
      )}
    </Splide>
  );
}

export default function ItemCarousel(props) {
  const { data, loading  } = props;
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
    <>
      <Splide
        className="splide"
        options={{ ...options }}
        aria-label="My Favorite Images"
      >
        {!loading
          ? data?.map((i, key) => {
              return (
                <SplideSlide key={key} style={{ padding: "1vw" }}>
                  <CardItem item={i} />
                </SplideSlide>
              );
            })
          : [1,2,3,4].map((i, key) => {
              return (
                <SplideSlide key={key} style={{ padding: "1vw" }}>
                  <LoadingCart />
                </SplideSlide>
              );
            }) }
      </Splide>
    </>
  );
}
