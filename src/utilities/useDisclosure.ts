import { useState } from "react";

export function useDisclosure() {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((prevState) => !prevState);

  const activate = () => setActive(true);
  const deActivate = () => setActive(false);

  return { active, setActive, toggle, activate, deActivate };
}
