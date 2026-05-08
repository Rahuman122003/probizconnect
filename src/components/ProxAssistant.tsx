import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Sparkles, MessageSquare, HelpCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mascot2 from "@/assets/mascot2.png";

/**
 * Prox — the friendly Probiz Connect digital companion.
 * Floating bottom-right widget present on every page.
 */
export function ProxAssistant() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Show a one-time greeting hint shortly after page load
  useEffect(() => {
    if (sessionStorage.getItem("prox-greeted")) return;
    const t = setTimeout(() => setShowHint(true), 2500);
    const hide = setTimeout(() => {
      setShowHint(false);
      sessionStorage.setItem("prox-greeted", "1");
    }, 9000);
    return () => {
      clearTimeout(t);
      clearTimeout(hide);
    };
  }, []);

  const dismissHint = () => {
    setShowHint(false);
    sessionStorage.setItem("prox-greeted", "1");
  };

  const actions = [
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Book a Demo",
      to: "/book-a-demo",
      tone: "from-purple-600 to-blue-600",
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: "Talk to us",
      to: "/contact",
      tone: "from-pink-500 to-rose-500",
    },
    {
      icon: <HelpCircle className="w-4 h-4" />,
      label: "Explore Sales Connect",
      to: "/features/sales-connect",
      tone: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      {/* Greeting hint bubble (auto, dismissible) */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto relative max-w-[260px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 pr-8 mr-2"
          >
            <button
              onClick={dismissHint}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="text-sm font-semibold text-gray-900">
              Hi, I'm Prox! 👋
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              Your digital companion. Need a demo or want to chat?
            </p>
            {/* tail */}
            <span className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded action panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mr-1"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 px-4 py-4 flex items-center gap-3">
              <div className="relative">
                <img
                  src={mascot2}
                  alt="Prox"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-md bg-white"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
              </div>
              <div className="flex-1 text-white">
                <div className="flex items-center gap-1">
                  <p className="font-bold leading-tight">Prox</p>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                </div>
                <p className="text-xs text-white/80">Your digital companion</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-gradient-to-b from-white to-purple-50/30">
              <p className="text-sm text-gray-700 leading-relaxed">
                Hey there! 👋 What can I help you with today?
              </p>
              <div className="space-y-2">
                {actions.map((a) => (
                  <Link
                    key={a.label}
                    to={a.to}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r ${a.tone} text-white text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition`}
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/20">
                      {a.icon}
                    </span>
                    <span className="flex-1">{a.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <button
        onClick={() => {
          setOpen((v) => !v);
          dismissHint();
        }}
        aria-label={open ? "Close Prox" : "Open Prox assistant"}
        className="pointer-events-auto relative group"
      >
        {/* Pulsing halo */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-purple-400/40 animate-ping" />
        )}
        <span className="relative block w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 shadow-2xl shadow-purple-500/40 ring-4 ring-white/80 overflow-hidden group-hover:scale-105 transition">
          <img
            src={mascot2}
            alt="Prox"
            className="w-full h-full object-cover"
          />
        </span>
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full" />
      </button>
    </div>
  );
}

export default ProxAssistant;
