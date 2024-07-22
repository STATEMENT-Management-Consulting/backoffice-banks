import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Response {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  timezone: string;
}

const queryFn = async () => {
  const response = await axios.get<Response>(
    `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_INFO_API_KEY}`
  );
  return response.data;
};

export const useGetUsersLocation = () => {
  return useQuery({
    queryKey: ["users", "me", "location"],
    queryFn,
  });
};
