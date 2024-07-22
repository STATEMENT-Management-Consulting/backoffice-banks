export async function fetchClientIp(): Promise<string | null> {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    // console.error("Failed to fetch client IP:", error);
    return null;
  }
}
