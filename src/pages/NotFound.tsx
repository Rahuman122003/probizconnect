import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import mascot1 from "@/assets/mascot1.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden px-4">
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Thinking mascot */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 -m-8 bg-gradient-to-br from-orange-300/50 via-pink-300/40 to-purple-300/40 blur-3xl rounded-full"></div>
          <img
            src={mascot1}
            alt="Thinking mascot"
            className="relative w-48 sm:w-56 md:w-64 mx-auto animate-float-soft drop-shadow-[0_25px_35px_rgba(124,58,237,0.3)] select-none"
          />
          <span className="mascot-ground" />
        </div>

        <h1 className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Hmm... we can't find that page
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-full font-semibold shadow-sm border border-gray-200 hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
