import { useState } from "react";

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

export const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];
  const [pageNumberLimit, setPageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event: any) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const renderPageNumber = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number.toString()}
          onClick={handleClick}
          className={`h-9 p-1 border-2 border-solid border-blue-300 cursor-pointer ${
            currentPage === number ? "bg-blue-300" : ""
          } `}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}>&hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevBtn}>&hellip;</li>;
  }

  return (
    <>
      <ul className="flex">
        <li>
          <button
            onClick={handlePrevBtn}
            className={
              "p-1 border-2 border-solid border-blue-300 cursor-pointer rounded-l-xl"
            }
            disabled={currentPage == pageNumbers[0] ? true : false}
          >
            prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumber}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextBtn}
            className={
              "p-1 border-2 border-solid border-blue-300 cursor-pointer rounded-r-xl"
            }
            disabled={
              currentPage == pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            next
          </button>
        </li>
      </ul>
    </>
  );
};
