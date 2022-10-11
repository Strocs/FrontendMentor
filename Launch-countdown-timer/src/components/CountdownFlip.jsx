import PropTypes from "prop-types"

const CountdownFlip = ({ time = 0, position = "",  }) => {
	return (
		<div className={`cards__${position} cards__divider`}>
			<h2>{time < 10 ? `0${time}` : time}</h2>
		</div>
	)
}

export default CountdownFlip

CountdownFlip.propTypes = {
	time: PropTypes.number,
	position: PropTypes.string,
}
