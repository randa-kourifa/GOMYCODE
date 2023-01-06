import React from "react"

export default function User({ OurPropUser }) {
	const users = [
		{ name: "hamza", id: 1 },
		{ name: "ali", id: 2 },
		{ name: "somthing", id: 45 },
		{ name: "ahmed", id: 3 },
	]
	{
		users.map((user) => <User key={user.id} OurPropUser={user} />)
	}
	return (
		<div>
			<div>name : {OurPropUser?.name}</div>
			<div>id : {OurPropUser?.id}</div>
		</div>
	)
}
