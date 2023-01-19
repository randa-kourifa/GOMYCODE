import React, { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Home() {
	const msg = useContext(UserContext)

	return <div>home</div>
}
