type Props = {
	number: number
	rate: number
	setRate: Function
}

export const RateButton: React.FC<Props> = ({ number, rate, setRate }) => {
	return (
		<button 
      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${number === rate ? 'bg-light-grey text-white' : 'bg-medium-blue text-light-grey'} hover:bg-orange hover:text-white`} 
      type='button' 
      onClick={() => setRate(number)}
    >
			{number}
		</button>
	)
}
