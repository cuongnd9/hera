import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

function formatVariables(variables: any): any {
  let formattedVariables = JSON.stringify(variables);
  formattedVariables = formattedVariables.replace(/"([^"]+)"\s*:\s*/g, '$1:');
  return formattedVariables;
}
function formatQuery(query: string, variables: any): string {
  let formattedQuery = query;
  Object.keys(variables).forEach((key) => {
    const regex = new RegExp(`\\$${key}`, 'g');
    formattedQuery = formattedQuery.replace(regex, formatVariables(variables[key]));
  });
  return formattedQuery;
}

interface Option {
  url: string;
  headers?: AxiosRequestConfig['headers'];
}

const hera = ({
  query,
  variables,
  option,
}: {
  query: string;
  variables?: any;
  option: Option;
}): Promise<any> => axios.post(
  option.url,
  {
    query: formatQuery(query, variables),
  },
  {
    headers: option.headers,
  },
)
  .then((res: AxiosResponse) => res.data.data);

export { hera };
