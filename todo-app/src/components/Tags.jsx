export const Tags = ({ className, text, children }) => {
  return (
    <li
      className={`flex items-center px-2 py-1 w-fit rounded text-white text-[.7rem] leading-none ${className}`}
    >
      {text[0].toUpperCase() + text.slice(1)}
      {children}
    </li>
  )
}
