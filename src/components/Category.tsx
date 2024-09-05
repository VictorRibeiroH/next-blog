/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

import "../styles/_Category.scss";

const Category = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);

  return (
    <div
      onClick={() => changeCategory(cat.attributes.Title)}
      className={`category ${
        cat.attributes.Title === category ? "active" : ""
      }`}
    >
      {cat.attributes.Title}
    </div>
  );
};

export default Category;
