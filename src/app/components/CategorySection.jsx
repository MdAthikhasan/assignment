"use client";
import { BiSearch } from "react-icons/bi";

import Image from "next/image";
import { use, useRef, useState } from "react";
import img2 from "../../../images/Frame 1.png";
function CategorySection({
  categoryPromise,
  subCategoriesPromise,
  duasPromise,
}) {
  const categories = use(categoryPromise);
  const subCategories = use(subCategoriesPromise);
  const duas = use(duasPromise);
  const [inputValue, setInputValue] = useState("");
  const duaRefs = useRef({});
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const filteredCategories = categories.filter((cat) =>
    cat.cat_name_en.toLowerCase().includes(inputValue.toLowerCase())
  );
  const getSubCategoriesByCatId = (catId) => {
    return subCategories.filter((sub) => sub.cat_id === catId);
  };
  return (
    <div className="mb-4">
      <h2 className="bg-[var(--text-color)] text-white text-sm font-semibold px-4 py-2 rounded-t-md">
        Categories
      </h2>
      <div className="bg-white shadow p-2">
        <div className="flex items-center bg-gray-100 px-2 py-1 rounded mb-4">
          <BiSearch className="text-gray-500" />
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Search by Categories"
            className="bg-transparent w-full outline-none px-2 text-sm"
          />
        </div>
        <ul className="max-h-[500px] overflow-y-auto">
          {filteredCategories.map((cat) => (
            <li key={cat.id}>
              <div
                onClick={() =>
                  setSelectedCategoryId(
                    selectedCategoryId === cat.id ? null : cat.id
                  )
                }
                className={`w-full cursor-pointer text-left px-3 py-2 rounded-md mb-2 flex justify-between items-center ${
                  selectedCategoryId === cat.id
                    ? "bg-gray-200 text-[var(--text-color)] font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    className=""
                    width={40}
                    height={40}
                    src={img2}
                    alt="icon"
                  />
                  <div>
                    <p className="text-sm font-medium">{cat.cat_name_en}</p>
                    <p className="text-xs text-gray-500">
                      Subcategory: {cat.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black flex items-center justify-center">
                    {cat.no_of_dua}
                  </p>
                  <p className="text-[10px]">Dua</p>
                </div>
              </div>

              {selectedCategoryId === cat.id && (
                <ul className="ml-8 border-l-2 border-dotted border-[var(--text-color)] pl-4 text-sm text-gray-700">
                  {getSubCategoriesByCatId(cat.id).map((sub, idx) => (
                    <li
                      key={idx}
                      className="mb-3 cursor-pointer"
                      onClick={() => {
                        const matchedDua = duas.find(
                          (d) => d.subcat_id === sub.id
                        );
                        if (matchedDua && duaRefs.current[matchedDua.id]) {
                          duaRefs.current[matchedDua.id].scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }
                      }}
                    >
                      {sub.subcat_name_en}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategorySection;
