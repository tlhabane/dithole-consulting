import { useCallback } from "react";
import type { FormInputData } from './types';

/**
 * Email validation
 *
 * @param {string} emailAddress
 * @return {boolean}
 */
const isEmailAddressValid = (emailAddress: string): boolean => {
    const regExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(emailAddress).toLowerCase());
};

/**
 * Telephone number validation
 *
 * @param {string} telephoneNum
 * @return {boolean}
 */
const isTelNumberValid = (telephoneNum: string): boolean => {
    const regExp = /^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g;
    return regExp.test(String(telephoneNum).toLowerCase());
};

const defaultMessages = {
    required: 'This field is required (cannot be left empty)',
    invalidEmail: 'Invalid email address provided',
    invalidTel: 'Invalid telephone number provided',
};

export const useInputValidation = () => (
    useCallback((data: FormInputData): FormInputData => {
        const { value, type } = data;
        let error = '';
        if (type === 'email' && !isEmailAddressValid(String(value))) {
            error = defaultMessages.invalidEmail;
        } else if (type === 'tel' && !isTelNumberValid(String(value))) {
            error = defaultMessages.invalidTel;
        } else if (value === undefined || value === null || value === '') {
            error = defaultMessages.required;
        }

        return { ...data, error };
    }, [])
);