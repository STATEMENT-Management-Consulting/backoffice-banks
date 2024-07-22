import { differenceInDays } from "date-fns";

interface IDistance {
  firstDate: Date;
  secundDate: Date;
}

const convertToPositiveDistance = (distance: number) => {
  return distance > 0 ? distance : distance * -1;
};

export function calculateDistanceBtwDatesUnite({
  firstDate,
  secundDate,
}: IDistance) {
  return convertToPositiveDistance(differenceInDays(firstDate, secundDate));
}
