export type TPositionSchema = {
  company: string;
  department: string;
  name: {
    name: string;
    id: string;
  };
  status: boolean;
  operatingNumber: number;
  description: string;
  rank: number;
  id: string;
};

export type TPosition = {
  id: string;
  name: string;
};
