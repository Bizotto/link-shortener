"use client";
import { useState } from "react";

export function LinkShortener() {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function handleSubmit() {
    setResult(inputValue);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border border-black rounded-full p-2 bg-slate-400 placeholder:text-slate-700 items-center flex"
        placeholder="https://example.com"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="border border-black rounded-full bg-slate-400 text-slate-700 hover:bg-slate-700/50 transition-all duration-300"
      >
        Shorten
      </button>
      <div className="border border-black rounded-full h-8 w-30 p-2 flex items-center">
        {result ? result : "Your link will appear here"}
      </div>
    </div>
  );
}
