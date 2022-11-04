import { Star } from './Star'
import { Title } from './Title'
import { Text } from './Text'
import { Image } from './Image'

type Props = {
	children: JSX.Element,
	SubmitButton: JSX.Element,
	RateSelected: JSX.Element,
	submit: boolean,
}

export const Card: React.FC<Props> = ({ children, SubmitButton, RateSelected, submit }) => {
	return (
		<section className={`grid ${submit && 'place-items-center'} max-w-[26rem] h-[25rem] xl:h-[26rem] bg-dark-blue bg-gradient-radial from-medium-blue to-dark-blue m-7 p-7 pb-8 rounded-2xl`}>
			{submit && <Image />}
			{submit && RateSelected}
			{!submit && <Star />}
			<Title submit={submit} />
			<Text submit={submit} />
			{!submit && children}
			{!submit && SubmitButton}
		</section>
	)
}
