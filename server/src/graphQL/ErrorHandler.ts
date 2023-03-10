/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLError } from 'graphql';

function ErrorHandler(err: any): void {
    if (err.name === 'ValidationError') {
        const errors: { [T: string]: string } = {};

        Object.keys(err.errors).forEach((key: string) => {
            errors[key] = err.errors[key].message;
        });

        throw new GraphQLError('Validation Error', {
            extensions: { code: 'YOUR_ERROR_CODE', errors },
        });
    }

    throw new GraphQLError('Validation Error', {
        extensions: { code: 'YOUR_ERROR_CODE', error: 'Something went wrong' },
    });
}

export { ErrorHandler };
