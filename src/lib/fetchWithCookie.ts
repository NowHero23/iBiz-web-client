import { getCookie } from "cookies-next";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetchWithCookie(url: string, options: FetchOptions) {
  const cookie = getCookie("jwt");
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${cookie}`,
      //Cookies: Cookie
    },
    credentials: "include",
  });
  return response;
}
