import { observer } from 'mobx-react-lite'
import { rootStore } from '../stores'

interface TodosProps {
	userId: string
}

const Todos = observer(({ userId }: TodosProps) => {
	const todos = rootStore.todosByOwner(userId)

	return (
		<>
			{todos.map((todo) => (
				<ul key={todo.id}>
					<li>
						<span>{todo.title}</span>
						<button>Remove</button>
					</li>
				</ul>
			))}
		</>
	)
})

export { Todos }
