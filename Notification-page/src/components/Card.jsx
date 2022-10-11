import React, { useEffect, useState } from "react"
import Notification from "./Notification.jsx"
import "../components/Card.css"
import data from "../../data.json"

const Card = () => {
	const [read, setRead] = useState([])
	const [unreadCounter, setUnreadCounter] = useState(0)

	//Adding data to states.
	useEffect(() => {
		data.forEach((user) => {
			setRead((curr) => [...curr, user.read])
			if (!user.read) setUnreadCounter((current) => current + 1)
		})
	}, [])

	const handleMarkAsRead = (userState, id) => {
		if (!userState && unreadCounter > 0) {
			setUnreadCounter(unreadCounter - 1)

			const tempRead = [...read]
			tempRead[id] = true
			setRead(tempRead)
		}
	}

	const handleMarkAllAsRead = () => {
		setUnreadCounter(0)
		setRead(read.map((readState) => (readState = true)))
	}

	return (
		<>
			<div className="notification-header">
				<div className="header-count">
					<h1 className="count-title">Notifications</h1>
					<span>{unreadCounter}</span>
				</div>
				<button onClick={handleMarkAllAsRead} className="header-btn">
					Mark all as read
				</button>
			</div>

			<ul className="notification-container">
				{data.map((user, i) => (
					<Notification
						key={user.id}
						id={i}
						name={user.name}
						avatar={user.avatar}
						type={user.type}
						link={user.link}
						since={user.since}
						message={user.message}
						image={user.image}
						read={read[i]}
						callback={handleMarkAsRead}
					/>
				))}
			</ul>
		</>
	)
}

export default Card
