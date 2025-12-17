import { useCallback } from 'react';
import { toast } from 'react-hot-toast';

type Request = Promise<Record<string, any>>;

export const useToast = () =>
    useCallback(
        (request: Request, loading = 'Processing...') =>
            toast.promise(request, {
                loading,
                success: (response) => response?.message,
                error: (error) => error.message.toString(),
            }),
        [],
    );