import React from "react"
import { useGetTodosQuery } from "../../app/ApiSlice"
import Task from "../Task"
import classes from "./styles.module.css"
export default function ListTask() {
	const { data, isLoading, isError } = useGetTodosQuery()

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	return (
		<div className={classes.container}>
			{data.map((el) => (
				<Task key={el._id} {...el} />
			))}
		</div>
	)
}
