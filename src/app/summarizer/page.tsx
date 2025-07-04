'use client';

import { useFormState } from 'react-dom';
import { generateSummaryAction } from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { SubmitButton } from '@/components/submit-button';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  summary: null,
  errors: null,
};

export default function SummarizerPage() {
  const [state, formAction] = useFormState(generateSummaryAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.errors?._form) {
      toast({
        title: 'Error',
        description: state.errors._form.join(', '),
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">AI Project Summarizer</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Generate a compelling, professional summary for your project using AI.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Describe Your Project</CardTitle>
            <CardDescription>
              Provide a detailed description and some keywords to get the best results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base font-medium">Project Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="e.g., A full-stack web application that allows users to create and share recipes. It features a modern user interface built with React, a robust backend powered by Node.js, and a PostgreSQL database..."
                  rows={8}
                  required
                />
                 {state.errors?.description && (
                  <p className="text-sm font-medium text-destructive">{state.errors.description[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords" className="text-base font-medium">Keywords</Label>
                <Input
                  id="keywords"
                  name="keywords"
                  placeholder="e.g., cooking, social, full-stack, react"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Comma-separated keywords that describe your project's domain and technologies.
                </p>
                 {state.errors?.keywords && (
                  <p className="text-sm font-medium text-destructive">{state.errors.keywords[0]}</p>
                )}
              </div>
              <SubmitButton size="lg">Generate Summary</SubmitButton>
            </form>
          </CardContent>
        </Card>

        {state.summary && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl font-headline">Generated Summary</h2>
            <Card className="mt-6">
              <CardContent className="p-6">
                <p className="text-lg whitespace-pre-wrap font-serif">{state.summary}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
