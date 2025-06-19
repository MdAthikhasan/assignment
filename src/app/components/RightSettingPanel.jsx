"use client";

import React from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import {
  MdOutlineDarkMode,
  MdOutlineLanguage,
  MdOutlineSettings,
} from "react-icons/md";
function RightSettingPanel({ showSettings }) {
  return (
    <div
      className={`${
        showSettings ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out md:static fixed top-0 right-0 bg-white h-full w-[260px] p-6 border-l z-40`}
    >
      <h2 className="text-lg font-semibold text-[var(--text-color)] mb-4">
        Settings
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <MdOutlineLanguage className="text-xl text-gray-600" />
          <p className="text-sm">Language Settings</p>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineSettings className="text-xl text-gray-600" />
          <p className="text-sm">General Settings</p>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineClipboardList className="text-xl text-gray-600" />
          <p className="text-sm">Font Settings</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MdOutlineDarkMode className="text-xl text-gray-600" />
            <p className="text-sm">Night Mode</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default RightSettingPanel;
