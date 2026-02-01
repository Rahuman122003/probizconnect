import React, { useState, useEffect } from "react";
import { MapPin, Clock, Phone, Mail, MessageSquare, Send, CheckCircle, Sparkles, ArrowUpRight, Globe } from "lucide-react";
import contact from "@/assets/contact.webp";
const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [focusedInput, setFocusedInput] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section with Unique Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Floating Title */}
        <div className="relative z-10 mb-16">
          <div className="text-center lg:text-left lg:ml-20">
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Get Connected</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 mb-4">
                Let's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Create Magic
                </span>
              </h1>
              <div className="h-2 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative">

          {/* Contact Form - Large Card */}
          <div className="lg:col-span-7 lg:row-span-2 group">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Send us a message</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-bounce">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full px-4 py-4 bg-gray-50 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full px-4 py-4 bg-gray-50 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-4 py-4 bg-gray-50 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <label className="flex items-center cursor-pointer group">
                    <div className="relative mr-3">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-lg transition-all duration-300 ${formData.newsletter
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                        : 'bg-gray-200 group-hover:bg-gray-300'
                        }`}>
                        {formData.newsletter && (
                          <CheckCircle className="w-4 h-4 text-white absolute top-1 left-1" />
                        )}
                      </div>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Keep me updated with news and offers
                    </span>
                  </label>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-2xl hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group">
                    <span>Send Message</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

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
                      window.open("https://wa.me/919663177996", "_blank") // change number
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

          {/* Office Location Card */}
          <div className="lg:col-span-5 group">
            <div className="bg-gray-900 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="relative z-10">
                <MapPin className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Century Central, Level 3<br />
                  Bengaluru-560062
                </p>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-300 flex items-center gap-1">
                  Get Directions
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card - Floating Style */}
          <div className="lg:col-span-3 group">
            <a href="tel:9663177996">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <Phone className="w-8 h-8 text-white mb-3" />
                <p className="text-white/80 text-sm mb-1">Call us</p>
                <p className="text-white font-bold text-lg">9663177996</p>
              </div>
            </a>
          </div>


          {/* Email Card */}
          <div className="lg:col-span-3 group">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Mail className="w-8 h-8 text-white mb-3" />
              <p className="text-white/80 text-sm mb-1">Email</p>
              <p className="text-white font-bold text-sm">info@probizconnect.io</p>
            </div>
          </div>

          {/* Working Hours Card */}
          {/* <div className="lg:col-span-6 group">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <Clock className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-800">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-800">Closed</span>
                    </div>
                  </div>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Floating FAQ Button */}
        <div className="fixed bottom-8 right-8 z-50">
          {/* <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group">
            <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button> */}
        </div>
      </section>

      {/* Global HQ Section */}
      {/* <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Global Presence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Headquarters</span>
            </h2>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-10"></div>
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-xl font-bold text-gray-800">Bengaluru Tech Hub</p>
                  <p className="text-gray-600">Innovation Center</p>
                </div>
                <img src={contact} alt="Global HQ" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;