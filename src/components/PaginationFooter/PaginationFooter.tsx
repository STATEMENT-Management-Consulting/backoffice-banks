import { PaginationIndices } from "./PaginationIndices";
import { PaginationElementsToShow } from "./PaginationElementsToShow";
import { Spinner } from "../Spinner/Spinner";

interface IPaginationFooter {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  changeElementsToShow: (elements: number) => void;
  numberOfPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalOfElements: number;
  showingElements: number;
  isFetching: boolean;
}

export function PaginationFooter({
  currentPage,
  changeCurrentPage,
  numberOfPages,
  hasNextPage,
  hasPreviousPage,
  totalOfElements,
  showingElements,
  changeElementsToShow,
  isFetching,
}: IPaginationFooter) {
  if (isFetching)
    return (
      <div className="stack-center p-10">
        <Spinner />
      </div>
    );

  return (
    <footer className="flex justify-between items-center w-full">
      <PaginationIndices
        currentPage={currentPage}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
        numberOfPages={numberOfPages}
        changePage={changeCurrentPage}
      />
      <PaginationElementsToShow
        currentPage={currentPage}
        changeElementsToShow={changeElementsToShow}
        showingElements={showingElements}
        totalOfElements={totalOfElements}
        changePage={changeCurrentPage}
      />
    </footer>
  );
}
