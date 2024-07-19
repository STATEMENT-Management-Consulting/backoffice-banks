import { ChevronLeftIcon } from "@/assets/feather-icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/assets/feather-icons/ChevronRightIcon";
import { useState } from "react";

interface IPaginationIndices {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  numberOfPages: number;
  currentPage: number;
  changePage: (page: number) => void;
}

export function PaginationIndices({
  currentPage,
  hasNextPage,
  hasPreviousPage,
  numberOfPages,
  changePage,
}: IPaginationIndices) {
  const [direction, setDirection] = useState<"right" | "left">("right");
  const pages = Array.from({ length: numberOfPages - 2 }, (_, idx) => idx + 2);

  const leftPages = pages.splice(
    currentPage < 4
      ? 0
      : currentPage + 3 >= numberOfPages
      ? direction === "left" && currentPage + 2 < numberOfPages
        ? currentPage - 3
        : numberOfPages - 5
      : currentPage - 3,
    currentPage < 4 ? currentPage + 1 : 3
  );

  const handlePrevious = () => {
    changePage(currentPage - 1);
  };

  const handleNext = () => {
    changePage(currentPage + 1);
  };

  const handleOnChange = (page: number) => {
    if (page < currentPage) setDirection("left");
    else if (page > currentPage) setDirection("right");
    changePage(page);
  };

  return (
    <div className="flex gap-x-6 items-center">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={handlePrevious}
        className={`min-h-[40px] min-w-[40px] button-outline p-2 [&>svg]:w-4 [&>svg]:h-4 ${
          hasPreviousPage ? "[&>svg_*]:fill-dark-blue-shade2" : ""
        }`}
      >
        {ChevronLeftIcon}
      </button>
      <div className="flex items-end">
        <button
          type="button"
          className={`min-h-[40px] min-w-[40px] px-[0.81rem] py-2 text-body-sm font-semibold ${
            currentPage === 1 ? "button-secondary " : undefined
          }`}
          onClick={() => handleOnChange(1)}
        >
          1
        </button>
        {currentPage > 3 && (
          <div className="flex items-end">
            <div className="text-dark-blue-shade2 !text-body-xl font-bold pb-3 px-0">
              ...
            </div>
          </div>
        )}
        {leftPages.map((page) => (
          <button
            type="button"
            key={page}
            className={`min-h-[40px] min-w-[40px] px-[0.81rem] py-2 text-body-sm font-semibold ${
              currentPage === page ? "button-secondary " : ""
            }`}
            onClick={() => handleOnChange(page)}
          >
            {page}
          </button>
        ))}
        {numberOfPages > 3 &&
          (currentPage < numberOfPages - 3 ||
            currentPage - 1 < numberOfPages - 3) && (
            <div className="flex items-end">
              <div className="text-dark-blue-shade2 !text-body-xl font-bold pb-3 px-0">
                ...
              </div>
            </div>
          )}
        {numberOfPages > 1 && (
          <button
            type="button"
            className={`min-h-[40px] min-w-[40px] px-[0.81rem] py-2 text-body-sm font-semibold ${
              currentPage === numberOfPages ? "button-secondary " : ""
            }`}
            onClick={() => handleOnChange(numberOfPages)}
          >
            {numberOfPages}
          </button>
        )}
      </div>
      <button
        type="button"
        disabled={!(currentPage < numberOfPages)}
        onClick={handleNext}
        className={`min-h-[40px] min-w-[40px] button-outline p-2 [&>svg]:w-4 [&>svg]:h-4 ${
          hasNextPage ? "[&>svg_*]:fill-dark-blue-shade2" : ""
        }`}
      >
        {ChevronRightIcon}
      </button>
    </div>
  );
}
