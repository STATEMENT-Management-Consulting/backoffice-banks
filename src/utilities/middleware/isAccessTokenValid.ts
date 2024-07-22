import { b2bUri } from "../routes";

type TUser = {
  id: string;
  avatar: string;
  name: string;
  position: string;
};

export async function isAccessTokenValid(token: string) {
  try {
    const response = await fetch(
      new URL("/users/me", process.env.NEXT_PUBLIC_API_MAIN),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          origin: b2bUri,
          "x-access-token": token,
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      return data as TUser;
    }
  } catch {}

  return false;
}
