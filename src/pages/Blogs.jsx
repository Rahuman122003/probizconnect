import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 for navigation
import {
  samplePosts, // move your big array into a separate file if needed
  categories,
} from "./blogData"; // optional: export posts and categories separately

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(10); // show 10 initially
  const navigate = useNavigate();

  // filter posts
  const filteredPosts =
    activeCategory === "All Posts"
      ? samplePosts
      : samplePosts.filter((post) => post.category === activeCategory);

  // only show limited count
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-sans text-gray-900 mb-4">
            Blog Articles
          </h1>
          {/* <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and best practices from our team.
          </p> */}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(10); // reset visible count on tab change
              }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
          {visiblePosts.map((post, idx) => (
            <Card
              key={idx}
              className="overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col  h-full">
                <div>
                  <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt.length > 150
                      ? post.excerpt.substring(0, 150) + "..."
                      : post.excerpt}
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                    onClick={() =>
                      navigate(`/blogs/${idx}`, { state: { post } })
                    }
                  >
                    Continue Reading <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center mt-10">
            <Button
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
              onClick={() => setVisibleCount((prev) => prev + 10)}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
