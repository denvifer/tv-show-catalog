export const fetchJson = async <TResponse = any>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
) => {
  const response = await fetch(input, init);
  const data = await response.json();
  return data as TResponse;
};
