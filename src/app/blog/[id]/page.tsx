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
      `${process.env.API_URL}/api/blogs/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const BlogPage = async ({ params }: any) => {
  const blog = await fetchBlog(params.id);

  if (!blog || !blog.data || !blog.data.attributes) {
    return <p>Erro ao carregar o blog. Por favor, tente novamente.</p>;
  }

  const imageUrl =
    blog.data.attributes.img && blog.data.attributes.img.data
      ? blog.data.attributes.img.data.attributes.url
      : "";

  return (
    <div className="blog-container">
      <Link href="/">{"< Voltar"}</Link>
      <div className="image-wrapper">
        <Image
          layout="responsive"
          width={700}
          height={400}
          src={imageUrl.startsWith("http") ? imageUrl : `${process.env.API_URL}${imageUrl}`}
          alt={blog.data.attributes.Title}
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
