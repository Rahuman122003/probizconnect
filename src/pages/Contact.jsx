import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle, Sparkles, ArrowUpRight, PinIcon, Locate, LocateOffIcon, Pin } from "lucide-react";
import contact from "@/assets/contact.webp";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ================= EMAILJS SEND =================
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      newsletter: formData.newsletter ? "Yes" : "No"
    };

    emailjs.send(
      "service_ehbfihd",     //  replaced
      "template_gtw90ho",    //  replaced
      templateParams,
      "QbkQHL7iND_gxWE_p"      //  replaced
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        message: '',
        newsletter: false
      });
    })
    .catch(() => {
      alert("❌ Failed to send message. Try again.");
    })
    .finally(() => {
      setLoading(false);
    });
  };
  // =================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">

      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Title */}
        <div className="relative z-10 mb-16 text-center lg:text-left lg:ml-20">
          <Sparkles className="w-5 h-5 text-purple-500 animate-pulse inline mr-2" />
          <span className="text-sm font-semibold text-gray-600 uppercase">Get Connected</span>
          <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mt-4">
            Let's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Connect!
            </span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ================= CONTACT FORM ================= */}
          <div className="lg:col-span-7 lg:row-span-2 group">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition"></div>

              <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl p-8 lg:p-10 h-full shadow-2xl">

                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Send us a message</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-bounce">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                  />

                  {/* Newsletter */}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-gray-600 text-sm">
                      Keep me updated with news and offers
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-2xl hover:shadow-xl transition flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="w-5 h-5" />
                  </button>

                </div>
              </form>
            </div>
          </div>
          {/* ================================================= */}

         {/* Quick Chat Card */}
          <div className="lg:col-span-5 group">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl opacity-90"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 h-full flex flex-col justify-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-white">
                  <MessageSquare className="w-12 h-12 mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
                  <p className="text-green-100 mb-6">Get instant answers from our team</p>
                  <button
                    onClick={() =>
                      window.open("https://wa.me/919900029602", "_blank") // change number
                    }
                    className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Start Chatting
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 group">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 rounded-3xl opacity-90"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 h-full flex flex-col justify-center shadow-xl hover:shadow-2xl transition-all duration-300bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="text-white">
                  <Phone className="w-12 h-12 mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">Call us</h3>
                  <p className="text-green-100 mb-6 font-medium">+91 99000 29602, 
                  +91 96631 77996, 
                  +91 80152 86598</p>
                 

                </div>
              </div>
            </div>
          </div>

         {/*  Phone Card - Floating Style 
          <div className="lg:col-span-3 group">
            <a href="tel:9900029602">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <Phone className="w-8 h-8 text-white mb-3" />
                <p className="text-white/80 text-sm mb-1 font-bold">Call us</p>
                <p className="text-white font-medium text-lg"> 
                  +91 99000 29602, 
                  +91 96631 77996, 
                  +91 80152 86598</p>
              </div>
            </a>
          </div> */}

          {/* Email Card */}
          <div className="lg:col-span-3 group">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Mail className="w-8 h-8 text-white mb-3" />
              <p className="text-white/80 text-sm mb-1">Email</p>
              <p className="text-white font-bold text-sm">info@dealerconnect.in</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 group">
            <div className="bg-gradient-to-br from-purple-500 to-violet-950 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Pin className="w-8 h-8 text-white mb-3" />
              <p className="text-white/80 text-sm mb-1">Location</p>
              <p className="text-white font-bold text-sm">Bengaluru, Chennai and Coimbatore.</p>
            </div>
          </div>
          

        </div>
      </section>
    </div>
  );
};

export default Contact;
