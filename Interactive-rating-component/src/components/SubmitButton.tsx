type Props = {
  setSubmit: Function,
}
export const SubmitButton: React.FC<Props> = ({setSubmit}) => {

  return (
    <button className="w-full h-12 rounded-full text-sm lg:text-base tracking-widest bg-orange text-white hover:bg-white hover:text-orange" type="submit" onClick={() => setSubmit(true)}>SUBMIT</button>
  )
}
