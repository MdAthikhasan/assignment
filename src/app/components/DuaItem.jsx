import React from "react";
import Toolbar from "./Toolbar";

function DuaItem({ dua, img, duaRefs }) {
  return (
    <div
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
      <p className="text-sm text-[var(--text-color)] font-medium">Reference:</p>
      <p className="text-sm text-gray-700">{dua.refference_en}</p>
      <Toolbar />
    </div>
  );
}

export default DuaItem;
