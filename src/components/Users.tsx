import { observer } from 'mobx-react-lite'
import { rootStore } from '../stores'
import { Todos } from './Todos'

const Users = observer(() => {
	const users = rootStore.users

	const handleAddRandomTodo = (ownerId: string) => {
		rootStore.addRandomTodo(ownerId)
	}

	return (
		<div
			style={{
				display: 'flex',
				gap: '5rem',
				justifyContent: 'center',
			}}
		>
			{users.map((user) => (
				<div key={user.id}>
					<div>
						<h2>{user.name}</h2>

						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}
						>
							<button onClick={() => handleAddRandomTodo(user.id)}>Add random todo</button>
							<span>Todos:</span>

							<Todos userId={user.id} />
						</div>
					</div>
				</div>
			))}
		</div>
	)
})

export { Users }
