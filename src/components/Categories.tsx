/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

import "../styles/_Categories.scss";

const Categories = ({ categories }: any) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[0].attributes.Title);
  }, []);

  return (
    <div className="categories-container">
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
