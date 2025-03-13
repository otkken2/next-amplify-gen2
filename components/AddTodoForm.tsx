"use client";

import { FormEvent, useState } from "react";

interface Props {
  action: (data: FormData) => Promise<void>;
}
export const AddTodoForm = ({ action }: Props) => {
  const [text, setText] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await action(formData);
    setText("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}