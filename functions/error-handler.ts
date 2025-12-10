import { AxiosError } from "axios";

export function handleCatchBlock(err: any) {
    let message = '';

    if (err instanceof AxiosError) {
        if (err.response?.data) {
            message = err.response.data;
        } else {
            message = err.message;
        }
    } else if (err instanceof Error) {
        message = err.message;
    } else if (typeof err === "string") {
        message = err;
    } else {
        message = "Something went wrong!";
    }

    return message;
}