import { BiSearch } from "react-icons/bi";

export default function CategoriesLoading() {
  return (
    <div className="mb-4 animate-pulse">
      <h2 className="bg-[var(--text-color)] text-white text-sm font-semibold px-4 py-2 rounded-t-md">
        Categories
      </h2>
      <div className="bg-white shadow p-2">
        {/* Search Bar Skeleton */}
        <div className="flex items-center bg-gray-100 px-2 py-1 rounded mb-4">
          <BiSearch className="text-gray-400" />
          <div className="bg-gray-200 rounded w-full h-5 ml-2" />
        </div>

        {/* Category Items Skeleton */}
        <ul className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <div className="w-full text-left px-3 py-2 rounded-md flex justify-between items-center bg-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded" />
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-32 mb-1" />
                    <div className="h-3 bg-gray-200 rounded w-24" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="h-4 bg-gray-300 rounded w-8 mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-6 mx-auto" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
