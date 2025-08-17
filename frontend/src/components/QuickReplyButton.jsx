import React from "react";

export default function QuickReplyButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-full text-sm"
    >
      {label}
    </button>
  );
}
