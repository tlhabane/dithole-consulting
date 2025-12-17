import { useCallback, useState } from 'react';
import { useInputValidation } from './useInputValidation';
import { useFormValidation } from './useFormValidation';
import type { FormData, FormSubmitFn, InputChangeFn, InputFocusFn } from './types';

export const useForm = (initialValues: FormData) => {
    const [formData, setFormData] = useState(initialValues);
    const validateInput = useInputValidation();
    const validateForm = useFormValidation();

    const handleInputDataUpdate: InputChangeFn<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, void> = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]:{
                ...prevState[name],
                value,
            }
        }))
    }, []);

    const handleInputFocus: InputFocusFn<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, void> = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevState) => {
            const updatedInputData = validateInput({
                ...prevState[name],
                value
            });

            return {
                ...prevState,
                [name]: updatedInputData
            }
        })
    }, [validateInput]);

    const handleSubmit = useCallback(
        (callback: (data: Record<keyof FormData, any>, button?: HTMLButtonElement) => void): FormSubmitFn => (event) => {
            event.preventDefault();

            const formSubmitButton = event.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
            const { isValid, updatedFormState } = validateForm(formData);
            if (!isValid) {
                setFormData(updatedFormState);
                return;
            }
            const validated = Object.keys(updatedFormState).reduce((acc, key) => {
                acc[key] = updatedFormState[key].value;
                return acc;
            }, {});

            callback(validated, formSubmitButton);
        },
        [formData,  validateForm],
    );

    const resetForm = useCallback(() => {
        setFormData(initialValues);
    }, [initialValues])

    return { formData, handleInputDataUpdate, handleInputFocus, handleSubmit, resetForm };
}