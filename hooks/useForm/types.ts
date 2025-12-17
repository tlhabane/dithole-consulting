import React from "react";

export type FormInputData = {
    value: string;
    error: string;
    type: 'text' | 'email' | 'tel';
}

export type FormData = Record<string, FormInputData>;

export type InputChangeEvent<T = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = React.ChangeEvent<T>;
export type InputChangeFn<TElement extends HTMLElement = HTMLInputElement, TReturn = any> = (
    event: InputChangeEvent<TElement>,
) => TReturn;

export type InputFocusEvent<T = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = React.FocusEvent<T>;
export type InputFocusFn<TElement extends HTMLElement = HTMLInputElement, TReturn = any> = (
    event: InputFocusEvent<TElement>,
) => TReturn;

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type FormSubmitFn<TReturn = any> = (event: FormEvent) => TReturn;