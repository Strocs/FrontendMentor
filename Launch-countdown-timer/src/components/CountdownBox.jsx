import PropTypes from "prop-types"
import "./CountdownBox.css"
import CountdownFlip from "./CountdownFlip"

const CountdownBox = ({ text, currentSec = 0, nextSec = 0, flipTime = 0 }) => {
	return (
		<div className="countdown-box__container">
			<div className="countdown-box__wrapper">
				<div className="countdown-box__cards">
					{/* <div className="cards__flip-container">
						<div className='cards__flip cards__divider'>
							<h2>99</h2>
						</div>
						<div className="cards__flip-empty"></div>
					</div> */}
					<CountdownFlip time={nextSec} position="top" />
					<CountdownFlip time={currentSec} position="bottom" />
				</div>
			</div>
			<p>{text}</p>
		</div>
	)
}

export default CountdownBox

CountdownBox.propTypes = {
	text: PropTypes.string,
	currentTime: PropTypes.number,
	prevTime: PropTypes.number,
	flipTime: PropTypes.number,
}
