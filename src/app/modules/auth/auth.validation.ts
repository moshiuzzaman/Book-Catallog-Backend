import z from 'zod';
import { ROLE } from './auth.constant';

const signuplidation = z.object({
    body: z.object({
        name: z.string({ required_error: 'name is required' }),
        email: z.string({ required_error: 'email is required' }),
        password: z.string({ required_error: 'password is required' }),
        role: z.enum(ROLE as [string, ...string[]]),
        contactNo: z.string({ required_error: 'contactNo is required' }),
        address: z.string({ required_error: 'address is required' }),
        profileImg: z.string({ required_error: 'profileImg is required' })
    })
});

const signinValidation = z.object({
    body: z.object({
        email: z.string({ required_error: 'email is required' }),
        password: z.string({ required_error: 'password is required' })
    })
});

export const authValidation = {
    signinValidation,
    signuplidation
};
