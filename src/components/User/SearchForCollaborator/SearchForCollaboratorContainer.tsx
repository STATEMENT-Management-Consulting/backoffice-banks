import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { RefObject } from "react";
import { SearchedCollaborator } from "./SearchedCollaborator";
import { CollaboratorsModule } from "@/@types/Collaborators.types";

interface ISearchForCollaboratorContainer {
  search: string;
  collaborator?: CollaboratorsModule.Collaborator;
  searchedCollaborators?: CollaboratorsModule.Collaborator[];
  onChangeCollaborator: (
    collaborator?: CollaboratorsModule.Collaborator
  ) => void;
  containerRef: RefObject<HTMLDivElement>;
  close: () => void;
  notFoundLabel: string;
  isGettingCollaborators?: boolean;
}

export function SearchForCollaboratorContainer({
  collaborator,
  onChangeCollaborator,
  searchedCollaborators,
  containerRef,
  close,
  notFoundLabel,
  isGettingCollaborators,
}: ISearchForCollaboratorContainer) {
  useOutsideClick(containerRef, close);

  return (
    <div className="relative">
      <div className="mt-5 z-10 inset-x-0 bg-white shadow-md rounded-[0.75rem] stack gap-2 divide-y divide-border">
        {(searchedCollaborators?.length ?? 0) > 0 ? (
          <div className="stack gap-y-2 max-h-[200px] overflow-y-auto">
            {searchedCollaborators?.map((collab) => (
              <SearchedCollaborator
                key={collab?.id}
                selected={collaborator?.id === collab?.id}
                onSelect={() => onChangeCollaborator(collab)}
                avatar={collab?.user?.avatar}
                name={collab?.user?.name}
                email={collab?.user?.email as string}
                position={collab?.position}
              />
            ))}
          </div>
        ) : isGettingCollaborators ? null : searchedCollaborators !==
          undefined ? (
          <div className="p-5">
            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: notFoundLabel }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
