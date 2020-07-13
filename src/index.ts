import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

function formatVariables(variables: any): any {
  let formatedVariables = JSON.stringify(variables);
  formatedVariables = formatedVariables.replace(/"([^"]+)"\s*:\s*/g, '$1:');
  return formatedVariables;
}
function formatQuery(query: string, variables: any): string {
  let formatedQuery = query;
  for (const key in variables) {
    const regex = new RegExp(`\\$${key}`, 'g');
    formatedQuery = formatedQuery.replace(regex, formatVariables(variables[key]));
  }
  return formatedQuery;
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
