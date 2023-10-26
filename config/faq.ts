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
