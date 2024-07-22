import { b2bUri } from "../routes";

type RenewAccessToken = {
  accessToken: string;
  refreshToken: string;
};

export async function renewAccessToken(refreshToken: string) {
  try {
    const response = await fetch(
      new URL(
        "/auth/tokens/refresh",
        process.env.NEXT_PUBLIC_AUTHENTICATION_API_URL
      ),
      {
        method: "POST",
        body: JSON.stringify({ refreshToken }),
        headers: {
          "Content-Type": "application/json",
          origin: b2bUri,
        },
      }
    );

    if (response.status === 200) {
      const data = await response.json();

      return data as RenewAccessToken;
    }
  } catch (err) {}

  return undefined;
}
