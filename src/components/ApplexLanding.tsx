import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FeatureCard } from "./FeatureCard";
import { FloatingCard } from "./FloatingCard";
import {
  Download,
  Smartphone,
  RefreshCw,
  Settings,
  Users,
  Calendar,
  MessageCircle,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Menu,
  X,
  TrendingUp,
  Briefcase,
  Handshake,
  Gift,
  Award,
} from "lucide-react";
import { useState } from "react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";
import heroMockup from "@/assets/center.png";
import calendarMockup from "@/assets/calendar-mockup.jpg";
import customerTestimonial from "@/assets/customer-testimonial.jpg";
import { Link } from "react-router-dom";
import logo from "@/assets/pclogo.png";
import frame1 from "@/assets/side1.png";
import glass from "@/assets/pclogo.png";
import frame3 from "@/assets/side2.png";
import frame4 from "@/assets/frame 1.png";
import frame12 from "@/assets/foot12.jpeg";
import dashboard from "@/assets/dashboard.png";
import frame from "@/assets/homepage.png";
import company1 from "@/assets/tally.png";
import company2 from "@/assets/zoho.png";
import company3 from "@/assets/amazon.svg";
import company4 from "@/assets/freshworks.svg";
import company5 from "@/assets/justdial.svg";
import company6 from "@/assets/greytur.png";
import company7 from "@/assets/razorpay.svg";
import company8 from "@/assets/indiamart.png";
import company9 from "@/assets/keka.svg";
import company10 from "@/assets/quickbook.svg";
import company11 from "@/assets/sap.svg";
import company12 from "@/assets/whatsapp.svg";
import company13 from "@/assets/paytm.png";
import home from "@/assets/home.png";
import mascot from "@/assets/mascot.png";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function ApplexLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-bg px-4 sm:px-6">
      {/* Header */}
      <div className="bg-gradient-card ">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 py-10 sm:py-16 lg:py-20 overflow-visible bg-gradient-to-b from-[#dbeafe] via-[#eef2ff] to-[#fff1f2] rounded-b-2xl ">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
                AI-powered eB2B{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Cloud Infrastructure
                </span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  platform for Sales & Distribution Management
                </span>
              </h1>

              <p className="font-semibold text-base sm:text-lg md:text-2xl mb-4">
                {" "}
                AI-Powered eB2B Cloud Platform for SME's
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                A software-as-a-service (SaaS) solution designed for consumer
                goods brands of various sizes—micro, small, and medium—to
                digitise, automate, optimise, and efficiently manage the
                expansion of their business-to-business (B2B) sales operations
                involving retailers, distributors, and sales teams.
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
                {" "}
                Carefully Crafted for SME's in India
              </h1>

              <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-normal text-foreground mb-4 sm:mb-6 leading-tight px-2">
                {" "}
                Digitise . Automate . Optimise
              </h3>
              {/*<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 lg:mb-16 px-4">
                Digitise . Automate . Optimise
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00143e] hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center"
                >
                  <a
                    href="#/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>*/}
            </div>

            {/* Hero Phone Mockup with Floating Cards */}
            <div className="relative flex justify-center animate-bounce-in mt-8 sm:mt-12">
              <div className="relative w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem] xl:max-w-[45rem]">
                <img
                  src={frame}
                  alt="ProbizConnect mobile app interface"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl"
                />

                {/* Floating Feature Cards - Hidden on mobile, visible on larger screens */}
                <div className="hidden lg:block absolute -left-48 xl:-left-26 top-0 w-full xl:w-60 lg:w-60 transform -rotate-[10deg]">
                  {/* <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Quick Chat</p>
                      <p className="text-xs text-muted-foreground">Team discussions</p>
                    </div>
                  </div> */}
                  
                </div>

                <div className="hidden lg:block absolute -left-48 xl:-left-34 top-40 w-full xl:w-60 lg:w-60 transform -rotate-[10deg]">
                  {/* <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Quick Chat</p>
                      <p className="text-xs text-muted-foreground">Team discussions</p>
                    </div>
                  </div> */}
                  <img
                    src={glass}
                    alt="ProbizConnect Logo"
                    className="w-full h-full object-contain mb-2"
                  />
                </div>

                <div className="hidden lg:block absolute -right-24 xl:-right-68 top-10 w-40 xl:w-48 transform -rotate-[-10deg]">
                  {/* <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Users className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Team Sync</p>
                      <p className="text-xs text-muted-foreground">Real-time collaboration</p>
                    </div>
                  </div> */}
                  <img
                    src={glass}
                    alt="ProbizConnect Logo"
                    className="w-full h-full xl:w-full xl:h-full mb-2"
                  />
                </div>

                <div className="hidden lg:block absolute -left-28 bottom-32 xl:-left-48 bottom-20 w-44 xl:w-52 transform -rotate-[10deg]">
                  {/* <div className="flex items-center space-x-2 xl:space-x-3">
                    <div className="w-6 xl:w-8 h-6 xl:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Calendar className="w-3 xl:w-4 h-3 xl:h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-xs xl:text-sm">Smart Scheduling</p>
                      <p className="text-xs text-muted-foreground">Automatic planning</p>
                    </div>
                  </div> */}

                  {/* <img src={frame4} alt="Probiz Logo" className="w-full h-full object-contain mb-2" /> */}
                </div>

                <div className="hidden lg:block absolute -right-28 xl:-right-68 bottom-32 w-44 xl:w-52 transform -rotate-[-10deg]">
                  {/* <div className="text-center p-2">
                    <div className="w-10 xl:w-12 h-10 xl:h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Star className="w-5 xl:w-6 h-5 xl:h-6 text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-xs xl:text-sm">4.9/5 Rating</p>
                    <p className="text-xs text-muted-foreground">User satisfaction</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      {/*<section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
              Product Features
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Discover Probiz's Connect advanced features to streamline
              workflow, enhance collaboration, and boost productivity.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* First Row - Straight 
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <Link to="/features/sales-connect" className="block">
                <FeatureCard
                  icon={RefreshCw}
                  title="Sales Connect"
                  description="We recognise the challenges brands face in managing sales and distribution. "
                  className="animate-fade-in"
                />
              </Link>

              <Link to="/features/dealer-connect" className="block">
                <FeatureCard
                  icon={Settings}
                  title="Dealer Connect"
                  description="In today's competitive market, an efficient dealer and distributor network is vital for sustained growth and market leadership. "
                  className="animate-fade-in"
                />
              </Link>
            </div>

            {/* Second Row - Shuffled/Offset 
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto lg:ml-16">
              <Link to="/features/employee-connect" className="block">
                <FeatureCard
                  icon={Globe}
                  title="Employee Connect"
                  description="In the fast-paced world of sales, your employees are the frontline representatives of your brand."
                  className="animate-fade-in"
                />
              </Link>

              <Link to="/features/partner-connect" className="block">
                <FeatureCard
                  icon={Zap}
                  title="Partner Connect"
                  description="Rewarding loyalty programs that motivate partners to stay engaged and invested."
                  className="animate-fade-in"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center w-full text-center text-muted-foreground">
              <Link to="/features/integrations" className="animate-fade-in">
                <FeatureCard
                  icon={Globe}
                  title="Integrations"
                  description="It simplifies financial transactions with seamless payment gateway integration."
                  className="animate-fade-in"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>*/}
       {/* Recent Articles */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-purple-600 mb-3">Why ProbizConnect</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              GAIN 360° — Visibility & Control
            </h2>
            {/*<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Stay updated with industry news, tips, and the latest productivity
              workflow optimization strategies.
            }*/}
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Sales Connect",
                excerpt:
                  "We understand the challenges brands face in sales and distribution management. Our comprehensive solutions streamline operations and increase revenue with real-time order processing, inventory tracking, performance analytics, incentive management, seamless communication, route optimisation, and customisable stakeholder access.",
                date: "November 2022",
                color: "from-purple-500 to-purple-700",
                icon: <TrendingUp className="w-8 h-8" />,
              },
              {
                title: "Dealer Connect",
                excerpt:
                  "A Dealer & Distributor Management platform streamlines order processing, inventory tracking, performance analysis, and communication for managing your network. Probiz Connect provides detailed analytics and reports to identify top-performing dealers, enabling you to reward and motivate your dealer, distribution and retailer network.",
                date: "November 2022",
                color: "from-purple-500 to-purple-700",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Employee Connect",
                excerpt:
                  "At Probiz Connect, we understand the vital role field sales and distribution teams play in boosting revenue and fostering lasting customer relationships. That's why we've created a comprehensive empowerment solution that equips your team with the tools and technology to excel, while providing powerful reporting tools for valuable sales and revenue insights.",
                date: "November 2022",
                color: "from-purple-500 to-purple-700",
                icon: <Briefcase className="w-8 h-8" />,
              },
              {
                title: "Partner Connect",
                excerpt:
                  "By leveraging influencers and rewarding loyalty programs, your brand can excel in a competitive market and leave a lasting impression on customers and partners.",
                date: "November 2022",
                color: "from-purple-500 to-purple-700",
                icon: <Handshake className="w-8 h-8" />,
              },
              {
                title: "Reward Schemes",
                excerpt:
                  "You can design rewards that match your business goals, choosing between points-based rewards or instant cash incentives according to your partner engagement strategy.",
                date: "November 2022",
                color: "from-purple-500 to-purple-700",
                icon: <Gift className="w-8 h-8" />,
              },
              {
                title: "Loyalty Program",
                excerpt:
                  "Easily establish a brand loyalty program for your partners to strengthen your market presence. Reward points for actions like scanning coupons inside products.",
                date: "November 2022",
                color: "from-purple-500 to-purple-700",
                icon: <Award className="w-8 h-8" />,
              },
            ].map((article, index) => (
              <StaggerItem key={index}>
              <Card
                className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 group cursor-pointer rounded-2xl"
              >
                {/* Icon Header */}
                <div className="mb-4 sm:mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${article.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <div className="text-white">{article.icon}</div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div
                  className={`mt-6 w-full h-1 bg-gradient-to-r ${article.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
                {/* <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform text-sm sm:text-base mt-2">
                  Read more
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
                </div> */}
              </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>


      <section className="bg-gradient-to-b from-[#dbeafe] via-[#eef2ff] to-[#fff1f2] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal as="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Supercharge your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sale and Distribution with AI Today
            </span>
          </Reveal>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
           
            <div className="flex items-center justify-center w-20 h-20 bg-white shadow-md rounded-full">
              <FaGoogle className="text-3xl text-red-500" />
            </div>
           
            <div className="flex items-center justify-center w-20 h-20 bg-white shadow-md rounded-full">
              <FaAmazon className="text-3xl text-yellow-600" />
            </div>
            
            <div className="flex items-center justify-center w-20 h-20 bg-white shadow-md rounded-full">
              <FaMicrosoft className="text-3xl text-blue-500" />
            </div>
           
            <div className="flex items-center justify-center w-20 h-20 bg-white shadow-md rounded-full">
              <FaApple className="text-3xl text-gray-800" />
            </div>
          
            <div className="flex items-center justify-center w-20 h-20 bg-white shadow-md rounded-full">
              <FaFacebook className="text-3xl text-blue-600" />
            </div>
          </div> */}
        </div>
      </section>

      {/* Secondary Hero with Calendar */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal className="order-2 lg:order-1">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-purple-600 mb-3">Built for scale</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Cutting-Edge Technology
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Complement your business growth and uncover new opportunities
                with some amazing capabilities that Probiz Connect offers. The
                scalable solutions are designed with new-age technology models,
                allowing you to expand your horizons.<br></br>
                You will gain valuable insights into your sales trends and
                revenue generation through our robust reporting tools. <br></br>
                Simplify the entire order management process with Probiz
                Connect's intuitive platform.<br></br>
                Dealers and distributors can place orders effortlessly, and your
                sales team can track their status in real-time. Track the
                performance of your dealer network and sales force, and design
                rewards that matches your business goals. <br></br>
                Establish a brand loyalty program for your partners to
                strengthen your market presence.<br></br>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Try for free */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00143e] hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center"
                >
                  <a
                    href="#/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try for free
                  </a>
                </Button>

                {/* Book a Demo */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00143e] hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center"
                >
                  <a
                    href="#/book-a-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="flex justify-center order-1 lg:order-2">
              <img
                src={home}
                alt="Applex calendar interface"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl sm:rounded-3xl shadow-floating"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-purple-600 mb-3">Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Over 25+ Integrations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Unlock limitless possibilities with our platform's extensive library
            of over 25+ integrations, empowering seamless connectivity across
            your favorite tools and services.
          </p>
          </Reveal>

          {/* Integration Logos Marquee */}
          <div
            className="logo-marquee group relative overflow-hidden mb-16"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="logo-marquee-track flex w-max items-center gap-16 py-8">
              {(() => {
                const homeLogos = [
                  { name: 'Tally', src: company1 },
                  { name: 'Zoho', src: company2 },
                  { name: 'Amazon', src: company3 },
                  { name: 'Freshworks', src: company4 },
                  { name: 'JustDial', src: company5 },
                  { name: 'Greytip', src: company6 },
                  { name: 'Razorpay', src: company7 },
                  { name: 'IndiaMART', src: company8 },
                  { name: 'Keka', src: company9 },
                  { name: 'QuickBooks', src: company10 },
                  { name: 'SAP', src: company11 },
                  { name: 'WhatsApp', src: company12 },
                  { name: 'Paytm', src: company13 },
                ];
                return [...homeLogos, ...homeLogos].map((logo, idx) => (
                  <img
                    key={`${logo.name}-${idx}`}
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    className="h-12 md:h-14 w-auto object-contain shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition duration-300"
                  />
                ));
              })()}
            </div>
          </div>

          <style>{`
            @keyframes logo-marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logo-marquee-track {
              animation: logo-marquee-scroll 40s linear infinite;
            }
            .logo-marquee:hover .logo-marquee-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .logo-marquee-track { animation: none; }
            }
          `}</style>

          {/* CTA Button */}
          <a
            href="#/book-a-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get A Free Demo
            </button>
          </a>
        </div>
      </section>

     
      <section className="bg-gradient-to-b from-[#dbeafe] via-[#eef2ff] to-[#fff1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 ">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up">
            <img
              src={mascot}
              alt="ProbizConnect mascot"
              className="w-32 sm:w-40 md:w-48 mx-auto mb-4 animate-float-soft drop-shadow-xl select-none"
            />
            <Reveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-foreground mb-4 sm:mb-6 leading-tight">
              Supercharge your sales <br /> with AI today!
            </Reveal>
            {/* <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Dive deeper into our resources to maximize your productivity and workflow efficiency.
            </p> */}
          </div>
          <img
            src={frame12}
            alt="Explore"
            className="w-full max-w-5xl mx-auto h-auto object-cover animate-fade-in rounded-lg sm:rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 rounded-b-3xl  sm:px-6 py-8 sm:py-12 border-t border-border/20 bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-foreground mb-3 sm:mb-4">
              Ready to get started?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground text-white mb-4 sm:mb-6 px-4">
              Join thousands of teams already using ProbizConnect to boost their
              productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#00143e] hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center"
              >
                <a
                  href="#/book-a-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try for free
                </a>
              </Button>

              {/* Book a Demo */}
              <Button
                asChild
                size="lg"
                className="bg-[#00143e] hover:opacity-90 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg flex items-center justify-center"
              >
                <a
                  href="#/book-a-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground text-white">
            <p>&copy; 2023 ProbizConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
