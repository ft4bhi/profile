'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export type ContactFormState = {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    }
  }

  // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
  // For this demo, we'll just log the data and simulate a successful submission.
  console.log('Contact form submitted successfully:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);
  
  // You would add reCAPTCHA validation here before sending the email.

  return {
    message: 'Thank you for your message! I will get back to you soon.',
    errors: {},
    success: true,
  }
}
