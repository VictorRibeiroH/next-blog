/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

import "../styles/_BlogCard.scss";

const Blogs = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs?.data?.filter((blog: any) => {
    return blog.attributes?.categories?.data?.some(
      (cat: any) => cat.attributes.Title === category
    );
  });

  return (
    <div className="blogs-grid">
      {filteredBlogs?.map((blog: any) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;