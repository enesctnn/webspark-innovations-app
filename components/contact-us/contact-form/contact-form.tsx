'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ContactFormSchema, ContactFormSchemaT } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';

export function ContactForm() {
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const [error, setError] = useState<undefined | string>('');
  const [success, setSuccess] = useState<undefined | string>('');
  const [isPending, setIsPending] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const form = useForm<ContactFormSchemaT>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormSchemaT> = async () => {
    setError(undefined);
    setSuccess(undefined);
    if (
      formRef.current &&
      EMAILJS_SERVICE_ID &&
      EMAILJS_TEMPLATE_ID &&
      EMAILJS_PUBLIC_KEY
    ) {
      setIsPending(true);
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        setSuccess('Email Sent Successfully!');
      } catch (err) {
        console.error(err);
        setError('Failed To Send Email!');
      } finally {
        setIsPending(false);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10 rounded-md bg-[#111] px-8 py-5 font-bold"
      >
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="user_name">Name</FormLabel>
              <FormControl>
                <Input
                  id="user_name"
                  disabled={isPending}
                  type="text"
                  placeholder="Full Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="user_email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="user_email"
                    disabled={isPending}
                    type="email"
                    placeholder="example@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user_phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="user_phone">Phone</FormLabel>
                <FormControl>
                  <Input
                    id="user_phone"
                    disabled={isPending}
                    type="string"
                    placeholder="(267) 890-7561"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  disabled={isPending}
                  placeholder="Your Message"
                  className="max-h-96"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {success && <FormSuccess message={success} />}
        {error && <FormError message={error} />}
        <Button
          disabled={isPending}
          type="submit"
          className="mx-auto font-bold"
          variant="secondary"
        >
          {isPending ? 'Sending...' : 'GET A CALL'}
        </Button>
      </form>
    </Form>
  );
}
