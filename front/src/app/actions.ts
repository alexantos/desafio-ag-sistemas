'use server';

import { redirect } from 'next/navigation';

export async function submitForm(formData: FormData) {
  const nome = formData.get('nome');
  const email = formData.get('email');
  const motivacao = formData.get('motivacao');

  // Perform validation or other server-side logic
  if (!nome || !email || !motivacao) {
    throw new Error('Name and email are required.');
  }

  // Example: Send data to an external API
  const response = await fetch('http://127.0.0.1:3001/membro/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, email, motivacao }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form data.');
  }

  // Redirect or revalidate data after successful submission
  redirect('/membro');
}