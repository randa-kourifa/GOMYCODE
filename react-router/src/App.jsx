import { useEffect } from "react"
import Routers from "../Routers"
import "./App.css"
import { UserContext } from "./UserContext"

function App() {
	const [msg, setmsg] = useState("hello")
	const [timeSinceMount, setTimeSinceMount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeSinceMount(timeSinceMount + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<UserContext.Provider value={{ msg, setmsg }}>
			<div className="App">
				<nav>navbar</nav>
				<Routers />
				<footer>footer</footer>
			</div>
		</UserContext.Provider>
	)
}

export default App
