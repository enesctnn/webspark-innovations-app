import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const ContactFormSchema = z.object({
  user_name: z.string().min(2),
  user_email: z.string().email(),
  user_phone: z
    .string()
    .regex(phoneRegex, { message: 'Please enter a valid phone number' }),
  message: z.string().min(4).max(500),
});

export type ContactFormSchemaT = z.infer<typeof ContactFormSchema>;
