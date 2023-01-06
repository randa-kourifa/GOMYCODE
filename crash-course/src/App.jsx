import "./App.css"
import Button from "./components/Button"

function App() {
	const name = "react"
	const handleClick = (arg) => {
		console.log(arg)
		alert("Button clicked")
	}

	return (
		<>
			<div></div>

			<Button OurPropsAsFunction={handleClick} />
		</>
	)
}

export default App
