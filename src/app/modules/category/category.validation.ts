import z from 'zod';

const createValidation = z.object({
    body: z.object({
        title: z.string({ required_error: 'title is required' })
    })
});

export const categoryValidation = {
    createValidation
};
