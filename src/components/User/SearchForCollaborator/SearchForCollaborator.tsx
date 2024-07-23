import { ComponentProps, useRef } from "react";
import { BaseInput } from "@/components/Inputs/BaseInput/BaseInput";
import { SearchForCollaboratorContainer } from "./SearchForCollaboratorContainer";
import { useComponentsDictionary } from "locales/t/components";
import { SearchIcon } from "@/assets/feather-icons/SearchIcon";
import { Spinner } from "@/components/Spinner/Spinner";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useApiSearchForCollaborators } from "./api/useApiSearchForCollaborators";
import { SelectedUser } from "../SearchForUser/SelectedUser";
import { CollaboratorsModule } from "@/@types/Collaborators.types";

interface ISearchForCollaborator extends ComponentProps<typeof BaseInput> {
  collaborator?: CollaboratorsModule.Collaborator;
  onChangeCollaborator: (
    collaborator?: CollaboratorsModule.Collaborator
  ) => void;
  collaboratorsToFilter?: string[];
}

export function SearchForCollaborator({
  collaborator,
  onChangeCollaborator,
  required,
  label,
  collaboratorsToFilter,
  ...rest
}: ISearchForCollaborator) {
  const componentsDictionary = useComponentsDictionary();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen: open, onClose: close } = useOpen();
  const {
    changeValue,
    collaborators: searchedCollaborators,
    value,
    isGettingCollaborators,
  } = useApiSearchForCollaborators();

  const collaborators = !collaboratorsToFilter
    ? searchedCollaborators
    : searchedCollaborators?.filter(
        (collaborator) => !collaboratorsToFilter.includes(collaborator?.id)
      );

  const handleSelectSearchedCollaborator = (
    collaborator?: CollaboratorsModule.Collaborator
  ) => {
    changeValue("");
    onChangeCollaborator(collaborator);
    close();
  };

  const onBlur = () => {
    if (!value) close();
  };

  return (
    <div ref={containerRef} className="stack relative">
      {!isOpen && collaborator ? (
        <div className="stack gap-y-[0.68rem]">
          <label className="text-body-md font-medium text-dark-blue-shade1 self-start">
            {label ?? componentsDictionary("SearchForCollaborator.label")}
            {required && (
              <span className="text-red-shade6 font-bold text-body-xl"> *</span>
            )}
          </label>
          <SelectedUser
            {...(collaborator?.user ? collaborator?.user : collaborator)}
            onClick={open}
            position={collaborator?.position?.name}
          />
        </div>
      ) : (
        <BaseInput
          label={label ?? componentsDictionary("SearchForCollaborator.label")}
          placeholder={componentsDictionary(
            "SearchForCollaborator.placeholder"
          )}
          {...rest}
          autoFocus
          required={required}
          onBlur={onBlur}
          onChange={changeValue}
          onClick={isOpen ? undefined : open}
          rightElement={
            isGettingCollaborators ? (
              <Spinner className="w-[1rem] h-[1rem]" />
            ) : (
              SearchIcon
            )
          }
        />
      )}
      {isOpen && !!value && collaborators !== undefined && (
        <SearchForCollaboratorContainer
          containerRef={containerRef}
          close={close}
          onChangeCollaborator={handleSelectSearchedCollaborator}
          search={value}
          collaborator={collaborator}
          isGettingCollaborators={isGettingCollaborators}
          searchedCollaborators={collaborators}
          notFoundLabel={componentsDictionary(
            "SearchForCollaborator.not-found"
          )}
        />
      )}
    </div>
  );
}

SearchForCollaborator.displayName = "SearchForCollaborator";
