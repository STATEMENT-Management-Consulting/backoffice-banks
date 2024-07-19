import { RefObject } from "react";
import { SearchedCollaborator } from "../SearchForCollaborator/SearchedCollaborator";

interface ISearchForUserResultsContainer {
  users?: Array<{ avatar: string; id: string; name: string; email: string }>;
  currentUser?: { avatar?: string; id: string; name: string; email: string };
  onSelectUser: (user: {
    avatar: string;
    id: string;
    name: string;
    email: string;
  }) => void;
  containerRef: RefObject<HTMLDivElement>;
}

export function SearchForUserResultsContainer({
  onSelectUser,
  users,
  currentUser,
}: ISearchForUserResultsContainer) {
  return (
    <div className="stack divide-y divide-border max-h-[200px] overflow-y-auto">
      {users?.map((user) => (
        <SearchedCollaborator
          key={user?.id}
          avatar={user?.avatar}
          name={user?.name}
          email={user?.email}
          selected={currentUser?.id === user?.id}
          onSelect={() => onSelectUser(user)}
        />
      ))}
    </div>
  );
}
