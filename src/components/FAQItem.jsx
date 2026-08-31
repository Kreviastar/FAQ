import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  isLast,
}) {
  const answerRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(
    () => {
      const answerElement = answerRef.current;
      const iconElement = iconRef.current;

      if (!answerElement) return;

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      if (isOpen) {
        timeline
          .to(answerElement, {
            height: "auto",
            opacity: 1,
            duration: 0.35,
          })
          .to(
            iconElement,
            {
              rotation: 180,
              duration: 0.25,
              ease: "power2.out",
            },
            "<"
          );
      } else {
        timeline
          .to(answerElement, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          })
          .to(
            iconElement,
            {
              rotation: 0,
              duration: 0.25,
              ease: "power2.out",
            },
            "<"
          );
      }
    },
    {
      dependencies: [isOpen],
      scope: answerRef,
    }
  );

  return (
    <div
      className={`
        ${isLast ? "" : "border-b border-gray-200"}
        py-4 sm:py-5
      `}
    >
      {/* Question */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <p className="text-sm font-bold leading-snug text-gray-950 sm:text-base">
          {question}
        </p>

        {/* Icon */}
        <span
          ref={iconRef}
          className="
            flex h-6 w-6 shrink-0
            items-center justify-center
            rounded-full
            bg-purple-600
            text-white
            sm:h-7 sm:w-7
          "
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <rect
              x="5"
              y="0"
              width="2"
              height="12"
              rx="1"
              fill="currentColor"
            />

            <rect
              x="0"
              y="5"
              width="12"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>

      {/* Animated answer */}
      <div
        ref={answerRef}
        className="h-0 overflow-hidden opacity-0"
      >
        <p className="mt-3 pr-8 text-sm leading-relaxed text-gray-500 sm:pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FAQItem;