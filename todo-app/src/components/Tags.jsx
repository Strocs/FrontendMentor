export const Tags = ({ className, text, children }) => {
  return (
    <li
      className={`flex items-center px-2 py-1 w-fit rounded text-white text-[.7rem] leading-none ${className}`}
    >
      {text}
      {children}
    </li>
  )
}
