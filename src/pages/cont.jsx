{/* Email Card */}
          <div className="lg:col-span-3 group">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <Mail className="w-8 h-8 text-white mb-3" />
              <p className="text-white/80 text-sm mb-1">Email</p>
              <p className="text-white font-bold text-sm">info@probizconnect.io</p>
            </div>
          </div>


{/* Phone Card - Floating Style */}
          <div className="lg:col-span-3 group">
            <a href="tel:9900029602">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <Phone className="w-8 h-8 text-white mb-3" />
                <p className="text-white/80 text-sm mb-1">Call us</p>
                <p className="text-white font-bold text-lg"> +91 99000 29602</p>
              </div>
            </a>
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


