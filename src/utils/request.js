const constructURL = (endpoint, query, baseURL = '') => {
  const url = new URL(`${baseURL || process.env.REACT_APP_API_ROOT}${endpoint}`);
  const appid = process.env.REACT_APP_APP_ID;
  const searchParams = new URLSearchParams({ appid,...query }).toString();
  url.search = searchParams;
  return url;
};

export const request = async ({ endpoint = '', method = 'GET', queryParams = {}, body = {}, baseURL = '', headers = {}}) => {
  try {
    const url = constructURL(endpoint, queryParams, baseURL);
    const requestOptions = {
      method,
      body,
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    };
    
    if ([ 'GET', 'HEAD' ].includes(method)) {
      delete requestOptions.body;
    }

    const response = await fetch(url, requestOptions);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error;
  }
};