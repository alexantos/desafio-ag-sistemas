'use server';

import { redirect } from 'next/navigation';

export async function cadastroMembro(formData: FormData) {
  const nome = formData.get('nome');
  const email = formData.get('email');
  const motivacao = formData.get('motivacao');

  if (!nome || !email || !motivacao) {
    throw new Error('Name and email are required.');
  }

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

  redirect('/membro');
}

export async function enviarConvite(membro_id: string) {


  if (!membro_id) {
    throw new Error('Necessário um membro selecionado.');
  }

  const response_membro = await fetch('http://127.0.0.1:3001/membro/' + membro_id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ aprovado: true }),
  });

  if (!response_membro.ok) {
    throw new Error('Failed to submit form data.');
  }

  const response_convite = await fetch('http://127.0.0.1:3001/convite/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ membro: membro_id }),
  });

  if (!response_convite.ok) {
    throw new Error('Failed to submit form data.');
  }

  redirect('/membro');
}


export async function cadastroComplemento(formData: FormData) {
  const cpf = formData.get('cpf');
  const telefone = formData.get('telefone');
  const membro = formData.get('membro');

  if (!cpf || !telefone ) {
    throw new Error('Digite o cpf e o telefone antes de enviar.');
  }

  const response = await fetch('http://127.0.0.1:3001/complemento/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cpf, telefone, membro }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form data.');
  }

  redirect('/membro');
}