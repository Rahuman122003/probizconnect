import React from "react";
import { useNavigate } from "react-router-dom";

import peoplePlus from "@/assets/brochures/people-plus.jpg";
import recruit from "@/assets/brochures/recruit.jpg";
import people from "@/assets/brochures/people.jpg";
import payroll from "@/assets/brochures/payroll.jpg";
import expense from "@/assets/brochures/expense.jpg";

const brochures = [
  {
    title: "Zoho People Plus",
    desc: "A complete end-to-end HR platform.",
    image: peoplePlus,
    pdf: "/brochures/people-plus.pdf",
  },
  {
    title: "Zoho Recruit",
    desc: "Powerful ATS and hiring solution.",
    image: recruit,
    pdf: "/brochures/recruit.pdf",
  },
  {
    title: "Zoho People",
    desc: "Comprehensive HRMS solution.",
    image: people,
    pdf: "/brochures/people.pdf",
  },
  {
    title: "Zoho Payroll",
    desc: "Automated payroll solution.",
    image: payroll,
    pdf: "/brochures/payroll.pdf",
  },
  {
    title: "Zoho Expense",
    desc: "Simplified expense management.",
    image: expense,
    pdf: "/brochures/expense.pdf",
  },
];

const Brochures = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Product Brochures
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {brochures.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-xl h-64 object-cover"
            />

            <p className="text-xs mt-3 text-muted-foreground">
              E-Brochure
            </p>

            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {item.desc}
            </p>

            <button
              onClick={() =>
                navigate(`/brochures/view?file=${item.pdf}`)
              }
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2"
            >
              Download Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brochures;