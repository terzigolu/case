import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { getHeaders } from './getHeaders';

export interface IResponse<T> {
  data: T;
  status: number;
  message?: string;
}

const baseQuery = retry(
  async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: Config.API_BASE_URL,
      timeout: Number(Config.API_TIMEOUT),
      prepareHeaders: async (headers) => {
        const defaultHeaders = getHeaders();
        Object.entries(defaultHeaders).forEach(([key, value]) => {
          headers.set(key, value);
        });
        return headers;
      },
    })(args, api, extraOptions);

    // Hata kontrolü
    if (result.error) {
      return { error: result.error };
    }

    // Data kontrolü
    if (result.data) {
      return { data: result.data };
    }

    // Varsayılan hata
    return {
      error: {
        status: 500,
        data: { message: 'Bir hata oluştu' },
      },
    };
  },
  {
    maxRetries: 1,
  }
);

export default baseQuery;
