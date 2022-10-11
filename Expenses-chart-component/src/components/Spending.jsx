import "./Spending.css"
import data from '../../data.json'

const Spending = () => {
	const valueArray = []
	data.map((day) => {
		valueArray.push(day.amount)
	})

	const valueMax = Math.max(...valueArray)

	const convertToPercent = (value) => (value / valueMax) * 100

	return (
		<>
			<div className="spending-days">
				{data.map((day, key) => (
					<div key={key} className="days-bar">
						<div className={day.amount === valueMax ? "bar-max" : "bar"} style={{ height: `${convertToPercent(day.amount)}%` }}>
							<div className="bar-amount">${day.amount}</div>
						</div>
						<p>{day.day}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default Spending
