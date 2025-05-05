import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureUnavailableProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeatureUnavailablePopup: React.FC<FeatureUnavailableProps> = ({ isOpen, onClose }) => {
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
            className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-sm text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Feature Not Available</h2>
            <p className="text-gray-600 mb-6">
              This feature is not yet available. Please check back later!
            </p>
            <button
              onClick={onClose}
              className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition"
            >
              Okay
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureUnavailablePopup;
