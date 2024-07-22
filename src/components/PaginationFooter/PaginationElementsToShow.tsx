import { useComponentsDictionary } from "locales/t/components";
import { SelectInput } from "../Inputs/SelectInput/SelectInput";

interface IPaginationElementsToShow {
  totalOfElements: number;
  currentPage: number;
  showingElements: number;
  changeElementsToShow: (elements: number) => void;
  changePage: (page: number) => void;
}

export function PaginationElementsToShow({
  changeElementsToShow,
  totalOfElements,
  showingElements,
  currentPage,
  changePage,
}: IPaginationElementsToShow) {
  const componentsDictionary = useComponentsDictionary();

  const elements = Array.from({ length: totalOfElements % 16 }, (_, idx) => ({
    id: `${idx + 1}`,
    name: componentsDictionary("PaginationFooter.show", {
      number: `${idx + 1}`,
    }),
  })).filter((_, idx) => idx % 2 === 0);

  const handleElementsToShow = (value: number) => {
    const newNumberOfPages = Math.ceil(totalOfElements / value);
    if (value > showingElements && currentPage >= newNumberOfPages) {
      changePage(newNumberOfPages);
      changeElementsToShow(value);
    } else {
      changeElementsToShow(value);
    }
  };

  return (
    <div className="flex gap-x-6 items-center">
      <p className="text-body-sm text-gray-shade8">
        {componentsDictionary("PaginationFooter.showing-elements", {
          showing: `${showingElements % totalOfElements}`,
          total: `${totalOfElements}`,
        })}
      </p>
      <div className="">
        <SelectInput
          options={elements}
          wrapperClassName="max-w-[9rem]"
          className="h-8 !rounded-lg text-body-md"
          value={`${showingElements}`}
          placeholder={componentsDictionary("PaginationFooter.show", {
            number: `${showingElements}`,
          })}
          onChange={(value) => handleElementsToShow(Number(value))}
          placement="top"
        />
      </div>
    </div>
  );
}
