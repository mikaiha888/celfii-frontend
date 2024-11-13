import { ChevronFirst, ChevronLeft, ChevronRight, ChevronLast } from "lucide-react";

const PaginationButton = ({ disabled, onClick, Icon, ariaLabel }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
      disabled ? "bg-gray-200 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"
    }`}
    aria-label={ariaLabel}
  >
    <Icon className="w-5 h-5" />
  </button>
);

const Pagination = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 5 }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      startPage = Math.max(1, currentPage - halfVisible);
      endPage = Math.min(totalPages, currentPage + halfVisible);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center justify-center space-x-4 mt-7">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && onPageChange(1)}
        Icon={ChevronFirst}
        ariaLabel="Ir a la primera página"
      />

      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        Icon={ChevronLeft}
        ariaLabel="Ir a la página anterior"
      />

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md transition-colors ${
            page === currentPage
              ? "bg-red-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-black"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages - 2 && <span className="text-gray-500">...</span>}

      {currentPage < totalPages - 1 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 text-black bg-gray-200 rounded-md hover:bg-gray-300"
          aria-label={`Ir a la última página (${totalPages})`}
        >
          {totalPages}
        </button>
      )}

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        Icon={ChevronRight}
        ariaLabel="Ir a la página siguiente"
      />

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && onPageChange(totalPages)}
        Icon={ChevronLast}
        ariaLabel="Ir a la última página"
      />
    </div>
  );
};

export default Pagination;
