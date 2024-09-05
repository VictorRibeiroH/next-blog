/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "../styles/_BlogCard.scss";

const BlogCard = ({ blog }: any) => {
  const imageUrl =
  process.env.NEXT_PUBLIC_STRAPI_API_URL +
  blog.attributes.img.data.attributes.url;

  return (
    <div className="blog-card">
      <Link href={`/blog/${blog.id}`}>
        <div className="image-container">
          <Image
            fill
            objectFit="cover"
            src={imageUrl}
            alt={""}
            className="rounded-t-lg"
          />
        </div>
        <div>
          <h2>
            {blog.attributes.Title}
          </h2>
          <p>{blog.attributes.Description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
