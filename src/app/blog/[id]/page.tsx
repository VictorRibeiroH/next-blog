/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "../../../styles/_BlogPage.scss";

async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const BlogPage = async ({ params }: any) => {
  const blog = await fetchBlog(params.id);

  const imageUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
    blog.data.attributes.img.data.attributes.url;

  return (
    <div className="blog-container">
      <Link href="/">{"< Voltar"}</Link>
      <div className="image-wrapper">
        <Image
          layout="responsive"
          width={700}
          height={400}
          src={imageUrl}
          alt={""}
        />
      </div>
      <div>
        <h1 className="h1">{blog.data.attributes.Title}</h1>
        <p className="text-gray">{blog.data.attributes.Description}</p>
        <div className="text-gray">
          <span className="published-date">
            Publicado em{" "}
            {new Date(blog.data.attributes.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;