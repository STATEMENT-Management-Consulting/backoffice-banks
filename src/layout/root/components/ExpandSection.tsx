import { createContext, useContext, useState } from "react";

type ExpandJobStagesContextProps = {
  expand: boolean;
  toggleExpand: () => void;
};

const ExpandJobStagesContext = createContext<ExpandJobStagesContextProps>(
  {} as any
);

export default function ExpandSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expand, setExpand] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const contextValue: ExpandJobStagesContextProps = {
    expand,
    toggleExpand: toggleExpand,
  };

  return (
    <ExpandJobStagesContext.Provider value={contextValue}>
      {children}
    </ExpandJobStagesContext.Provider>
  );
}

export const useExpandSectionContext = () => useContext(ExpandJobStagesContext);
