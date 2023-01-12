import { useRef } from "react"
import "./App.css"

function App() {
	const myref = useRef(null)

	const getRef = () => {
		console.log(myref)
	}

	return (
		<>
			<button onClick={getRef} ref={myref}>
				ref
			</button>
		</>
	)
}

export default App
