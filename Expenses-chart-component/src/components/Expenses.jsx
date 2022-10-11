import "./Expenses.css"
import Balance from "./Balance"
import Spending from "./Spending"
import TotalSpending from "./TotalSpending"

const Expenses = () => {
	return (
		<div className="expenses-container">
			<Balance />
			<div className="expenses-spending">
				<h1 className="spending-title">Spending - Last 7 days</h1>
				<Spending />
				<hr />
				<div className="spending-total">
					<TotalSpending month={"this"} total={"$478.33"} />
					<TotalSpending month={"last"} total={"+2.4%"} />
				</div>
			</div>
		</div>
	)
}

export default Expenses
