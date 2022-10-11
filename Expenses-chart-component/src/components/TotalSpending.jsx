const TotalSpending = ({month, total}) => {
	return (
		<div className={`total-${month}-month`}>
			{month === 'last' ? <h3>{total}</h3> : ''}
			<h2>Total {month} month</h2>
			{month === 'this' ? <h3>{total}</h3> : ''}
		</div>
	)
}

export default TotalSpending
