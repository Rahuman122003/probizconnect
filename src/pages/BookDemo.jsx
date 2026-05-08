import React, { useState } from "react";
import {
  Sparkles,
  Send,
  Calendar,
  Clock,
  Building2,
  User,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import mascot from "@/assets/mascot.png";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    interest: "Sales Connect",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      employees: formData.employees,
      interest: formData.interest,
      date: formData.date,
      time: formData.time,
      message:
        `Demo booking request:\n` +
        `Company: ${formData.company}\n` +
        `Phone: ${formData.phone}\n` +
        `Team size: ${formData.employees}\n` +
        `Interested in: ${formData.interest}\n` +
        `Preferred date: ${formData.date} ${formData.time}\n\n` +
        (formData.message || ""),
    };

    emailjs
      .send(
        "service_ehbfihd",
        "template_gtw90ho",
        templateParams,
        "QbkQHL7iND_gxWE_p"
      )
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          employees: "",
          interest: "Sales Connect",
          date: "",
          time: "",
          message: "",
        });
      })
      .catch(() => {
        alert("❌ Failed to submit. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const benefits = [
    "30-min personalized walkthrough",
    "Tailored use-cases for your business",
    "Q&A with our product experts",
    "Pricing & onboarding roadmap",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Title */}
        <div className="relative z-10 mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-500 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Book a Demo
            </span>
          </div>
          <img
            src={mascot}
            alt="ProbizConnect mascot"
            className="w-28 sm:w-32 md:w-40 mx-auto mb-4 animate-float-soft drop-shadow-xl select-none"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            See <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">ProbizConnect</span>
            <br /> in Action
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a free, no-obligation demo and discover how we can
            transform your B2B sales, dealer, and partner operations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ================= LEFT INFO PANEL ================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What you'll get
                </h3>
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-800">30 mins</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Format</div>
                      <div className="font-semibold text-gray-800">Online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wide opacity-90">
                  Or call us
                </span>
              </div>
              <div className="text-2xl font-bold">+91 96631 77996</div>
              <div className="text-sm opacity-90 mt-1">
                Mon – Sat, 10:00 AM – 7:00 PM IST
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="lg:col-span-7 group">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition"></div>

              {submitted ? (
                <div className="relative bg-white rounded-3xl p-10 h-full shadow-2xl flex flex-col items-center justify-center text-center min-h-[500px]">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Thanks! Request received.
                  </h3>
                  <p className="text-gray-600 max-w-md mb-6">
                    Our team will reach out within 24 hours to confirm your demo
                    slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold flex items-center gap-2"
                  >
                    Book another <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-white rounded-3xl p-8 lg:p-10 h-full shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Tell us about yourself
                    </h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field icon={<User className="w-4 h-4" />} label="Full Name">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </Field>
                      <Field icon={<Building2 className="w-4 h-4" />} label="Company">
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field icon={<Mail className="w-4 h-4" />} label="Work Email">
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@acme.com"
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </Field>
                      <Field icon={<Phone className="w-4 h-4" />} label="Phone">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9XXXX XXXXX"
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Team size">
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                          <option value="">Select range</option>
                          <option>1 – 10</option>
                          <option>11 – 50</option>
                          <option>51 – 200</option>
                          <option>201 – 500</option>
                          <option>500+</option>
                        </select>
                      </Field>
                      <Field label="Interested in">
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        >
                          <option>Sales Connect</option>
                          <option>Dealer Connect</option>
                          <option>Employee Connect</option>
                          <option>Partner Connect</option>
                          <option>Integrations</option>
                          <option>Full Platform</option>
                        </select>
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field icon={<Calendar className="w-4 h-4" />} label="Preferred date">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </Field>
                      <Field icon={<Clock className="w-4 h-4" />} label="Preferred time">
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                      </Field>
                    </div>

                    <Field label="Anything specific you want to see? (optional)">
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your use case..."
                        className="w-full px-4 py-3 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white rounded-2xl py-4 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition disabled:opacity-60"
                    >
                      {loading ? (
                        "Submitting..."
                      ) : (
                        <>
                          Book My Demo <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to be contacted by ProbizConnect
                      regarding your demo request.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, icon, children }) => (
  <label className="block">
    <span className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
      {icon}
      {label}
    </span>
    {children}
  </label>
);

export default BookDemo;
