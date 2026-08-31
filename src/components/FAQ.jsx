import { useState } from "react";
import faqs from "../faqs";
import FAQItem from "./FAQItem";

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  function handleToggle(id) {
    setActiveId((currentId) =>
      currentId === id ? null : id
    );
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-purple-50">

      {/* Responsive background */}
      <div
        className="
          absolute inset-x-0 top-0
          h-52 overflow-hidden
          bg-[url('/assets/images/mobile.png')]
          bg-cover bg-center
          md:h-74
          md:bg-[url('/assets/images/desktop.png')]
        "
      />

      {/* FAQ card */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-16 sm:max-w-lg sm:py-24">

        <div className="w-full rounded-2xl bg-white p-6 shadow-xl sm:p-9">

          {/* Header */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <img
              src="/assets/images/icon-star.svg"
              alt=""
              width="24"
              height="24"
            />

            <h1 className="text-2xl font-extrabold text-gray-950 sm:text-3xl">
              FAQs
            </h1>
          </div>

          {/* FAQ list */}
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeId === faq.id}
                onToggle={() => handleToggle(faq.id)}
                isLast={index === faqs.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;