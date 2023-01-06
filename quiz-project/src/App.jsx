import { useState } from "react"
import "./App.css"
import { questions } from "./questions"
var answerdQuestions = []
function App() {
	const [score, setScore] = useState(0)
	const [RandomQuestion, setRandomQuestion] = useState(questions[0])

	console.log("rerender")

	const handleQuiz = (option) => {
		console.log(option)
		if (option === RandomQuestion.answer) {
			setScore(score + 1)
		}
		generateNewQuestion()
	}
	const generateNewQuestion = () => {
		let randomQuestion = questions[Math.floor(Math.random() * questions.length)]
		console.log(answerdQuestions)
		if (answerdQuestions.length === questions.length) {
			answerdQuestions = []
			setScore(0)
		}
		if (answerdQuestions.includes(randomQuestion)) {
			generateNewQuestion()
		} else {
			setRandomQuestion(randomQuestion)
			answerdQuestions.push(randomQuestion)
		}
	}

	return (
		<div className="App">
			<h1>quiz app</h1>
			<div className="question">
				<p>{RandomQuestion.title}</p>
			</div>
			<div className="options">
				{RandomQuestion.options?.map((option, i) => {
					return (
						<div key={i} onClick={() => handleQuiz(option)}>
							{option}
						</div>
					)
				})}
			</div>
			<p className="score"> score: {score}</p>
		</div>
	)
}

export default App
