import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="bg-white rounded-2xl shadow-md px-6 py-5 cursor-pointer transition-all"
            onClick={() => setOpen(!open)}
        >
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">{question}</h3>

                {/* Arrow */}
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-700"
                >
                    ▼
                </motion.span>
            </div>

            {/* CONTENT */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQAccordion() {
    const faq = [
        {
            question: "What makes Demaze different from other development companies?",
            answer:
                "We’re an AI-first technology partner, not just a development service provider. Unlike traditional companies that focus on coding, we specialize in intelligent solutions that leverage AI, machine learning, and automation. We work as an extension of your team, focusing on long-term partnerships and measurable business outcomes."
        },
        {
            question: "How long does it typically take to develop a custom solution?",
            answer:
                "Development timelines vary based on project scope but typically range from a few weeks to several months."
        },
        {
            question: "Do you work with startups or only established enterprises?",
            answer:
                "We work with both! Whether you're an early-stage startup or a large enterprise, we tailor solutions to your needs."
        },
        {
            question: "What ongoing support do you provide after project completion?",
            answer:
                "We provide continuous support, maintenance, performance monitoring, and feature enhancements."
        },
        {
            question: "How do you ensure the security and confidentiality of our project?",
            answer:
                "We follow industry-standard security protocols, NDA agreements, encryption, and strict data handling policies."
        }
    ];

    return (
        <div className="w-full items-center justify-center py-20">
            <h1 className="text-center text-4xl font-bold mb-12">
                Questions? Answers!
            </h1>
            <div className="max-w-3xl mx-auto space-y-6 mt-10">
                {faq.map((item, idx) => (
                    <FAQItem key={idx} {...item} />
                ))}
            </div>
        </div>
    );
}
