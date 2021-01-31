import { request } from 'xuka';

function formatVariables(variables: any, enums?: string[]): string {
  let formattedVariables = JSON.stringify(variables);
  formattedVariables = formattedVariables.replace(/"([^"]+)"\s*:\s*/g, '$1:');
  if (enums && enums.length > 0) {
    formattedVariables = formattedVariables.replace(new RegExp(`(${enums.join('|')}):\\"\\w*\\"`, 'g'), (value) => value.replace(/\"/g, ''));
  }
  return formattedVariables;
}
function formatQuery(query: string, variables: any, enums?: string[]): string {
  let formattedQuery = query;
  Object.keys(variables).forEach((key) => {
    const regex = new RegExp(`\\$${key}`, 'g');
    formattedQuery = formattedQuery.replace(regex, formatVariables(variables[key], enums));
  });
  return formattedQuery;
}

interface Options {
  url?: string;
  headers?: any;
  timeout?: number;
  enums?: string[];
}

/* tslint:disable */
let globalOptions: Options = {};

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
    const res = await request(
      options.url,
      {
        data: {
          query: variables ? formatQuery(query, variables, options.enums) : query,
        },
        headers: options.headers,
        method: 'POST',
        timeout: options.timeout || 0,
      }
    );
    return res.data;
  } catch (error) {
    return { data: null, errors: [error] };
  }
};

export { hera, globalOptions, formatQuery };
