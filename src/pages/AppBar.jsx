import React, { useState } from 'react'
/*import logo from "@/assets/logo.png";*/
import logo from "@/assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Menu, X } from 'lucide-react';

const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const baseClasses =
    "relative text-sm lg:text-base text-muted-foreground transition-colors px-1";
  return (
    <div className="bg-gradient-card px-4 sm:px-6 mt-2">
      <header className="relative z-50 px-4 sm:px-6 py-4 bg-[#dbeafe] rounded-t-2xl">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <img src={logo} alt="Probiz Logo" width={200} height={100} />

              {/* Desktop Navigation - Fixed with explicit display classes */}
              <div className="hidden md:flex md:items-center md:space-x-4 absolute left-1/2 transform -translate-x-1/2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                  }
                >
                  About
                </NavLink>

               {/* ✅ Solutions with Dropdown */}
                <div className="relative group">
                  <button className={`${baseClasses} hover:text-foreground flex items-center gap-1`}>
                    Solutions
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-card rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                    <NavLink
                      to="/features/sales-connect"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-t-lg"
                    >
                      Sales Connect
                    </NavLink>
                    <NavLink
                      to="/features/dealer-connect"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      Dealer Connect
                    </NavLink>
                    <NavLink
                      to="/features/employee-connect"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      Employee Connect
                    </NavLink>
                    <NavLink
                      to="/features/partner-connect"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-b-lg"
                    >
                      Partner Connect
                    </NavLink>
                     <NavLink
                      to="/features/integrations"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-b-lg"
                    >
                      Integrations
                    </NavLink>
                  </div>
                </div>

                  <NavLink
                  to="https://dealerconnect.in/blog"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                  }
                >
                  Blogs
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                  }
                >
                  Contact
                </NavLink>

              

                 
              </div>

            </div>

            {/* Desktop Download Button - Fixed with explicit display classes */}
            <Button
  asChild
  className="hidden sm:flex sm:bg-foreground sm:text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base"
>
  <Link to="https://dealerconnect.in/book-a-demo">Book a Demo</Link>
</Button>
            
            {/*<Button className="hidden sm:flex sm:bg-foreground sm:text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base">
              Book a Demo
            </Button>*/}
            

            {/* Mobile Menu Button */}
            <button
              className="flex sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
         {isMobileMenuOpen && (
        <div className="block sm:hidden mt-2 rounded-2xl px-4 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseClasses} ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "hover:text-foreground"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseClasses} ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "hover:text-foreground"
                }`
              }
            >
              About
            </NavLink>

            {/* ✅ Solutions Dropdown */}
            <div>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`${baseClasses} flex items-center justify-between w-full hover:text-foreground`}
              >
                Solutions
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isSolutionsOpen && (
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <NavLink
                    to="/features/sales-connect"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Sales Connect
                  </NavLink>
                  <NavLink
                    to="/features/dealer-connect"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Dealer Connect
                  </NavLink>
                  <NavLink
                    to="/features/employee-connect"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Employee Connect
                  </NavLink>
                  <NavLink
                    to="/features/partner-connect"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Partner Connect
                  </NavLink>
                   <NavLink
                    to="/features/integrations"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Integrations
                  </NavLink>
                </div>
              )}
            </div>

                 <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${baseClasses} ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "hover:text-foreground"
                }`
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseClasses} ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "hover:text-foreground"
                }`
              }
            >
              Contact
            </NavLink>

       
              {/* Mobile Download Button */}
              <Button
  asChild
  className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full flex items-center justify-center"
>
  <Link to="https://dealerconnect.in/book-a-demo">Book a Demo</Link>
</Button>


            {/*<Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full flex items-center justify-center">
              Book a Demo
            </Button>*/}
          </div>
        </div>
      )}
        </div>
      </header>
    </div>
  )
}

export default AppBar