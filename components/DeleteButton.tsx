"use server";
import { cookiesClient } from '@/utils/amplify-utils';
import { revalidatePath } from 'next/cache';
import React from 'react'

interface Props {
  id: string;
}

export const DeleteButton = ({ id }: Props) => {
  async function deleteTodo() {
    "use server";
    console.log("deleteTodo", id);
    await cookiesClient.models.Todo.delete({ id });
    revalidatePath("/");
  }
  return (
    <form action={deleteTodo}>
      <button type="submit">Delete</button>
    </form>
  )
}
