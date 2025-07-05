
import { GoArrowUpRight } from "react-icons/go";

const faqs = [
  {
    question: "How fast can ProFast deliver my package?",
    answer:
      "In major cities, we deliver within 24 hours. Express delivery inside Dhaka is done within 4–6 hours.",
  },
  {
    question: "Do you offer real-time tracking?",
    answer:
      "Yes, all ProFast deliveries come with live tracking links that you and your customer can access anytime.",
  },
  {
    question: "Is there a maximum weight limit for parcels?",
    answer:
      "We accept parcels up to 30kg. For heavier logistics or bulk shipping, contact our corporate service.",
  },
  {
    question: "Can I schedule a pickup for the same day?",
    answer:
      "Absolutely. Just place a pickup request before 12 PM, and our rider will collect the parcel the same day.",
  },
  {
    question: "Do you support Cash on Delivery (COD)?",
    answer:
      "Yes, we support 100% secure cash on delivery in all districts of Bangladesh.",
  },
  {
    question: "What happens if my parcel is delayed?",
    answer:
      "Delays are rare. If they occur, you’ll be notified and compensated based on our refund policy.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-base-300 mb-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
        <p className="text-gray-600 mb-10 mx-auto">
          Enhance posture, mobility, and well-being effortlessly with ProFast Courier. Achieve proper alignment, reduce<br></br> pain, and strengthen your business logistics with ease!
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm text-gray-700">{faq.answer}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center">
        <button className="btn bg-lime-300 text-black rounded-xl px-6">
          See More FAQs
        </button>
        <button className="btn border border-lime-500 text-lime-500 bg-black rounded-2xl px-3">
          <GoArrowUpRight className="text-2xl"/>
        </button>
      </div>
    </section>
  );
};

export default FAQ;
