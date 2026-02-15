import React, { useState, useEffect } from 'react';
import { Users, Shield, Lock, Settings, Key, UserCheck, Layers, GitBranch, Database, Cloud, ArrowRight, CheckCircle, Zap, Eye, ChevronDown, ChevronUp, Link2, Box, Network, Server, Workflow } from 'lucide-react';

const Integration = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [animatedCards, setAnimatedCards] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "User Management System",
      description: "Sophisticated user management system designed to empower businesses with tools for managing sales force and dealer profiles efficiently.",
      gradient: "from-blue-500 to-cyan-500",
      benefits: ["Profile management", "Role-based access", "User analytics"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Customized Access Levels",
      description: "Configure customized access levels to ensure sensitive information remains secure while promoting a collaborative working environment.",
      gradient: "from-purple-500 to-pink-500",
      benefits: ["Role customization", "Permission control", "Security management"]
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security features ensuring data protection and regulatory compliance across all integrations.",
      gradient: "from-green-500 to-emerald-500",
      benefits: ["Data encryption", "Compliance ready", "Audit trails"]
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "Seamless Integrations",
      description: "Connect with your favorite tools and services through our extensive integration library and API capabilities.",
      gradient: "from-orange-500 to-red-500",
      benefits: ["API access", "Webhook support", "Real-time sync"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Management",
      description: "Centralized data management with powerful tools for organizing, accessing, and analyzing business information.",
      gradient: "from-indigo-500 to-blue-500",
      benefits: ["Centralized data", "Data synchronization", "Backup & recovery"]
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline business processes with intelligent workflow management.",
      gradient: "from-teal-500 to-cyan-500",
      benefits: ["Process automation", "Custom workflows", "Efficiency boost"]
    }
  ];

  const integrationCategories = [
    {
      title: "Business Tools",
      description: "Connect with popular business management and productivity tools",
      icon: <Box className="w-12 h-12" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      tools: ["Tally", "Zoho", "SAP", "QuickBooks"]
    },
    {
      title: "Cloud Services",
      description: "Integrate with leading cloud platforms and infrastructure",
      icon: <Cloud className="w-12 h-12" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      tools: ["AWS", "Google Cloud", "Azure", "Salesforce"]
    },
    {
      title: "Communication",
      description: "Enhance team collaboration with messaging and communication tools",
      icon: <Network className="w-12 h-12" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      tools: ["WhatsApp", "Slack", "Teams", "Email"]
    }
  ];

  const stats = [
    { number: "25+", label: "Integrations", icon: <Link2 className="w-6 h-6" />, color: "text-blue-600" },
    { number: "100%", label: "Data Security", icon: <Shield className="w-6 h-6" />, color: "text-green-600" },
    { number: "99.9%", label: "Uptime SLA", icon: <Server className="w-6 h-6" />, color: "text-purple-600" },
    { number: "24/7", label: "API Support", icon: <Zap className="w-6 h-6" />, color: "text-orange-600" }
  ];

  const capabilities = [
    {
      title: "Efficient Profile Management",
      description: "Empower businesses with tools needed for managing sales force and dealer profiles efficiently",
      icon: <Users className="w-16 h-16" />,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Secure Information Access",
      description: "Ensure sensitive information remains secure while promoting collaborative working environment",
      icon: <Lock className="w-16 h-16" />,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Collaborative Environment",
      description: "Foster teamwork and collaboration through customized access levels and secure sharing",
      icon: <Network className="w-16 h-16" />,
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "What is the user management system?",
      answer: "Our sophisticated user management system is designed to empower businesses with the tools needed for managing sales force and dealer profiles efficiently. It allows for customized access levels, ensuring that sensitive information remains secure while promoting a collaborative working environment."
    },
    {
      question: "How do customized access levels work?",
      answer: "Customized access levels allow you to configure different permission sets for various user roles. This ensures that each user has access to only the information and features they need, maintaining security while enabling collaboration across your organization."
    },
    {
      question: "What integrations are available?",
      answer: "We offer 25+ integrations with popular business tools including Tally, Zoho, SAP, QuickBooks, AWS, Google Cloud, WhatsApp, and many more. Our API allows for custom integrations to meet specific business needs."
    },
    {
      question: "How secure is the integration platform?",
      answer: "We implement enterprise-grade security with 256-bit SSL encryption, role-based access control, regular security audits, and compliance with industry standards. All data transfers are encrypted and monitored 24/7."
    },
    {
      question: "Can I customize user roles and permissions?",
      answer: "Yes, our platform provides complete flexibility to create custom user roles with specific permissions. You can define what each role can view, edit, or manage, ensuring optimal security and workflow efficiency."
    },
    {
      question: "What API capabilities are provided?",
      answer: "Our robust API provides full access to platform features including user management, data synchronization, webhook integration, and real-time updates. Comprehensive documentation and 24/7 support are available for developers."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % integrationCategories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCardHover = (index) => {
    setAnimatedCards(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setAnimatedCards(prev => ({ ...prev, [index]: false }));
    }, 600);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Integration & User Management Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Integrations </span>
              & Management
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Our capabilities include a sophisticated user management system, designed to empower businesses with the 
              tools needed for managing sales force and dealer profiles efficiently. This feature allows for customized 
              access levels, ensuring that sensitive information remains secure while promoting a collaborative working environment.
            </p>
        
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => handleCardHover(`stat-${index}`)}
              >
                <div className={`${stat.color} mb-4 flex justify-center ${animatedCards[`stat-${index}`] ? 'animate-bounce' : ''}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Visual */}
     
        </div>
      </section>

     
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools for user management, security, and seamless integrations
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
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg ${animatedCards[`feature-${index}`] ? 'animate-pulse' : ''}`}>
                    <div className="text-white transform group-hover:rotate-12 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60`}></div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-40`}></div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60`}></div>
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
                      <div key={idx} className="flex items-center justify-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-8">
                    {/*<button className={`px-6 py-2 bg-gradient-to-r ${feature.gradient} text-white rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      Learn More
                    </button>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to empower businesses with sophisticated management tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center group"
                onMouseEnter={() => handleCardHover(`capability-${index}`)}
              >
                <div className={`w-32 h-32 bg-gradient-to-r ${capability.gradient} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl ${animatedCards[`capability-${index}`] ? 'animate-bounce' : ''}`}>
                  <div className="text-white">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

 

    
      
    </div>
  );
};

export default Integration;