export const API_ERROR_STUB: Record<string, any> & { message: string; error: any } = {
    error: 'Error: API is error',
    message: 'API_Error',
};

export const API_ERROR_RESPONSE_STUB = { status: 400, statusText: 'Bad Request' };
