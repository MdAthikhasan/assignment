"use client";

import {
  FaRegCopy,
  FaRegBookmark,
  FaRegLightbulb,
  FaShareAlt,
  FaRegClock,
} from "react-icons/fa";

const icons = [
  FaRegCopy,
  FaRegBookmark,
  FaRegLightbulb,
  FaShareAlt,
  FaRegClock,
];

export default function Toolbar() {
  return (
    <div className="flex justify-end space-x-4 p-2 border-t border-gray-200">
      {icons.map((Icon, index) => (
        <button
          key={index}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}
