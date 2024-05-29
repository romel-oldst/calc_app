export default function OperatorButton({label, onClick, isDarkMode}) {
  return (
    <button
      className={`calculator__key ${
        isDarkMode ? "calculator__key__dark" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
