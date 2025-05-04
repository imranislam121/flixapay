// WaitlistPopup.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistPopup: React.FC<WaitlistPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    onClose(); // close after submission
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Join Our Waitlist</h2>
            <p className="text-sm text-center mb-6">
              Be the first to know when we launch. Enter your email below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-purple-700 font-semibold py-2 rounded-md hover:bg-gray-100 transition"
              >
                Join Waitlist
              </button>
            </form>
            <button
              onClick={onClose}
              className="mt-6 text-sm underline text-center w-full hover:text-gray-200"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistPopup;
