import "./Notification.css"

const Notification = ({ id, avatar, name, since, type, message, link, image, read, callback }) => {
	return (
		<li	
			onClick={() => {
				callback(read, id)
			}}
			className={`notification-list ${read ? "" : "notification-unread"}`}
		>
			<div className="list-container">
				<a href="#">
					<img className="notification-avatar" src={`./images/avatar-${avatar}.webp`} alt={name} />
				</a>

				<div className="notification-content">
					<p className="content-text">
						<a className="content-name" href="#">
							{name}&nbsp;&nbsp;
						</a>

						{(() => {
							switch (type) {
								case "reaction":
									return "reacted to your recent post"
								case "follow":
									return "followed you"
								case "join":
									return "has joined your group"
								case "message":
									return "sent you a private message"
								case "comment":
									return "commented on your picture"
								case "left":
									return "left the group"
								default:
									return null
							}
						})()}

						{type === "reaction" || type === "join" || type === "left" ? (
							<a className={`text-link ${type === "reaction" ? "text-link-reacted" : ""}`} href="#">
								&nbsp;&nbsp;
								{link}
							</a>
						) : null}
						{read ? null : <span className="unread-dot"></span>}
					</p>

					<p className="content-since">{since}</p>
					{type === "message" ? (
						<div className="notification-message">
							<a href="#">
								<p>{message}</p>
							</a>
						</div>
					) : null}
				</div>
			</div>

			{type === "comment" ? (
				<a href="#">
					<img className="text-image" src={`./images/${image}.webp`} alt="Commented Image" />
				</a>
			) : null}
		</li>
	)
}

export default Notification
