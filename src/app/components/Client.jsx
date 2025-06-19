"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import RightSettingPanel from "./RightSettingPanel";

export default function Client({ Category, MainArea }) {
  // const [categories, setCategories] = useState([]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     try {
  //       const [duasRes, catRes, subCatRes] = await Promise.all([
  //         fetch("http://localhost:3000/api/duas"),
  //         fetch("http://localhost:3000/api/category"),
  //         fetch("http://localhost:3000/api/sub_category"),
  //       ]);
  //       const [duasData, categoriesData, subCategoriesData] = await Promise.all(
  //         [duasRes.json(), catRes.json(), subCatRes.json()]
  //       );
  //       setDuas(duasData);
  //       setCategories(categoriesData);
  //       setSubCategories(subCategoriesData);
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   };

  //   fetchAllData();
  // }, []);

  // const filteredCategories = categories.filter((cat) =>
  //   cat.cat_name_en.toLowerCase().includes(inputValue.toLowerCase())
  // );

  return (
    <div className="max-w-[1920px] h-screen mx-auto font-[var(--font-inter)] flex relative overflow-hidden">
      {/* Left toggle icon */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden text-xl bg-white p-2 rounded shadow"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <BiMenu />
      </button>

      {/* Right settings toggle icon */}
      <button
        className="absolute top-4 right-4 z-50 md:hidden text-xl bg-white p-2 rounded shadow"
        onClick={() => setShowSettings(!showSettings)}
      >
        <MdOutlineSettings />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform  md:static fixed z-40 bg-white h-full w-full md:w-1/4 p-4 flex flex-col`}
      >
        <div className="flex items-center gap-2 mb-6">
          <FaHandsHelping className="text-[var(--text-color)] text-2xl" />
          <h1 className="text-xl font-semibold text-[var(--text-color)]">
            Dua Page
          </h1>
        </div>

        {/* Category Search and List */}
        {Category}
      </div>

      {/* Main Content */}
      {MainArea}
      {/* Right Settings Panel */}
      <RightSettingPanel showSettings={showSettings} />
    </div>
  );
}
