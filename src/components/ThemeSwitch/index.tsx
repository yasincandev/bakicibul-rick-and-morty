"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "../Icons/Sun";
import Moon from "../Icons/Moon";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='ml-3 flex flex-col justify-center'>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun width={24} height={24} className='dark:hidden' />
        <Moon width={24} height={24} className='hidden dark:block' />
      </button>
    </div>
  );
}
