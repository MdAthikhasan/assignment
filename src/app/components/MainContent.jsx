"use client";
import { use, useRef } from "react";

import { PiDotsNineBold } from "react-icons/pi";
import img from "../../../images/allah 1 (Traced).png";
import Toolbar from "./Toolbar";
import Image from "next/image";

function MainContent({ duasPromise }) {
  const duas = use(duasPromise);

  const duaRefs = useRef({});
  return (
    <div className="flex-1 p-4  md:p-6 flex flex-col overflow-y-auto">
      <div className="flex justify-around lg:justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md text-sm bg-[var(--bg-gray)]"
        />
        <div className="flex justify-between items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <PiDotsNineBold className="text-2xl text-gray-600" />
        </div>
      </div>

      <div className="max-h-screen overflow-y-auto flex flex-col gap-4">
        {duas.length > 0 ? (
          duas.map((dua, idx) => (
            <div
              key={idx}
              ref={(el) => (duaRefs.current[dua.id] = el)}
              className="bg-[var(--bg-gray)] rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  className="text-[var(--text-color)]"
                  width={30}
                  height={30}
                  src={img}
                  alt="icon"
                />
                <p className="text-[var(--text-color)] font-semibold mb-1">
                  {dua.dua_name_en}
                </p>
              </div>
              <p className="text-[var(--text-size)] font-inter font-normal my-2">
                {dua.top_en}
              </p>
              <p className="text-sm text-[var(--text-color)] font-medium">
                Reference:
              </p>
              <p className="text-sm text-gray-700">{dua.refference_en}</p>
              <Toolbar />
            </div>
          ))
        ) : (
          <p className="text-gray-500">No Duas found.</p>
        )}
      </div>
    </div>
  );
}

export default MainContent;
