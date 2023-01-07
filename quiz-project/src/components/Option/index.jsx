import React from "react"

export default function Options({ options, handleQuiz }) {
	return (
		<div className="options">
			{options?.map((option, i) => (
				<div key={i} onClick={() => handleQuiz(option)}>
					{option}
				</div>
			))}
		</div>
	)
}
