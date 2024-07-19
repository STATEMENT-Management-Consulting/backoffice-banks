export interface ISubsidies {
  id?: string;
  name: string;
  country: string;
}

export interface ISubsideApiResponse {
  name: string;
  country: string;
  commomSubsidy: string;
  value: number;
  tax: boolean;
  taxSecurity: boolean;
  limit: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ISubsidiesInputProps {
  onChange?: (value: { id: string; name: string }) => void;
  value?: string;
  toRemove?: string;
}
