"use client";

import React, { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "917004518406";
  const message = encodeURIComponent(
    "Hello! I'd like to know more about EduVoyagers' experiential learning programs."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <span
        className={`absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-forest-dark text-sand-light text-xs font-medium rounded-xs whitespace-nowrap shadow-lg transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        Chat with us
        <span className="absolute top-full right-4 -mt-px border-4 border-transparent border-t-forest-dark" />
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BD5A] hover:shadow-xl hover:scale-105 transition-all duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.128 6.748 3.046 9.388L1.054 31.37l6.18-1.962A15.913 15.913 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.326 22.602c-.39 1.098-1.928 2.01-3.164 2.276-.846.18-1.95.322-5.668-1.218-4.758-1.97-7.818-6.794-8.054-7.108-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.198-3.418 1.624-3.886.39-.43.926-.608 1.234-.608.314 0 .548.004.786.014.254.012.594-.096.928.708.352.844 1.194 2.91 1.3 3.122.106.212.178.462.036.744-.142.286-.212.462-.426.712-.212.248-.448.554-.638.744-.212.212-.434.442-.186.868.248.426 1.104 1.82 2.37 2.948 1.632 1.452 3.006 1.902 3.432 2.114.426.212.674.178.922-.106.248-.286 1.064-1.234 1.348-1.66.284-.426.568-.354.958-.212.39.142 2.474 1.168 2.9 1.38.426.212.71.32.816.496.106.178.106 1.024-.284 2.12z" />
        </svg>
      </span>
    </a>
  );
}
