import React, { useState, useEffect } from "react";
import {
  Users,
  Package,
  TrendingUp,
  MessageSquare,
  Award,
  MapPin,
  BarChart3,
  Zap,
  Target,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Eye,
  Clock,
  ChevronDown,
  ChevronUp,
  Network,
} from "lucide-react";
import fq from "../assets/faqs.jpg";
import glass from "@/assets/glasslogo.png";
import d1 from "@/assets/dcpg.png";

const DealerConnect = () => {
  const [animatedElements, setAnimatedElements] = useState({});
  const [currentStat, setCurrentStat] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Streamlined Order Processing",
      description:
        "Probiz Connect's intuitive platform streamlines order management, enabling dealers and distributors to place orders easily and allowing your sales team to track them in real-time. This approach reduces delays and errors, ensuring quicker fulfilment of customer demands.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Automated workflows", "Real-time updates", "Error reduction"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Inventory Tracking",
      description:
        "Monitor your inventory in real time with Probiz Connect’s accurate stock data, enabling efficient management, preventing stockouts, and informing restocking decisions.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-green-500 to-emerald-500",
      benefits: ["Stock optimization", "Movement tracking", "Automated alerts"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales and Revenue Tracking",
      description:
        "Probiz Connect's powerful reporting tools provide key insights into sales trends and revenue, helping you identify top-selling products and high-demand regions to strategize and optimize your sales efforts.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-purple-500 to-pink-500",
      benefits: [
        "Comprehensive analytics",
        "Performance metrics",
        "Custom reports",
      ],
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Enhanced Communication",
      description:
        "Probiz Connect serves as a centralised platform for seamless communication between your team and your dealers and distributors. Instant messaging, announcements, and updates keep everyone informed and aligned, fostering a stronger and more cohesive distribution network.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-indigo-500 to-blue-500",
      benefits: ["Instant messaging", "Broadcast updates", "Document sharing"],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Performance Analysis and Incentive Management",
      description:
        "Stay ahead of the competition by monitoring the performance of your dealers and distributors. Probiz Connect equips you with detailed analytics and performance reports, enabling you to identify top-performing partners and reward them with incentives, thus fostering a motivated distribution network.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-orange-500 to-red-500",
      benefits: ["Reward systems", "Performance tracking", "Motivation tools"],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Diverse Reward Mechanisms",
      description:
        "Partners can be awarded points for completing specific tasks or actions, such as scanning a coupon placed inside products like paints. This interactive approach not only incentivizes partners but also encourages end customers to engage with your products and promotions actively.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-teal-500 to-cyan-500",
      benefits: [
        "Centralized control",
        "Network monitoring",
        "Scalable management",
      ],
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Active Dealers",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-600",
    },
    {
      number: "95%",
      label: "Network Efficiency",
      icon: <Target className="w-6 h-6" />,
      color: "text-green-600",
    },
    {
      number: "40%",
      label: "Performance Boost",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-purple-600",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Shield className="w-6 h-6" />,
      color: "text-orange-600",
    },
  ];

  const benefits = [
    {
      title: "What is the size of your dealer network?",
      description:
        "Whether you have a small network of dealers or a vast distribution network spanning multiple regions, Probiz Connect is designed to scale alongside your business.",
      icon: <TrendingUp className="w-12 h-12" />,
    },
    {
      title:
        "Will you be able to identify the top-performing dealer, distributor, or partner?",
      description:
        "Probizconnect equips you with detailed analytics and performance reports, enabling you to identify top-performing partners and reward them with incentives, thus fostering a motivated distribution network.",
      icon: <Star className="w-12 h-12" />,
    },
    {
      title: "How will you measure your growth?",
      description:
        "Gain valuable insights into your sales trends and revenue generation with Probizconnect's robust reporting tools.",
      icon: <Network className="w-12 h-12" />,
    },
  ];

  const faqs = [
    {
      question:
        "How does Dealer Connect help manage large distributor networks?",
      answer:
        "Dealer Connect provides a centralized platform to manage your entire network with features like automated order processing, real-time inventory tracking, performance monitoring, and streamlined communication. This allows you to efficiently oversee hundreds or thousands of dealers from one dashboard.",
    },
    {
      question: "What kind of performance analytics are available for dealers?",
      answer:
        "Our platform offers comprehensive analytics including sales performance metrics, inventory turnover rates, order processing times, customer satisfaction scores, and revenue tracking. You can identify top-performing dealers and create custom reports to make data-driven decisions.",
    },
    {
      question: "How do dealer incentives work in the platform?",
      answer:
        "The incentive management system allows you to create custom reward programs based on performance metrics like sales volume, customer acquisition, or territory growth. You can automatically track achievements and distribute rewards to motivate your dealer network.",
    },
    {
      question: "Can the platform integrate with existing business systems?",
      answer:
        "Yes, Dealer Connect offers robust integration capabilities with popular ERP, CRM, and accounting systems. Our API allows seamless data synchronization and workflow automation with your existing business infrastructure.",
    },
    {
      question: "What support is provided for dealer onboarding?",
      answer:
        "We provide comprehensive onboarding support including dealer training programs, technical setup assistance, documentation, and dedicated support teams. Our goal is to ensure smooth adoption across your entire network.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleElementHover = (id) => {
    setAnimatedElements((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAnimatedElements((prev) => ({ ...prev, [id]: false }));
    }, 600);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              Dealer & Distributor Management Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Network{" "}
              </span>
              for Success
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              In today's competitive market, an efficient dealer and distributor
              network is vital for sustained growth and market leadership. Our
              platform helps businesses manage this network by streamlining
              operations and boosting performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://dealerconnect.in/book-a-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  Start Building Your Network
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  View Demo
                </button>
              </a>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  currentStat === index ? "ring-4 ring-blue-200 scale-105" : ""
                }`}
                onMouseEnter={() => handleElementHover(`stat-${index}`)}
              >
                <div
                  className={`${stat.color} mb-4 flex justify-center ${animatedElements[`stat-${index}`] ? "animate-bounce" : ""}`}
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
              src={d1}
              alt="Dealer Network Management"
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    Connected
                  </div>
                  <div className="text-gray-600">Network Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Smart Solution for Dealer Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your distribution strategy with our comprehensive dealer
              management platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
                onMouseEnter={() => handleElementHover(`benefit-${index}`)}
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 ${animatedElements[`benefit-${index}`] ? "animate-pulse" : ""}`}
                >
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work Flow Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage, analyze, and optimize your dealer
              network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group border border-gray-100"
                onMouseEnter={() => handleElementHover(`feature-${index}`)}
              >
                {/* Large Icon Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg ${animatedElements[`feature-${index}`] ? "animate-pulse" : ""}`}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
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

      {/* Analytics Showcase */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Monitor & Identify Top Performers
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Probizconnect offers detailed analytics and performance reports to monitor and identify 
                top-performing dealers, allowing you to reward them with incentives and motivate your 
                distribution network.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Eye />, title: 'Real-time Monitoring', desc: 'Track dealer performance in real-time' },
                  { icon: <BarChart3 />, title: 'Detailed Reports', desc: 'Comprehensive analytics and insights' },
                  { icon: <Award />, title: 'Smart Incentives', desc: 'Automated reward systems for top performers' },
                  { icon: <TrendingUp />, title: 'Growth Tracking', desc: 'Monitor network growth and expansion' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <div className="w-6 h-6 text-blue-600">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy"
                alt="Performance Analytics Dashboard"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Analytics</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">847</div>
                  <div className="text-sm text-gray-600">Active Dealers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Dealer Connect
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
                        <ChevronUp className="w-6 h-6 text-blue-600" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={glass}
              alt="Dealer Connect Logo"
              className="w-32 h-32 rounded-full mx-auto mb-2 border-2 border-white shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading businesses who have revolutionized their dealer
            networks with our comprehensive platform. Start building your path
            to market leadership today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dealerconnect.in/book-a-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
            </a>
            <a
              href="https://dealerconnect.in/book-a-demo/ola/services/consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerConnect;
