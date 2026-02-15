import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, ShoppingBag, Award, Eye, TrendingUp, Handshake, Target, Gift, Zap, ArrowRight, 
  CheckCircle, Star, Crown, Heart, DollarSign, ChevronDown, ChevronUp, Building, UserPlus, 
  BarChart3, MessageCircle, X   // <-- add this
} from 'lucide-react';

import fq from '../assets/faqs.jpg';
import glass from "@/assets/glasslogo.png";
import p1 from "@/assets/partner1.webp";
import demoVideo from "@/assets/demo.mp4";

const PartnerConnect = () => {
    const [currentPartner, setCurrentPartner] = useState(0);
    const [animatedCards, setAnimatedCards] = useState({});
    const [openFaq, setOpenFaq] = useState(null);
        const [showVideo, setShowVideo] = useState(false);
         const videoRef = useRef(null);

    const features = [
        {
            icon: <Handshake className="w-10 h-10" />,
            title: "Bridge to End Consumers",
            description: "Partners serve as the vital bridge between your business and end consumers, facilitating seamless product promotion and purchase experiences.",
            gradient: "from-blue-500 to-cyan-500",
            benefits: ["Direct consumer interaction", "Product promotion", "Purchase facilitation"]
        },
        {
            icon: <Eye className="w-10 h-10" />,
            title: "Visual Merchandising (Planogram)",
            description: "Handle visual merchandising strategies to maximize performance and profits, as product visibility is crucial for consumers.",
            gradient: "from-purple-500 to-pink-500",
            benefits: ["Strategic product placement", "Performance optimization", "Profit maximization"]
        },
        {
            icon: <Award className="w-10 h-10" />,
            title: "Loyalty Programs & Rewards",
            description: "Enhance relationships with partners through comprehensive loyalty programs and reward mechanisms for better customer engagement.",
            gradient: "from-orange-500 to-red-500",
            benefits: ["Partner loyalty programs", "Reward mechanisms", "Enhanced engagement"]
        },
        {
            icon: <ShoppingBag className="w-10 h-10" />,
            title: "Single Point of Purchase",
            description: "Partners manage the complete purchase journey, serving as the single point of contact for end consumers.",
            gradient: "from-green-500 to-emerald-500",
            benefits: ["Complete purchase journey", "Single contact point", "Streamlined experience"]
        },
        {
            icon: <Target className="w-10 h-10" />,
            title: "Focus on Core Business",
            description: "Partner Connect enables you to focus on manufacturing and distribution while partners handle market-facing activities.",
            gradient: "from-indigo-500 to-blue-500",
            benefits: ["Manufacturing focus", "Distribution efficiency", "Market delegation"]
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Market Expansion",
            description: "Leverage partner networks to expand market reach without the enormous effort of direct selling to consumers.",
            gradient: "from-teal-500 to-cyan-500",
            benefits: ["Market reach expansion", "Reduced selling effort", "Network leverage"]
        }
    ];

    const partnerTypes = [
        {
            title: "Measure Your Presence",
            description: "Take control of your market presence with an easy-to-setup loyalty program that enhances partner connect and incorporates effective reward mechanisms for your partners.",
            icon: <Building className="w-12 h-12" />,
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            title: "Diverse Reward Mechanisms",
            description: "Implement reward mechanisms by awarding points for completing specific tasks or actions, such as scanning a coupon placed inside products like paints or tanks. This strategy can enhance loyalty programs and encourage customer engagement through partner connect initiatives.",
            icon: <Users className="w-12 h-12" />,
            color: "text-purple-600",
            bgColor: "bg-purple-100"
        },
        {
            title: "Connect Multiple Entities",
            description: "Bring all your channel partners, including dealers, distributors, and influencers, onto a single platform to enhance partner connect through effective loyalty programs and reward mechanisms.",
            icon: <UserPlus className="w-12 h-12" />,
            color: "text-green-600",
            bgColor: "bg-green-100"
        }
    ];

    const stats = [
        { number: "500+", label: "Active Partners", icon: <Handshake className="w-6 h-6" />, color: "text-blue-600" },
        { number: "98%", label: "Partner Satisfaction", icon: <Heart className="w-6 h-6" />, color: "text-red-600" },
        { number: "250%", label: "Market Reach", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-600" },
        { number: "24/7", label: "Partner Support", icon: <MessageCircle className="w-6 h-6" />, color: "text-purple-600" }
    ];

    const benefits = [
        {
            title: "Reduced Market Effort",
            description: "Eliminate the enormous effort required to sell products directly to market without partners",
            icon: <Zap className="w-16 h-16" />,
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "Enhanced Product Visibility",
            description: "Partners ensure crucial product visibility through strategic visual merchandising",
            icon: <Eye className="w-16 h-16" />,
            gradient: "from-green-400 to-blue-500"
        },
        {
            title: "Stronger Customer Relationships",
            description: "Build lasting customer relationships through partner loyalty programs and rewards",
            icon: <Heart className="w-16 h-16" />,
            gradient: "from-pink-400 to-red-500"
        }
    ];

    const faqs = [
        {
            question: "What makes partners essential for business success?",
            answer: "Partners serve as the bridge between you and your end consumers, handling direct interactions, product promotion, and purchases. Without partners, you would need enormous effort to sell products directly to market, making partner networks crucial for efficient market reach."
        },
        {
            question: "How do visual merchandising and planograms work?",
            answer: "Partners handle visual merchandising strategies including planogram implementation to maximize performance and profits. Product visibility is crucial for consumers, and strategic placement through visual merchandising significantly impacts sales success."
        },
        {
            question: "What loyalty programs and rewards are available for partners?",
            answer: "We offer comprehensive loyalty programs and reward mechanisms that enhance relationships with partners, enabling them to better engage with customers. These programs include performance-based incentives, recognition systems, and exclusive benefits."
        },
        {
            question: "How does Partner Connect help focus on core business?",
            answer: "Partner Connect enables you to focus on manufacturing and distribution of your goods while partners handle market-facing activities. This delegation allows you to concentrate on what you do best while leveraging partner expertise for customer engagement."
        },
        {
            question: "What support is provided to partners?",
            answer: "We provide comprehensive support including training programs, marketing materials, technical assistance, performance analytics, and dedicated account management. Our 24/7 support ensures partners have everything they need to succeed."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPartner((prev) => (prev + 1) % partnerTypes.length);
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
        setAnimatedCards(prev => ({ ...prev, [index]: true }));
        setTimeout(() => {
            setAnimatedCards(prev => ({ ...prev, [index]: false }));
        }, 600);
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            
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
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                            <Handshake className="w-4 h-4 mr-2" />
                            Partner Connect Platform
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Bridge to Your
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Success </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Partners are the bridge between you and your end consumers. They interact with end consumers,
                            promote products, and handle the single point of purchase. Imagine the enormous effort you would need
                            without partners or resellers to sell your products to market.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="https://dealerconnect.in/book-a-demo" target="_blank" rel="noopener noreferrer">
                                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center">
                                    Connect With Partners
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                            
                            <button
                            onClick={openVideoModal}
                            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition"
                        >
                            Explore Platform
                        </button>
                            
                        </div>
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
                    <div className="relative">
                        <img
                            src={p1}
                            alt="Partner Network Collaboration"
                            className="w-full rounded-3xl shadow-2xl"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border hidden lg:block">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                    <Handshake className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">Connected</div>
                                    <div className="text-gray-600">Partner Network</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Types Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Loyalty Program
                        </h2>
                        {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different partner types serve unique roles in connecting your business to end consumers
            </p> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {partnerTypes.map((type, index) => (
                            <div
                                key={index}
                                className={`text-center group hover:transform hover:scale-105 transition-all duration-500 p-8 rounded-3xl ${currentPartner === index ? 'bg-gradient-to-br from-blue-50 to-purple-50 ring-4 ring-blue-200' : 'bg-gray-50'
                                    }`}
                                onMouseEnter={() => handleCardHover(`type-${index}`)}
                            >
                                <div className={`w-24 h-24 ${type.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 ${animatedCards[`type-${index}`] ? 'animate-pulse' : ''}`}>
                                    <div className={type.color}>
                                        {type.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{type.description}</p>
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
                            Comprehensive Partner Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to build and manage successful partner relationships
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

            {/* Benefits Showcase */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Why Partner Connect is Essential
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Focus on manufacturing and distribution while partners handle market-facing activities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="text-center group"
                                onMouseEnter={() => handleCardHover(`benefit-${index}`)}
                            >
                                <div className={`w-32 h-32 bg-gradient-to-r ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-2xl ${animatedCards[`benefit-${index}`] ? 'animate-bounce' : ''}`}>
                                    <div className="text-white">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
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
                        Everything you need to know about Partner Connect
                    </p>
                </div>
                <div className='flex'>
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
                                        className={`transition-all duration-500 overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
                            alt="Partnership success"
                            className="w-32 h-32 rounded-full mx-auto mb-2 border-2 border-white shadow-2xl"
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Partner Network?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Stop exerting enormous effort to sell directly to market. Let our Partner Connect platform
                        bridge you to success through strategic partner relationships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://dealerconnect.in/book-a-demo" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            Start Connecting Partners
                        </button>
                        </a>
                        <a href="https://dealerconnect.in/book-a-demo/ola/services/consultation" target="_blank" rel="noopener noreferrer">
                        <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                            Schedule Partnership Call
                        </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerConnect;