import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Star,
  Users,
  Target,
  Award,
} from "lucide-react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntersection = (id) => {
    setIsVisible((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const aboutData = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "Our mission is to provide top-quality SaaS product solutions to businesses of all sizes. We strive to exceed our clients' expectations and deliver innovative solutions that drive growth and success. Simplify sales and distribution for SME's across the globe. Our mission is to empower businesses so that they can boost their sales.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Users,
      title: "Our Team",
      content:
        "Our team has experienced software architects, developers, designers, and project delivery managers who are dedicated to delivering exceptional results. We work collaboratively with our clients to ensure that their unique needs are met and that they receive the best possible services.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Our Commitment",
      content:
        "Deploying and maintaining software applications that meet the needs of our customers. This involves expertise in software architecture, coding, user interface design, and quality assurance. Deep understanding of technology, customer needs, business strategies, and a commitment to delivering high-quality software services that provide value to our subscribers",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6">
      {/* Navigation Spacer */}

      {/* Hero Section with Split Layout */}
      <section className="relative bg-gradient-to-b from-[#dbeafe] via-[#eef2ff] to-[#fff1f2] min-h-screen flex items-center overflow-hidden ">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/50 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-[#f0e6ff]/30 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#e6d9ff]/50 rounded-full animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container  mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-white space-y-8">
              <div className="animate-slide-in-left">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mt-2">
                  <span className="text-sm font-semibold text-black">
                    About Probiz Connect
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-800">
                  Who Are{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                    We?
                  </span>
                </h1>
              </div>

              <div
                className="animate-slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-purple-700">
                  Welcome to Probiz Connect!
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are an eB2B SaaS provider specialised in offering
                  customised solutions for small and mid- sized businesses. Our
                  skilled team of developers, designers, and project managers
                  collaborates to deliver a high-quality eB2B SaaS platform
                  tailored to each client's unique needs. Our mission is to
                  empower businesses to efficiently manage operations at every
                  growth stage.
                </p>
              </div>

              <div
                className="flex items-center space-x-6 animate-slide-in-left"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">10+</div>
                  <div className="text-sm text-purple-700">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-purple-400 text-black"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">3+</div>
                  <div className="text-sm text-purple-700">
                    Years Experience
                  </div>
                </div>
                <div className="w-px h-12 bg-purple-400"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">99%</div>
                  <div className="text-sm text-purple-700">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Card */}
            <div className="animate-slide-in-right mb-8">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-105 transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src="src/assets/glasslogo.png"
                      alt="Team collaboration"
                      />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To know more about our product, reach out to us today, and
                    we'll be happy to demonstrate the product features.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a
                      href="https://dealerconnect.in/book-a-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Demo
                    </a>
                  </Button>

                  <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-500">
                    <div>✓ Free Consultation</div>
                    <div>✓ 24/7 Support</div>
                    <div>✓ Custom Solutions</div>
                    <div>✓ Expert Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us - Horizontal Scroll Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aboutData.map((item, index) => (
              <div
                key={index}
                data-animate
                id={`about-card-${index}`}
                className={`group transition-all duration-700 ${
                  isVisible[`about-card-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="h-full p-8 rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.content}
                  </p>

                  <div
                    className={`mt-6 w-full h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team - Floating Cards */}
      {/* <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Meet the Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our strength lies in the diverse skills and shared passion of our team members.
                        </p>
                    </div>

                    <div className="flex justify-center gap-12 flex-wrap">
                        {[
                            {
                                name: "Siraj S",
                                role: "CEO",
                                img: profile1,
                                linkedin: "https://www.linkedin.com/in/siraj-s-7aa58018/",
                            },
                            {
                                name: "Hanish",
                                role: "CTO",
                                img: profile2, 
                                linkedin: "https://www.linkedin.com/in/hanishkeloth/",
                            },
                        ].map((member, index) => (
                            <div
                                key={index}
                                data-animate
                                id={`team-${index}`}
                                className={`transition-all duration-700 ${isVisible[`team-${index}`]
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-20"
                                    }`}
                                style={{ transitionDelay: `${index * 300}ms` }}
                            >
                                <Card className="p-8 rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 bg-white relative overflow-hidden">
                                    
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full opacity-50"></div>

                                    <div className="relative text-center">
                                      
                                        <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                                            <div className="w-32 h-32 rounded-full mx-auto flex items-center justify-center shadow-lg overflow-hidden">
                                                <img
                                                    src={member.img}
                                                    alt={member.name}
                                                    className="w-32 h-32 rounded-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
                                        </div>

                                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                                            {member.name} - {member.role}
                                        </h4>

                                        <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>

                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

      {/* Call to Action - Full Width Banner */}
      <section className="py-20 bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 relative ">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-60 h-60 bg-pink-300 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white" data-animate id="cta-section">
            <div
              className={`transition-all duration-1000 ${
                isVisible["cta-section"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of teams already using Probiz to boost their
                productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a
                    href="https://dealerconnect.in/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Quote
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-purple-700 hover:bg-white hover:text-purple-700 rounded-full px-8 py-4 text-lg font-bold transition-all duration-300"
                >
                  <a
                    href="https://dealerconnect.in/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`text-center text-purple-200 mt-16 transition-all duration-1000 ${
              isVisible["cta-section"] ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p>&copy; 2023 Probiz. All rights reserved.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default About;
