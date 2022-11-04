type Props = {
  submit: boolean,
}

export const Title: React.FC<Props> = ({submit}) => {
  return (
    <h1 className={`text-white text-2xl lg:text-3xl font-bold ${submit && 'text-center'}`}>{!submit ? 'How did we do?' : 'Thank you!'}</h1>
  )
}
