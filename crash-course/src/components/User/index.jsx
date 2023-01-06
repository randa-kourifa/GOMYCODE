import React from "react"

export default function User({ children }) {
	return (
		<div>
			<div>name : {user.name}</div>
			<div>id : {user.id}</div>
			<div>color: {user.color ? user.color : ""}</div>
		</div>
	)
}
