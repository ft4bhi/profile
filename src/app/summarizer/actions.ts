'use server'

import { summarizeProject } from '@/ai/flows/project-summarizer'
import { z } from 'zod'

const summarizerSchema = z.object({
  description: z.string().min(20, { message: 'Description must be at least 20 characters.'}),
  keywords: z.string().min(3, { message: 'Please provide at least one keyword.'}),
})

type SummarizerState = {
  summary: string | null;
  errors: {
    description?: string[];
    keywords?: string[];
    _form?: string[];
  } | null;
}

export async function generateSummaryAction(prevState: SummarizerState, formData: FormData): Promise<SummarizerState> {
  try {
    const validatedFields = summarizerSchema.safeParse({
      description: formData.get('description'),
      keywords: formData.get('keywords'),
    })

    if (!validatedFields.success) {
      return {
        summary: null,
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const keywordsArray = validatedFields.data.keywords.split(',').map(k => k.trim()).filter(Boolean);
    if(keywordsArray.length === 0) {
        return {
            summary: null,
            errors: { keywords: ['Please provide at least one valid keyword.'] }
        }
    }

    const result = await summarizeProject({
      description: validatedFields.data.description,
      keywords: keywordsArray,
    });

    if (!result.summary) {
        return {
            summary: null,
            errors: { _form: ['The AI could not generate a summary. Please try modifying your input.'] }
        }
    }

    return {
      summary: result.summary,
      errors: null,
    }
  } catch (error) {
    console.error(error);
    return {
      summary: null,
      errors: { _form: ['An unexpected error occurred. Please try again later.'] },
    }
  }
}
