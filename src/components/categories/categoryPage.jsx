import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import usePagination from "../pagination";
import "./categoryPage.css";
import Carousel from "carousel-react-rcdev";
import CardCar from "../card/card";
import Section from "../section/Section";
import axios from "axios";
import ItemCarousel, { CategoryCarousel } from "../MyCarousel/Carousel";

export default function CategoryPage() {
  const navigate = useNavigate();
  const { categoryId, categoryName } = useParams();

  const [category, setcategory] = useState([]);

  const [subcategoryId, setSubcategoryId] = useState();
  const [loading, setLoading] = useState(true);
  if (!subcategoryId) {
    setSubcategoryId(categoryId);
  }

  useEffect(() => {
    axios
      .get(
        `https://cardealerlebanon.com/input/category/viewSubCat.php?parentId=${categoryId}`
      )
      .then((category) => {
        setcategory(category?.data)
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="categoryPage our_container" style={{ color: "black" }}>
      {/* <h1>{categoryId}</h1> */}

      <h2 className="title">{categoryName}</h2>

      <div className="subcategory">
        {category?.length !== 0 && (
          <CategoryCarousel data={category} loading={loading} />
        )}
        {category.length == 0 && <div>No data found</div>}
      </div>

      {category?.map((cat, i) => {
        return <Section key={i} category={cat} />;
      })}
    </div>
  );
}
