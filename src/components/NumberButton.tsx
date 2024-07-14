import React from "react";


interface NumberButtonProps {
    label: string;
    onClick: () => void;
    isDarkMode: boolean;
}

export default function NumberButton({ label, onClick, isDarkMode }: NumberButtonProps) {
  return (
    <button
      className={`calculator__key ${isDarkMode ? "calculator__key__dark" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
