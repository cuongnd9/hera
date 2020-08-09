import axios from 'axios';

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

interface Options {
  url?: string;
  headers?: any;
}


const globalOptions: Options = {};

const hera = async ({
  query,
  variables,
  options = globalOptions,
}: {
  query: string;
  variables?: any;
  options?: Options;
}): Promise<{ data: any; errors: any[] }> => {
  if (!options.url) {
    return {
      data: null,
      errors: [new Error('options.url must be provided')],
    };
  }
  try {
    const res = await axios.post(
      options.url,
      {
        query: variables ? formatQuery(query, variables) : query,
      },
      {
        headers: options.headers,
      },
    );
    return res.data;
  } catch (error) {
    return { data: null, errors: [error] };
  }
};

export { hera, globalOptions };
