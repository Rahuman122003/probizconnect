import React, { useState } from 'react'
import logo from "@/assets/logo.jpeg";
import brochure from "@/assets/brochure.pdf";
import { Link, NavLink } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Menu, X } from 'lucide-react';

const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const baseClasses =
    "relative text-sm lg:text-base text-muted-foreground transition-colors px-1";

  return (
    <div className="bg-gradient-card px-4 sm:px-6 mt-2">
      <header className="relative z-50 px-4 sm:px-6 py-4 bg-[#dbeafe] rounded-t-2xl">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm shadow-lg">

            {/* LEFT */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <img src={logo} alt="Probiz Logo" width={200} height={100} />

              {/* DESKTOP NAV */}
              <div className="hidden md:flex md:items-center md:space-x-4 absolute left-1/2 transform -translate-x-1/2">

                <NavLink to="/" className={({ isActive }) =>
                  `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                }>
                  Home
                </NavLink>

                <NavLink to="/about" className={({ isActive }) =>
                  `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"}`
                }>
                  About
                </NavLink>

                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button className={`${baseClasses} hover:text-foreground flex items-center gap-1`}>
                    Solutions
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className="absolute left-0 mt-2 w-48 bg-card rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                    <NavLink to="/features/sales-connect" className="block px-4 py-2 text-sm hover:bg-muted">Sales Connect</NavLink>
                    <NavLink to="/features/dealer-connect" className="block px-4 py-2 text-sm hover:bg-muted">Dealer Connect</NavLink>
                    <NavLink to="/features/employee-connect" className="block px-4 py-2 text-sm hover:bg-muted">Employee Connect</NavLink>
                    <NavLink to="/features/partner-connect" className="block px-4 py-2 text-sm hover:bg-muted">Partner Connect</NavLink>
                    <NavLink to="/features/integrations" className="block px-4 py-2 text-sm hover:bg-muted">Integrations</NavLink>
                  </div>
                </div>

                <NavLink to="https://dealerconnect.in/blog" className={baseClasses}>
                  Blogs
                </NavLink>

                {/* ✅ BROCHURE BUTTON */}
                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className={`${baseClasses} hover:text-foreground`}
                >
                  Brochure
                </button>

                <NavLink to="/contact" className={baseClasses}>
                  Contact
                </NavLink>
                

              </div>
            </div>

            {/* RIGHT BUTTON */}
            <Button asChild className="hidden sm:flex sm:bg-foreground sm:text-background rounded-full px-4 lg:px-6">
              <Link to="https://dealerconnect.in/book-a-demo">Book a Demo</Link>
            </Button>

            {/* MOBILE MENU ICON */}
            <button className="flex sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="block sm:hidden mt-2 rounded-2xl px-4 py-3 bg-card/80 shadow-lg">
              <div className="flex flex-col space-y-3">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>

                {/* Mobile Brochure */}
                <button
                  onClick={() => setIsBrochureOpen(true)}
                  className="text-left text-sm text-muted-foreground"
                >
                  Brochure
                </button>

                <NavLink to="/contact">Contact</NavLink>

                <Button asChild className="w-full">
                  <Link to="https://dealerconnect.in/book-a-demo">Book a Demo</Link>
                </Button>

              </div>
            </div>
          )}

        </div>
      </header>

      {/* 🔥 FULL SCREEN PDF MODAL */}
      {isBrochureOpen && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex flex-col">

          {/* TOP BAR */}
          <div className="flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-md">
            <h2 className="text-white font-semibold">Company Brochure</h2>

            <button
              onClick={() => setIsBrochureOpen(false)}
              className="text-white text-xl hover:text-red-400"
            >
              ✕
            </button>
          </div>

          {/* PDF VIEWER */}
          <div className="flex-1 p-4">
            <iframe
              src={brochure}
              title="Brochure"
              className="w-full h-full rounded-xl"
            />
          </div>

        </div>
      )}

    </div>
  )
}

export default AppBar;