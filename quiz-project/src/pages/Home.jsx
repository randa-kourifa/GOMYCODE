import { useState } from "react"
import Options from "../components/Option"
import { questions } from "../questions"

var answerdQuestions = []

export default function Home() {
	const [score, setScore] = useState(0)
	const [RandomQuestion, setRandomQuestion] = useState(questions[0])

	const handleQuiz = (option) => {
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
		<>
			<h1>quiz app</h1>
			<div className="question">
				<p>{RandomQuestion.title}</p>
			</div>
			<Options options={RandomQuestion.options} handleQuiz={handleQuiz} />
			<p className="score"> score: {score}</p>
		</>
	)
}
