export const getFirstAndLastName = (fullName: string): string => {
  const words = fullName?.trim().split(" ");
  const firstName = words?.shift();
  const lastName = words?.pop();

  return `${firstName} ${lastName ?? ""}`;
};

export const getAcronym = (fullName: string): string => {
  const charOfFirstName = fullName[0].toUpperCase();
  const charOfLastName = getLastName(fullName)[0]?.toUpperCase();

  const acronym = `${charOfFirstName}${charOfLastName ?? ""}`;

  return acronym;
};

export const getFirstName = (fullName: string): string => {
  const [firstName] = getFirstAndLastName(fullName).split(" ");

  return firstName ?? "";
};

export const getLastName = (fullName: string): string => {
  const [, lastName] = getFirstAndLastName(fullName).split(" ");

  return lastName ?? "";
};
