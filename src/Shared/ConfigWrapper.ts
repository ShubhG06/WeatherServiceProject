export const getHeaders = (config: object | undefined) => {
  const defaultHeaders: any = {
    "Accept": "application/json, text/plain",
    "Content-type": "application/json",
  };
  return Object.assign(defaultHeaders, config);
};
