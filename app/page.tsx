"use client";

import { handleSubmit } from "./ServerActions";

export default function Home() {
  return (
    <form action={handleSubmit}>
      <input name="file" type="file" accept="image/png, image/jpeg" />
      <button type="submit">Upload</button>
    </form>
  );
}
