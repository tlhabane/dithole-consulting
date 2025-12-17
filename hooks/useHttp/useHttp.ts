import { useCallback } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from "@/config.ts";

export const useHttp = <T extends Record<string, any>>() => {
    return useCallback(async  (requestConfig: AxiosRequestConfig) => {
        try {
            const response = await axios({ ...requestConfig, baseURL: BASE_URL, withCredentials: true });
            return (response as AxiosResponse).data;
        } catch (error: AxiosError | Error | any) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                throw new Error(response.data);
            }

            throw error;
        }
    }, [])
};