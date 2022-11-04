type Props = {
  submit: boolean
}
export const Text: React.FC<Props> = ({submit}) => {
  return (
    <p className={`text-light-grey ${submit && 'text-center'}`}>
      {
        !submit 
          ? 
            'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!' 
          : 
            'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
      }
    </p>
  )
}
