type Props = {
  children: Array<JSX.Element>,
}
export const RateButtonsWrapper: React.FC<Props> = ({children}) => {
  return (
    <div className="flex justify-between my-4 lg:my-6">{children}</div>
  )
}
