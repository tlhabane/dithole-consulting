import { useCallback } from 'react';
import { useInputValidation } from './useInputValidation';
import type { FormData } from './types';

export const useFormValidation = () => {
    const validateInput = useInputValidation();

    return useCallback((formData: FormData) => {
        let isValid = true;
        const updatedFormState: FormData = {};

        for (const key in formData) {
            const updatedState = validateInput(formData[key])
            if (updatedState.error.trim() !== '') isValid = false;
            updatedFormState[key] = updatedState;
        }

        return { isValid, updatedFormState };
    }, [validateInput])
};