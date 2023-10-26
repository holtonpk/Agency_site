import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. Please note that we do not offer refunds for partial months.",
  },
  {
    question: "Is my data safe and secure?",
    answer:
      "Yes, we take data security seriously. Our servers are hosted in a world-class data center that is protected by 24-hour surveillance, and our product is built with strict security features. All plan include SSL encryption to keep your data safe.",
  },

  {
    question: "What happens if I want to upgrade my plan?",
    answer:
      "You can upgrade your plan at any time. The new pricing will take effect on your next billing cycle.",
  },

  {
    question: "Do you have a free trial?",
    answer:
      "Yes, we offer a free trial for new users. Sign up and get a full access to all features for 14 days.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="container flex flex-col items-center gap-6 mt-10">
      <h1 className="text-6xl font-bold">FAQs</h1>
      <Accordion type="single" collapsible className="w-[60%]">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={i.toLocaleString()}
            className="border-b-2 border-primary"
          >
            <AccordionTrigger className="font-bold text-2xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
