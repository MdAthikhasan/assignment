const DuaSkeleton = () => {
  return (
    <div className="bg-[var(--bg-gray)] rounded-lg p-4 shadow-sm animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-[30px] h-[30px] bg-gray-300 rounded-full" />
        <div className="h-4 bg-gray-300 rounded w-1/3" />
      </div>
      <div className="h-4 bg-gray-300 rounded my-4 w-5/6" />
      <div className="h-4 bg-gray-300 rounded mb-1 w-1/4" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
    </div>
  );
};

export default DuaSkeleton;
