"use client";

import {
  FaHandsHelping,
  FaHome,
  FaTh,
  FaLightbulb,
  FaBookmark,
  FaLock,
  FaSearch,
  FaBookOpen,
  FaUserAlt,
} from "react-icons/fa";

export default function VerticalSidebar() {
  const topIcon = <FaHandsHelping />;
  const bottomIcon = <FaUserAlt />;
  const middleIcons = [
    <FaHome />,
    <FaTh />,
    <FaLightbulb />,
    <FaBookmark />,
    <FaLock />,
    <FaSearch />,
    <FaBookOpen />,
  ];

  return (
    <div className="w-16  bg-[#F9FBFC] flex flex-col justify-between items-center py-6">
      {/* Top icon */}
      <div className="bg-green-500 p-3 rounded-lg text-white text-xl shadow-md">
        {topIcon}
      </div>

      {/* Middle icons */}
      <div className="flex flex-col gap-5 items-center">
        {middleIcons.map((icon, index) => (
          <div
            key={index}
            className="bg-gray-100 text-gray-500 p-3 rounded-full hover:bg-green-100 hover:text-green-600 transition"
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Bottom icon */}
      <div className="bg-green-500 p-3 rounded-lg text-white text-xl shadow-md">
        {bottomIcon}
      </div>
    </div>
  );
}
