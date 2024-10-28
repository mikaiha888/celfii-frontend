import { useState } from "react";
import { ChevronFirst, ChevronLeft, ChevronRight, ChevronLast } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const [inputPage, setInputPage] = useState(currentPage);

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

  const handlePageChange = (e) => {
    const page = Number(e.target.value);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setInputPage(page);
    }
  };

  const goToPage = (e) => {
    if (e.key === "Enter") {
      onPageChange(inputPage);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-7">
      <button onClick={handleFirst} disabled={currentPage === 1}>
        <ChevronFirst className={`w-5 h-5 ${currentPage === 1 ? "text-gray-400" : "text-black"}`} />
      </button>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        <ChevronLeft className={`w-5 h-5 ${currentPage === 1 ? "text-gray-400" : "text-black"}`} />
      </button>

      <div className="flex items-center space-x-2">
        <span>Página</span>
        <input
          type="number"
          value={inputPage}
          onChange={handlePageChange}
          onKeyDown={goToPage}
          className="w-12 text-center border border-gray-300 rounded"
        />
        <span>de {totalPages}</span>
      </div>

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        <ChevronRight
          className={`w-5 h-5 ${currentPage === totalPages ? "text-gray-400" : "text-black"}`}
        />
      </button>
      <button onClick={handleLast} disabled={currentPage === totalPages}>
        <ChevronLast
          className={`w-5 h-5 ${currentPage === totalPages ? "text-gray-400" : "text-black"}`}
        />
      </button>
    </div>
  );
};

export default Pagination;
