import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  MapPin,
  Smartphone,
  BarChart3,
  Clock,
  Target,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Navigation,
  UserCheck,
  TrendingUp,
  MessageSquare,
  Award,
  Globe,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Route,
  Database,
  Headphones,
  X,
} from "lucide-react";

import fq from "../assets/faqs.jpg";
import glass from "@/assets/glasslogo.png";
import e2 from "@/assets/ecpg.png";
import e1 from "@/assets/emp2.png";
import demoVideo from "@/assets/empdemo.mp4";

const EmployeeConnect = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [animatedCards, setAnimatedCards] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
   const videoRef = useRef(null);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Intelligent Route Optimization",
      description:
        "Plan sales routes efficiently with intelligent navigation features, saving time and fuel costs while maximizing customer visits.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-blue-500 to-cyan-500",
      benefits: [
        "Smart route planning",
        "Fuel cost savings",
        "Time optimization",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Mobile Customer Access",
      description:
        "Access crucial customer information on the go. Your sales team can view customer history, preferences, and data anytime, anywhere.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-green-500 to-emerald-500",
      benefits: [
        "Real-time data access",
        "Customer insights",
        "Mobile-first design",
      ],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Tracking",
      description:
        "Monitor individual and team performance with comprehensive analytics and KPI tracking for continuous improvement.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["KPI monitoring", "Performance analytics", "Goal tracking"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Sales Tools",
      description:
        "Comprehensive mobile application equipped with all essential sales tools for field representatives to excel in their roles.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-indigo-500 to-blue-500",
      benefits: ["Mobile CRM", "Order processing", "Inventory access"],
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Team Communication",
      description:
        "Streamlined communication channels between field staff, management, and support teams for seamless coordination.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-orange-500 to-red-500",
      benefits: ["Instant messaging", "Team coordination", "Real-time updates"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Employee Empowerment",
      description:
        "Comprehensive solution to empower field sales employees with tools, training, and technology for exceptional performance.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-teal-500 to-cyan-500",
      benefits: [
        "Skill development",
        "Performance incentives",
        "Career growth",
      ],
    },
  ];

  const stats = [
    {
      number: "85%",
      label: "Productivity Boost",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-600",
    },
    {
      number: "40%",
      label: "Route Efficiency",
      icon: <Route className="w-6 h-6" />,
      color: "text-blue-600",
    },
    {
      number: "95%",
      label: "Employee Satisfaction",
      icon: <UserCheck className="w-6 h-6" />,
      color: "text-purple-600",
    },
    {
      number: "24/7",
      label: "Mobile Support",
      icon: <Headphones className="w-6 h-6" />,
      color: "text-orange-600",
    },
  ];

  const empowermentAreas = [
    {
      title: "Frontline Brand Representatives",
      description:
        "Recognize employees as the critical frontline representatives driving revenue and customer relationships",
      icon: <Users className="w-12 h-12" />,
    },
    {
      title: "Technology Empowerment",
      description:
        "Equip your team with cutting-edge tools and technology to excel in their field sales roles",
      icon: <Smartphone className="w-12 h-12" />,
    },
    {
      title: "Revenue Generation Focus",
      description:
        "Drive consistent revenue growth through empowered field sales teams and optimized processes",
      icon: <TrendingUp className="w-12 h-12" />,
    },
  ];

  const faqs = [
    {
      question: "How does the mobile application work for field sales teams?",
      answer:
        "Our mobile app provides comprehensive field sales tools including customer management, order processing, inventory access, route optimization, and real-time communication. It works offline and syncs data when connected, ensuring your team is always productive.",
    },
    {
      question: "What kind of route optimization features are available?",
      answer:
        "The intelligent route optimization uses GPS and traffic data to plan the most efficient routes, considering factors like customer priority, appointment times, traffic conditions, and fuel costs. This can reduce travel time by up to 40% and significantly cut fuel expenses.",
    },
    {
      question: "How does customer data access work on mobile devices?",
      answer:
        "Sales representatives can access complete customer profiles, purchase history, preferences, communication logs, and pending orders directly on their mobile devices. The data is secured with enterprise-grade encryption and automatically syncs across all platforms.",
    },
    {
      question: "What performance tracking metrics are available?",
      answer:
        "The system tracks various KPIs including sales targets, conversion rates, customer visits, order values, territory coverage, and individual performance metrics. Managers get real-time dashboards while field staff receive personalized performance insights.",
    },
    {
      question: "Is training provided for the employee empowerment tools?",
      answer:
        "Yes, we provide comprehensive training programs including onboarding sessions, video tutorials, user manuals, and ongoing support. Our training covers all aspects of the platform to ensure maximum adoption and effectiveness.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

    const openVideoModal = () => {
        setShowVideo(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 200);
    };

    const closeVideoModal = () => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0;
        setShowVideo(false);
    };

  const handleCardHover = (index) => {
    setAnimatedCards((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setAnimatedCards((prev) => ({ ...prev, [index]: false }));
    }, 600);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">

                 {/* ================= VIDEO MODAL ================= */}
                 {showVideo && (
                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
     
                         {/* Close Button */}
                         <button
                             onClick={closeVideoModal}
                             className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                         >
                             <X size={28} />
                         </button>
     
                         {/* Video Container 9:16 */}
                         <div className="w-[320px] sm:w-[360px] md:w-[420px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
     
                             <video
                                 ref={videoRef}
                                 src={demoVideo}
                                 className="w-full h-full object-cover"
                                 autoPlay
                                 controls
                                 playsInline
                             />
                         </div>
                     </div>
                 )}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Field Sales & Distribution Employee Empowerment
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empower Your
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Sales Team{" "}
              </span>
              to Excel
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              In the fast-paced world of sales, your employees are the frontline
              representatives of your brand. We recognize the critical role they
              play in driving revenue and building lasting customer
              relationships. Equip your team with the tools and technology they
              need to excel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://dealerconnect.in/book-a-demo/ola/services/consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  Empower Your Team Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <button
                onClick={openVideoModal}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
              >
                See Demo
              </button>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  currentFeature % 4 === index
                    ? "ring-4 ring-indigo-200 scale-105"
                    : ""
                }`}
                onMouseEnter={() => handleCardHover(`stat-${index}`)}
              >
                <div
                  className={`${stat.color} mb-4 flex justify-center ${animatedCards[`stat-${index}`] ? "animate-bounce" : ""}`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={e2}
              alt="Field Sales Team"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute top-6 right-6 bg-gray-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Live Tracking</span>
                </div>
              </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    40%
                  </div>
                  <div className="text-gray-600">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Employee Empowerment Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your sales organization by recognizing and empowering
              your frontline representatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {empowermentAreas.map((area, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
                onMouseEnter={() => handleCardHover(`area-${index}`)}
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 ${animatedCards[`area-${index}`] ? "animate-pulse" : ""}`}
                >
                  <div className="text-indigo-600">{area.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Field Sales Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your field sales team needs to drive revenue and build
              lasting customer relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-gray-100"
                onMouseEnter={() => handleCardHover(`feature-${index}`)}
              >
                {/* Large Icon Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg ${animatedCards[`feature-${index}`] ? "animate-pulse" : ""}`}
                  >
                    <div className="text-white transform group-hover:rotate-12 transition-transform duration-300">
                      {React.cloneElement(feature.icon, {
                        className: "w-10 h-10",
                      })}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-2 mb-4">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-40`}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60`}
                    ></div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits with Icons */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    {/*<button
                      className={`px-6 py-2 bg-gradient-to-r ${feature.gradient} text-white rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      Learn More
                    </button>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Optimization Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Intelligent Route Optimization
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Equipped with intelligent route optimization and navigation
                features, field sales employees can plan their sales routes
                efficiently, saving time and fuel costs. Your sales team can
                access crucial customer information on the go.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Navigation />,
                    title: "Smart Navigation",
                    desc: "GPS-powered route planning with real-time traffic",
                  },
                  {
                    icon: <Clock />,
                    title: "Time Savings",
                    desc: "Reduce travel time by up to 40% with optimized routes",
                  },
                  {
                    icon: <Target />,
                    title: "Customer Prioritization",
                    desc: "Intelligent scheduling based on customer importance",
                  },
                  {
                    icon: <Zap />,
                    title: "Fuel Efficiency",
                    desc: "Minimize fuel costs through optimized routing",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors">
                      <div className="w-6 h-6 text-indigo-600">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={e1}
                alt="Route Optimization Dashboard"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Tracking</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    Empowered
                  </div>
                  <div className="text-gray-600">Sales Force</div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Employee Connect
          </p>
        </div>
        <div className="flex">
          <div className="">
            <img
              src={fq}
              alt="FAQs Background"
              className="w-96 h-96 object-contain rounded-xl mr-12 hidden lg:block"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-900 pr-4 text-lg">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6 text-indigo-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      openFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={glass}
              alt="Sales team logo"
              className="w-32 h-32 rounded-full mx-auto mb-2 border-2 border-white shadow-2xl"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Empower Your Sales Force?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking companies who have transformed their field
            sales operations with our comprehensive employee empowerment
            platform. Drive revenue growth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dealerconnect.in/book-a-demo/ola/services/consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Empowering Now
              </button>
            </a>
            <a
              href="https://dealerconnect.in/book-a-demo/ola/services/consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeConnect;
