import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faqs } from "./faqs";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { faqId } = useParams();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const index = faqId ? Number(faqId) : null;

    if (index !== null && !isNaN(index) && index < faqs.length) {
      setOpenIndex(index);

      setTimeout(() => {
        const element = document.getElementById(`faq-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [faqId]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} id={`faq-${index}`} className="border-b border-gray-200 pb-4">
            <button
              className="w-full flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl text-gray-800 font-medium">{faq.question}</h2>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-red-500" : "text-gray-500"
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-700 text-base mt-4 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
