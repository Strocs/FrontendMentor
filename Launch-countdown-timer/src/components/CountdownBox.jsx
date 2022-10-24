import PropTypes from 'prop-types'
import './CountdownBox.css'
import CountdownFlip from './CountdownFlip'

const CountdownBox = ({ text, currentSec = 0, previousSec = 0 }) => {

	return (
		<div className='countdown-box__container'>
			<div className='countdown-box__wrapper'>
				<div className='countdown-box__cards'>
					<CountdownFlip time={currentSec} position='top' />
					{/* <CountdownFlip time={currentSec} position={`flip flip-top ${'animation-top'}`} /> */}
					{/* <CountdownFlip time={previousSec} position={`flip flip-bot ${'animation-bot'}`} /> */}
					<CountdownFlip time={currentSec} position='bottom' />
				</div>
			</div>
			<p>{text}</p>
		</div>
	)
}

export default CountdownBox

CountdownBox.propTypes = {
	text: PropTypes.string,
	currentSec: PropTypes.number,
	flipSec: PropTypes.number,
}
