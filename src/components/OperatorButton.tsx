import React from "react";


interface OperationButtonProps {
    label: string;
    onClick: () => void;
    isDarkMode: boolean;
}

export default function OperatorButton({ label, onClick, isDarkMode }: OperationButtonProps) {
  return (
    <button
      className={`calculator__key ${isDarkMode ? "calculator__key__dark" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
