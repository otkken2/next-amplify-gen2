"use client";

import { useState } from "react";

interface Props {
  action: (data: FormData) => Promise<void>;
}
export const AddTodoForm = ({ action }: Props) => {
  const [text, setText] = useState("");
  return (
    <form action={action}>
      <input type="text" name="title" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}