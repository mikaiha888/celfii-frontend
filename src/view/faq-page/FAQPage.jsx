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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} id={`faq-${index}`} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-2xl text-gray-800 flex justify-between items-center mt-5 mb-5">
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </h2>
            </button>
            {openIndex === index && (
              <p className="text-lg text-gray-700 mt-2 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
