import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.post) {
    return (
      <div className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Button
          onClick={() => navigate("/blogs")}
          className="mt-6 bg-black text-white"
        >
          Go Back
        </Button>
      </div>
    );
  }

  const { title, excerpt, date, imageUrl } = state.post;

  return (
    <div className="px-6 lg:px-24 py-16 max-w-4xl mx-auto font-sans">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="flex items-center mb-6 text-gray-600 hover:text-black"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      <img
        src={imageUrl}
        alt={title}
        className="w-full h-80 object-cover rounded-2xl mb-8"
      />

      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        {title}
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">{excerpt}</p>
    </div>
  );
};

export default BlogDetail;
