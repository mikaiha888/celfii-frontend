import { ChevronFirst, ChevronLeft, ChevronRight, ChevronLast } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirst = () => {
    if (currentPage > 1) onPageChange(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handleLast = () => {
    if (currentPage < totalPages) onPageChange(totalPages);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      if (currentPage <= halfVisible) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + halfVisible >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfVisible;
        endPage = currentPage + halfVisible;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center items-center space-x-4 mt-7">
      <button
        onClick={handleFirst}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        <ChevronFirst className="w-5 h-5" />
      </button>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md transition-colors ${
            page === currentPage
              ? "bg-red-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black"
          }`}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages - 2 && <span className="text-gray-500">...</span>}
      {currentPage < totalPages - 1 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-black"
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <button
        onClick={handleLast}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        <ChevronLast className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
