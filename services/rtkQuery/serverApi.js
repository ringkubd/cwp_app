import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {navigate} from "../../utils/navigate";

const rawBaseQuery = fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: headers => {
        headers.set('content-type', 'multipart/form-data');
        return headers;
    }
})

const dynamicBaseQuery = async (args, api, extraOptions) => {
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
    const urlEnd = typeof args === 'string' ? args : args.url
    args.body.key = api.getState()?.server?.api_key
    const formData = new FormData();
    for ( let key in args.body ) {
        formData.append(key, args.body[key]);
    }
    args.body =  formData;
    console.log(args)
    // construct a dynamically generated portion of the url
    const adjustedUrl = apiBase+`${urlEnd}`
    const adjustedArgs = typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }
    // provide the amended url and other params to the raw base query
    return rawBaseQuery(adjustedArgs, api, extraOptions)
}

export const ServerApi = createApi({
    reducerPath: 'ServerApi',
    baseQuery: dynamicBaseQuery,
    tagTypes: [],
    endpoints: builder => ({
        serverType: builder.mutation({
            query: (arg) => ({
                url: 'typeserver',
                method: 'POST',
                body: {
                    action: 'list',
                },
                responseType: 'json'
            })
        }),
        accountList: builder.query({
            query: (arg) => ({
                url: 'account',
                method: 'POST',
                body: {
                    action: 'list',
                },
                responseType: 'json'
            })
        }),
    })
})

export const { useServerTypeMutation, useAccountListQuery } = ServerApi;
