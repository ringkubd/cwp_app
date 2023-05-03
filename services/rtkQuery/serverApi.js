import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {navigate} from "../../utils/navigate";

export const ServerApi = createApi({
    reducerPath: 'ServerApi',
    baseQuery: async (args, api, extraOption) => {
        const apiBase = api.getState()?.server?.api_base
        if (!apiBase) {
            return {
                error: {
                    status: 400,
                    statusText: 'Bad Request',
                    data: 'No project ID received',
                },
            }
        }
        const adjustedArgs = typeof args === 'string' ? apiBase : { ...args, url: apiBase }
        const b = fetchBaseQuery({
            baseUrl: apiBase,
            prepareHeaders: (headers, {getState}) => {
                headers.set('Accept', `application/json`);
                headers.set('Content-Type', 'application/json')
                return headers
            }
        });
        console.log(await  b(adjustedArgs, api, extraOption))
        return b(adjustedArgs, api, extraOption);
    },
    tagTypes: [],
    endpoints: builder => ({
        serverType: builder.mutation({
            query: (arg) => ({
                url: '/account_metadata/',
                method: 'POST',
                formData: {
                    action: 'list',
                    key: "abc#@!"
                },
                responseType: 'json'
            })
        })
    })
})

export const { useServerTypeMutation } = ServerApi;
