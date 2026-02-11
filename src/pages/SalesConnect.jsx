import React, { useState } from "react";
import {
  ChevronRight,
  BarChart3,
  Package,
  Users,
  TrendingUp,
  MessageCircle,
  MapPin,
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Globe,
  ChevronDown,
  ChevronUp,
  Monitor,
  Smartphone,
  Truck,
  PieChart,
} from "lucide-react";
import fq from "../assets/faqs.jpg";

const SalesConnect = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const names = "surya";
  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Real-time Order Processing",
      description:
        "Process orders instantly with automated workflows and real-time status updates for seamless operations.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Inventory Tracking",
      description:
        "Monitor stock levels and automate reorder processes with intelligent forecasting and alerts.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description:
        "Gain valuable insights into sales trends and revenue with our powerful reporting tools.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Incentive Management",
      description:
        "Design and track incentive programs to motivate your sales team effectively.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Seamless Communication",
      description:
        "Connect stakeholders with integrated messaging and notification systems.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Route Optimization",
      description:
        "Optimize delivery routes and reduce operational costs with AI-powered planning.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=entropy",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Active Dealers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "50%",
      label: "Cost Reduction",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      question: "How does Sales Connect integrate with existing systems?",
      answer:
        "Sales Connect offers seamless integration with popular CRM, ERP, and accounting systems through our comprehensive API. We support real-time data synchronization and provide dedicated support during the integration process.",
    },
    {
      question: "What kind of reporting and analytics are available?",
      answer:
        "Our platform provides comprehensive analytics including sales performance metrics, inventory turnover rates, dealer performance scorecards, territory analysis, and custom reporting dashboards. All reports can be scheduled and automated.",
    },
    {
      question: "Is there mobile support for field sales teams?",
      answer:
        "Yes, Sales Connect includes a fully-featured mobile app for iOS and Android. Field sales teams can access real-time inventory, process orders, communicate with dealers, and update customer information on the go.",
    },
    {
      question: "How secure is the data on Sales Connect?",
      answer:
        "We implement enterprise-grade security with 256-bit SSL encryption, regular security audits, role-based access controls, and SOC 2 compliance. Your data is backed up regularly and stored in secure, geographically distributed data centers.",
    },
    {
      question: "What support is available during implementation?",
      answer:
        "We provide comprehensive onboarding including dedicated account managers, technical support team, training sessions for your staff, and ongoing support. Implementation typically takes 2-4 weeks depending on complexity.",
    },
    {
      question: "Can the system handle multiple currencies and regions?",
      answer:
        "Yes, Sales Connect supports multi-currency operations, regional pricing strategies, localized tax calculations, and can be configured for different time zones and business rules across various markets.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Sales Operations
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We recognise the challenges brands face in managing sales and
                  distribution. Our comprehensive solutions streamline
                  operations and boost revenue with features like real-time
                  order processing, inventory tracking, performance analytics,
                  and more.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://dealerconnect.in/book-a-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy"
                alt="Sales Dashboard Analytics"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+47%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Sales Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline operations and boost revenue with our powerful suite of
              integrated tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Large Icon Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
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
                  <div className="flex items-center justify-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy"
                alt="Analytics Dashboard"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <PieChart className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Live Data</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Powerful Analytics & Reporting
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Gain valuable insights into sales trends and revenue with our
                powerful reporting tools. Make data-driven decisions that drive
                growth and optimize performance.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Monitor />,
                    title: "Custom Dashboards",
                    desc: "Create personalized views of your key metrics",
                  },
                  {
                    icon: <BarChart3 />,
                    title: "Predictive Analytics",
                    desc: "Forecast trends and anticipate market changes",
                  },
                  {
                    icon: <Target />,
                    title: "Performance Metrics",
                    desc: "Track KPIs and measure team effectiveness",
                  },
                  {
                    icon: <Globe />,
                    title: "Revenue Tracking",
                    desc: "Monitor revenue streams across all channels",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 text-blue-600">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Sales Connect
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
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="src/assets/glasslogo.png"
              alt="Team collaboration"
              className="w-32 h-32 rounded-full mx-auto mb-1 border-1 border-white shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Sales Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using Sales Connect to
            streamline operations and boost revenue. Start your free trial
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dealerconnect.in/book-a-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </a>
            <a
              href="https://dealerconnect.in/book-a-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Sales
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesConnect;
