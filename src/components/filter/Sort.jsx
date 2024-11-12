const Sort = ({ handleApply, filters }) => {
  const sortOptions = [
    { value: "most popular", label: "Más popular" },
    { value: "highest price", label: "Mayor precio" },
    { value: "lowest price", label: "Menor precio" },
    { value: "newest", label: "Más reciente" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {sortOptions.map((option) => (
        <div key={option.value} className="relative">
          <button
            onClick={() => handleApply(option.value)}
            className={`p-2 rounded-md text-left transition-colors duration-200 ${
              filters.sort === option.value
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            } w-full flex justify-between items-center`}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sort;
