import z from 'zod';

const createValidation = z.object({
    body: z.object({
        orderedBooks: z
            .array(
                z.object({
                    bookId: z.string({ required_error: 'bookId is required' }),
                    quantity: z.number({
                        required_error: 'quantity is required'
                    })
                })
            )
            .nonempty({ message: 'At least one ordered book is required' })
    })
});

export const orderValidation = {
    createValidation
};
