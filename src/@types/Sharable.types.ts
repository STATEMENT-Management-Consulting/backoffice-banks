import { APIResponse } from "./api.types";

export declare module SharableTypes {
  type Location = {
    addressOne?: string;
    description?: string;
    code?: string;
    city?: string;
    country?: string;
    latitude?: string;
    longitude?: string;
  };

  namespace Industry {
    type Type = {
      name: string;
      id: string;
      _id: string;
    };

    type GetIndustriesResponse = APIResponse<{ industries: Type[] }>;
  }
}
