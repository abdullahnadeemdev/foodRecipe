import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
  // We define the modal content here
  const modalContent = (
    <div
      // 1. fixed inset-0 ensures it covers the WHOLE screen, not just the navbar
      // 2. z-[999] ensures it is above everything else
      className="fixed inset-0 z-999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        // 3. Stop propagation prevents the modal from closing when clicking inside the form
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">{children}</div>
      </div>
    </div>
  );

  // 4. This teleports the modal to the <body> tag
  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
