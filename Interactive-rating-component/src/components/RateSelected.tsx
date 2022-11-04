type Props = {
	selected: number
	total: number
}
export const RateSelected: React.FC<Props> = ({ selected, total }) => {
	return (
			<p className='text-orange bg-medium-blue py-2 px-4 my-4 rounded-full'>
				You selected {selected} out of {total}
			</p>
	)
}
