import React from "react";

const Blogs = () => {
  return (
    <section className="w-full h-screen bg-gray-50">
      <iframe
        src="https://blogify-module.vercel.app/blogs"
        title="Blogify Blogs"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
};

export default Blogs;
