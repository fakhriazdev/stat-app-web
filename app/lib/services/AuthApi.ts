
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'auth/';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: 'login',
                method: 'POST',
                body: {
                    username: username,
                    password: password
                }
            }),
            transformResponse: (resp:any) => resp.data

        }),
    }),
});

export const { useLoginMutation } = authApi;
