import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, onPrevPage, onNextPage }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };


  return (
    <ul className="flex justify-center my-8 -space-x-px text-sm">
      <li>
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-3 h-8 leading-tight text-secondary bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-primary"
        >
          Previous
        </button>
      </li>
      {generatePageNumbers().map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
              currentPage === page ? 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'hover:bg-gray-100 hover:text-primary bg-white'
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-3 h-8 leading-tight text-secondary bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-primary"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
