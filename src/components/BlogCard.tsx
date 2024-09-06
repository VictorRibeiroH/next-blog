/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "../styles/_BlogCard.scss";

const BlogCard = ({ blog }: any) => {
  const imageUrl =
    blog.attributes.img && blog.attributes.img.data
      ? blog.attributes.img.data.attributes.url
      : null;

  return (
    <div className="blog-card">
      <Link href={`/blog/${blog.id}`}>
        <div className="image-container">
          {imageUrl ? (
            <Image
              fill
              objectFit="cover"
              src={imageUrl}
              alt={blog.attributes.Title}
              className="rounded-t-lg"
            />
          ) : (
            <p>Imagem não disponível</p>
          )}
        </div>
        <div>
          <h2>{blog.attributes.Title}</h2>
          <p>{blog.attributes.Description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;