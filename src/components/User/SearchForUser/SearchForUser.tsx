import { BaseInput } from "@/components/Inputs/BaseInput/BaseInput";
import { useComponentsDictionary } from "locales/t/components";
import { useApiSearchForUser } from "./api/useApiSearchForUser";
import { SearchIcon } from "@/assets/feather-icons/SearchIcon";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useRef } from "react";
import { SearchForUserResultsContainer } from "./SearchForUserResultsContainer";
import { Spinner } from "@/components/Spinner/Spinner";
import { SelectedUser } from "./SelectedUser";

interface ISearchForUser {
  user?: { avatar?: string; id: string; name: string; email: string };
  onSelectUser?: (user: {
    avatar: string;
    id: string;
    name: string;
    email: string;
  }) => void;
  error?: string;
  disabled?: boolean;
  labelCollaborator?: boolean;
  required?: boolean;
  label?: string;
}

export function SearchForUser({
  user,
  onSelectUser,
  error,
  disabled,
  labelCollaborator = false,
  required,
}: ISearchForUser) {
  const componentsDictionary = useComponentsDictionary();
  const { changeValue, isGettingUsers, users, value } = useApiSearchForUser();

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { isOpen, onOpen: open, onClose: close } = useOpen();

  const handleOpen = () => {
    open();
    inputRef?.current?.focus();
  };

  const handleOnSelect = (user: {
    avatar: string;
    id: string;
    name: string;
    email: string;
  }) => {
    onSelectUser?.(user);
    close();
  };

  return (
    <div
      className="stack relative rounded-[0.625rem] border-gray-shade11 transition-all"
      ref={disabled ? undefined : containerRef}
    >
      {}
      <label className="flex mb-4 font-medium text-dark-blue-shade1 self-start gap-x-2 text-body-md">
        {labelCollaborator
          ? componentsDictionary("SearchForCollaborator.label")
          : ""}
        {required && (
          <span className="text-red-shade6 font-bold text-body-xl"> *</span>
        )}
      </label>
      {!isOpen && user ? (
        <SelectedUser
          avatar={user?.avatar}
          name={user?.name}
          email={user?.email}
          disabled={disabled}
          onClick={handleOpen}
          id={user?.id}
        />
      ) : (
        <BaseInput
          placeholder={componentsDictionary("SearchUsers.placeholder")}
          onChange={changeValue}
          ref={inputRef}
          value={value}
          rightElement={
            isGettingUsers ? <Spinner className="!w-4 !h-4" /> : SearchIcon
          }
          error={error}
          onClick={isOpen ? undefined : open}
        />
      )}
      {isOpen && value && (
        <SearchForUserResultsContainer
          containerRef={containerRef}
          currentUser={user}
          onSelectUser={handleOnSelect}
          users={users}
        />
      )}
    </div>
  );
}
